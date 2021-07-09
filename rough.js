

 var arr=[{name:"parthi",age:20,school:false,id:1},{name:"rishi",age:21,school:false,id:1}]


var index=arr.findIndex((ele)=>{
      return ele.name=="rishi"
})
if(index>=0)
{
    obj={...arr[index],school:true}
    arr.splice(index,1,obj)
}
console.log(arr)






// // var arr=[1,2,3,4,5,6]

// // var foundIndex = arr.findIndex((ele)=>{
// //     return ele==5
// // })

// // arr[foundIndex]=10

// // console.log(arr)




// // var arr=[{name:"parthi",age:20,school:"tnpl",id:1},{name:"rishii",age:21,school:"rno",id:1}]

// // var resarr=arr.map((ele,index)=>{
// //     return (index==1)?{...ele,age:ele.age=25}:ele
// // })

// // console.log(resarr)









// ///////////////////////////////////////////////////////////////


// deletewishlistrouter.post('/delete-wishlist',async(req,res)=>{

//     const token=req.headers.authorization.split(" ")[1]
//     // const token=req.body.token
    
//     var wishlistobj=await cartwishlist.findOne({token})

//     var keys=Object.keys(wishlistobj.wishlist)

//     const {name}=req.body

//     const deletekey=wishlistobj.wishlist[name]

//     var modelnumberarray=deletekey.map((ele)=>{
//         return ele.model_number
//     })

//     var wishlen=modelnumberarray.length

//     var count=0
//     var arr=[]

//     const func=(()=>{
//         return new Promise(async(resolve)=>{
//             await modelnumberarray.filter(async(model_number)=>{
                
                   
//                     var cart=wishlistobj.cart

//                     var cartlen=cart.length
        
//                     var cartres=cart.map((ele,index)=>{
//                         count+=1;
//                         return (ele.model_number==model_number)?index:null
//                     })

//                     arr=[...arr,...cartres]

//                     if(cartlen==(count/wishlen)){
//                         resolve(arr)
//                     }                        
        
//             })    
//         })
//     })
    
//     var cart=wishlistobj.cart

//     func().then(async(resp)=>{
//          var cartmatchingarr=resp.filter((value)=>{
//              return value!=null
//          })

//          if(cartmatchingarr.length>0)
//          {
//             for(let i=0;i<cartmatchingarr.length;i++)
//             {
//                var cartres=cart.map((ele,index)=>{
//                    return index==cartmatchingarr[i]?{...ele,wishlist:ele.wishlist=false}:ele
//                 }) 
//             }   
            
//             await cartwishlist.updateOne({token},{$set:{cart:cartres}}).then(async()=>{
//                console.log("cart been replaced some wishlist present in cart")
//             }) 
//          }
//          else{
//              console.log("same cart")
//          }
         
        //  if(keys.length>1){
        //     await cartwishlist.updateOne({token},{$unset:{[`wishlist.${name}`]:name}}).then(()=>{
        //         console.log("deleted a wishlist in a many")
        //     })     
        //     cartwishlist.findOne({token}).then((obj)=>{

        //         var wishlistnames=Object.keys(obj.wishlist)
    
        //         res.send({wishlists:obj.wishlist,wishlistnames})
        //     })
        // }    

//         if(keys.length<=1)
//         {
//             await cartwishlist.updateOne({token},{$unset:{[`wishlist.${name}`]:name}}).then(async()=>{
//                 await cartwishlist.updateOne({token},{$unset:{wishlist:{}}}).then(()=>{
//                     console.log("deleted the last single wishlist")
//                 })
//             })

//             res.send({})   

//         }   

//     })

// })

