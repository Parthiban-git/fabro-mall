
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

const filter_sortrouter=new express.Router()

filter_sortrouter.post('/filter-sort',async(req,res)=>{

    const token=req.headers.authorization.split(" ")[1]

    const {price,rating,sold,filter,type,sorttype}=req.body

    if(filter===true){

        await recentcollection.findOne({token}).then((obj)=>{

            var arrobj=obj.recent

            if(price!=null){


                var parr1=price.match(/^\d{0,}/)
                var parr2=price.match(/\d{1,}$/)
                var check=Array.isArray(parr2)
                
                var price1=parr1[0]
                var price2
                
                if(check==true){
                    price2=parr2[0]
                }
                else{
                    price2=null
                }
            }
            
            
            var filterarray=arrobj.filter((ele)=>{
                return ((price)?((price2!=null)?(ele.discountprice>=price1 && ele.discountprice<=price2):true) && ((price2==null)?ele.discountprice>price1:true):true) && ((rating)?ele.rating>rating:true) && ((sold)?ele.soldout>sold:true)
            })
            recentcollection.updateOne({token},{$set:{unsorted:filterarray}}).then(()=>{
                console.log("sorted / not filter in unsorted")
           })
            
            if(type===null)
            {
                if((filterarray.length)%12===0){
                    var len=(filterarray.length)/12 
                  res.send({
                    totalpages:Math.floor(len),
                    current:{products:filterarray.slice(0,12),currentpage:1},
                    next:{products:filterarray.slice(12,24),nextpage:2}
                   })
         
                }

              else{

                  var len=(filterarray.length)/12+1
                   res.send({
                   totalpages:Math.floor(len),
                   current:{products:filterarray.slice(0,12),currentpage:1},
                   next:{products:filterarray.slice(12,24),nextpage:2}
                  }) 

                 }

                    recentcollection.updateOne({token},{$set:{sorted:filterarray}}).then(()=>{
                        console.log("no sorted so filter in sorted also")
                    })
            }  

            else if(type!==null)
            {

                var arr=(type=="price")?(sorttype=="ascending")?filterarray.sort((a,b)=>{return a.discountprice-b.discountprice}):filterarray.sort((a,b)=>{return b.discountprice-a.discountprice}):
                 (type=="rating")?(sorttype=="ascending")?filterarray.sort((a,b)=>{return a.rating-b.rating}):filterarray.sort((a,b)=>{return b.rating-a.rating}):null
        
                  if((arr.length)%12===0){
                       var len=(arr.length)/12 

                     res.send({
                       totalpages:Math.floor(len),
                       current:{products:arr.slice(0,12),currentpage:1},
                       next:{products:arr.slice(12,24),nextpage:2}
                      })
            
                   }

                 else{

                     var len=(arr.length)/12+1
                      res.send({
                      totalpages:Math.floor(len),
                      current:{products:arr.slice(0,12),currentpage:1},
                      next:{products:arr.slice(12,24),nextpage:2}
                     }) 

                    }
                    recentcollection.updateOne({token},{$set:{sorted:arr}}).then(()=>{
                        console.log("sorted , so sorted in sorted")
                    })
                    
          
            }
            
        })
    }

    else if(filter===false)
    {
         if(type===null)
         {
            await recentcollection.findOne({token}).then(async(obj)=>{
                await recentcollection.updateOne({token},{$set:{sorted:obj.unsorted}}).then(()=>{
                    var arr=obj.unsorted
    
                   if((arr.length)%12===0)
                   {
                    var len=(arr.length)/12 
    
                  res.send({
                    totalpages:Math.floor(len),
                    current:{products:arr.slice(0,12),currentpage:1},
                    next:{products:arr.slice(12,24),nextpage:2}
                   })
         
                }
    
              else
              {
    
                  var len=(arr.length)/12+1
                   res.send({
                   totalpages:Math.floor(len),
                   current:{products:arr.slice(0,12),currentpage:1},
                   next:{products:arr.slice(12,24),nextpage:2}
                  }) 
    
               }
            })
            })
    
                   
    
         }


         else
         {
            await recentcollection.findOne({token}).then((obj)=>{

                var sortarray=obj.sorted
  
                var arr=(type=="price")?(sorttype=="ascending")?sortarray.sort((a,b)=>{return a.discountprice-b.discountprice}):sortarray.sort((a,b)=>{return b.discountprice-a.discountprice}):
                (type=="rating")?(sorttype=="ascending")?sortarray.sort((a,b)=>{return a.rating-b.rating}):sortarray.sort((a,b)=>{return b.rating-a.rating}):null
       
                 if((arr.length)%12===0)
                 {
                      var len=(arr.length)/12 
  
                    res.send({
                      totalpages:Math.floor(len),
                      current:{products:arr.slice(0,12),currentpage:1},
                      next:{products:arr.slice(12,24),nextpage:2}
                     })
           
                  }
  
                else
                {
  
                    var len=(arr.length)/12+1
                     res.send({
                     totalpages:Math.floor(len),
                     current:{products:arr.slice(0,12),currentpage:1},
                     next:{products:arr.slice(12,24),nextpage:2}
                    }) 
  
                   }
  
                   recentcollection.updateOne({token},{$set:{sorted:sortarray}}).then(()=>{
                       console.log("only sorted and no filteration")
                   })
  
           })
         }
    }
    
    
})


module.exports=filter_sortrouter