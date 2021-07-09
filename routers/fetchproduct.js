const express=require('express')

require('../database/mongoose')
const Fetch=require('../schema/home')

const Bedroom=require('../schema/Bedroom')
const Livingroom=require('../schema/Livingroom')
const Kitchen=require('../schema/Kitchen')
const Tablelinen=require('../schema/Tablelinen')
const Bathroom=require('../schema/Bathroom')
const { Promise } = require('mongoose')

const recentcollection=require('../schema/recentcollection')


const fetchproductrouter=new express.Router()

fetchproductrouter.post('/fetch_product',async (req,res)=>{

    var arr=[]
    const token=req.headers.authorization.split(" ")[1]
           const data=req.body
        //    const token=data[0].token 

           var count=0
           var al=0

           for(let i=0;i<=data.length-1;i++){
               if(data[i].typevalue!=="all"){
                   count++;
               }
               else{
                   al++;
            }

           }
           var type=data[0].typevalue

           if(type==="all")
           {
               var arlen=0;

            const ret=()=>{
                return new Promise((resolve)=>{
                    data.forEach(async(obj,index)=>{
                        var schema=obj.categoryvalue
                        await eval(schema).findOne({Name:obj.categoryvalue}).then((resp)=>{
                             var check=obj.typevalue
                             if(check==="all")
                             {
                                var key=Object.keys(resp.products)
                                key.forEach((el)=>{
                                   arr=[...arr,...resp.products[el]]
                                })
                                arlen++;                    
                             }
                             if(al===arlen){
                                 resolve(arr);
                             }
                       })
                    })
                })
            }

            ret().then((resp)=>{
               
               recentcollection.findOne({token:token}).then(async(ob)=>{
                   
                   if(ob.recent.length==0 && ob.sorted.length==0 && ob.unsorted.length==0){

                       await recentcollection.updateOne({token:token},{$push:{recent:resp}}).then(()=>{
                           console.log("pushed into recent")
                       })
                       await recentcollection.updateOne({token:token},{$push:{sorted:resp}}).then(()=>{
                        console.log("pushed into sorted")
                    })
                    await recentcollection.updateOne({token:token},{$push:{unsorted:resp}}).then(()=>{
                        console.log("pushed into unsorted")
                    })

                   }

                   else{

                    await recentcollection.updateOne({token:token},{$set:{recent:resp}}).then(()=>{
                        console.log("recent replaced")
                    })
                    await recentcollection.updateOne({token:token},{$set:{sorted:resp}}).then(()=>{
                        console.log("sorted replaced")
                    })
                    await recentcollection.updateOne({token:token},{$set:{unsorted:resp}}).then(()=>{
                        console.log("unsorted replaced")
                    })

                   }
               })

                if((resp.length)%12===0){
                    var len=(resp.length)/12

                    res.send({
                        totalpages:Math.floor(len),
                        current:{products:resp.slice(0,12),currentpage:1},
                        next:{products:resp.slice(12,24),nextpage:2}
                    })

                }
                else{
                    var len=(resp.length)/12+1

                    res.send({
                        totalpages:Math.floor(len),
                        current:{products:resp.slice(0,12),currentpage:1},
                        next:{products:resp.slice(12,24),nextpage:2}
                    })

                }
                
            })
    
           }
           

           else if(type!=="all")
           {      
            //    console.log("entered type value not all")
            var arrlen=0
                   
        const ret=()=>{
            return new Promise(async(resolve)=>{
               await data.forEach(async(obj,index)=>{
                    var schema=obj.categoryvalue
                    await eval(schema).findOne({Name:obj.categoryvalue}).then((resp)=>{
                        var key=obj.typevalue
                        if(resp.products[key]!==undefined)
                        {
                            arrlen++
                            arr=[...arr,...resp.products[key]]
                        }
                        // console.log(count,arrlen)
                        if(arrlen===count){
                            resolve(arr)
                        }
                   })
                })
            })
        }
        ret().then((resp)=>{

            recentcollection.findOne({token}).then(async(ob)=>{
                   
                if(ob.recent.length==0 && ob.sorted.length==0 && ob.unsorted.length==0){

                    await recentcollection.updateOne({token:token},{$push:{recent:resp}}).then(()=>{
                        console.log("pushed into recent")
                    })
                    await recentcollection.updateOne({token:token},{$push:{sorted:resp}}).then(()=>{
                     console.log("pushed into sorted")
                 })
                 await recentcollection.updateOne({token:token},{$push:{unsorted:resp}}).then(()=>{
                     console.log("pushed into unsorted")
                 })

                }

                else{

                 await recentcollection.updateOne({token:token},{$set:{recent:resp}}).then(()=>{
                     console.log("recent replaced")
                 })
                 await recentcollection.updateOne({token:token},{$set:{sorted:resp}}).then(()=>{
                     console.log("sorted replaced")
                 })
                 await recentcollection.updateOne({token:token},{$set:{unsorted:resp}}).then(()=>{
                     console.log("unsorted replaced")
                 })

                }
            })


            if((resp.length)%12===0){
                var len=(resp.length)/12 

                res.send({
                    totalpages:Math.floor(len),
                    current:{products:resp.slice(0,12),currentpage:1},
                    next:{products:resp.slice(12,24),nextpage:2}
                })
                
            }
            else{
                var len=(resp.length)/12+1
                res.send({
                    totalpages:Math.floor(len),
                    current:{products:resp.slice(0,12),currentpage:1},
                    next:{products:resp.slice(12,24),nextpage:2}
                })                
            }
        })

           }                      
})

module.exports=fetchproductrouter