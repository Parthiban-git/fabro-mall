const express=require('express')
const app=express()

debugger

var obj1={
  name:"parthi",
  place:"vpm"
}

var obj2={
  name:"karthi",
  place:"karur"
}

var {name,place}=obj1

console.log(name,place)

app.listen(3000,()=>[
  console.log(`port 3000`)
])