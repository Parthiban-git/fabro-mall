// var check="table linen"
// var spl=check.split(" ")
// var joi=spl.join("")
// console.log(joi)

const express=require('express')
require('./database/mongoose')

const app=express()

const cors=require('cors')

const port=process.env.PORT || 3000

app.use(express.json())
app.use(cors())


//bedroom schema
const Bedroom=require('./schema/Bedroom')
// living room
const Livingroom=require('./schema/Livingroom')
//kitchen
const Kitchen=require('./schema/Kitchen')
// tablelinen
const Tablelinen=require('./schema/Tablelinen')
// bathroom
const Bathroom=require('./schema/Bathroom')

// bedroom insertion

const bedsheet=[
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F104%20TC%20Cotton%20Double%20Floral%20Bedsheet(235-220cm)-399.jpeg?alt=media&token=5fe94faa-e093-4fdc-ae5e-bf28a6398025",
    name:"104 TC Cotton Double Floral Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:399,
    description:{
    size:"235 X 220cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE101T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F104%20TC%20Cotton%20Double%20Jaipuri%20Prints%20Bedsheet(240-220)-401.jpeg?alt=media&token=25f6c94f-cea5-4e33-89b7-1dc196f702d0",
    name:"104 TC Cotton Double Printed Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:401,
    description:{
    size:"240 X 220 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE102T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F120%20TC%20Microfiber%20Double%20Floral%20Bedsheet(230-225cm)-299.jpeg?alt=media&token=140b50ac-856a-40ab-8e84-627e7f2d8bb5",
    name:"120 TC Microfiber Double Floral Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:8,
    price:299,
    description:{
    size:"230 X 225 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE103T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F140%20TC%20Cotton%20Double%20Printed%20Bedsheet(250-225cm)-259.jpeg?alt=media&token=f9076435-4a7e-4ba2-8b5d-3650234e1265",
    name:"140 TC Cotton Double Printed Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:259,
    description:{
    size:"250 X 225 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE104T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F140%20TC%20Microfiber%20Double%20Floral%20Bedsheet(240-218cm)-600.jpeg?alt=media&token=868bf775-2561-436c-9918-7e1c43c42e4e",
    name:"140 TC Microfiber Double Floral Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:8,
    price:600,
    description:{
    size:"240 X 218 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE105T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F141%20TC%20Microfiber%20Double%203D%20Printed%20Bedsheet%20%20(229-229cm)-391.jpeg?alt=media&token=fd004f61-372a-4fe5-ace6-275f1cbe7938",
    name:"141 TC Microfiber Double 3D Printed Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:12,
    price:391,
    description:{
    size:"229 X 229 cm",
    color:"White",
    package:"1"
    },
    model_number:"BE106T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F144%20TC%20Cotton%20Double%203D%20Printed%20Bedsheet%20(228-224cm)-253.jpeg?alt=media&token=69d572e8-d70a-40ee-8d43-17d59dc35177",
    name:"144 TC Cotton Double 3D Printed Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:12,
    price:253,
    description:{
    size:"228 X 224 cm",
    color:"Blue",
    package:"1"
    },
    model_number:"BE107T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F144%20TC%20Cotton%20Double%20Jaipuri%20Prints%20Bedsheet(240-210)-379.jpeg?alt=media&token=8fab3617-561e-4a22-923b-9c47b9ba7f86",
    name:"144 TC Cotton Double Jaipuri Prints Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:379,
    description:{
    size:"240 X 210 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE108T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F144%20TC%20Microfiber%20Double%203D%20Printed%20Bedsheet(220-225)-349.jpeg?alt=media&token=3e97f228-351b-463a-ac79-74e5138ee53a",
    name:"144 TC Microfiber Double 3D Printed Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:7,
    price:349,
    description:{
    size:"220 X 225 cm",
    color:"Red,Black",
    package:"1"
    },
    model_number:"BE109T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F144%20TC%20Microfiber%20Double%203D%20Printed%20Bedsheet(230-220cm)-279.jpeg?alt=media&token=c51720d8-99f7-4ae6-a330-7e0b1222be32",
    name:"144 TC Microfiber Double 3D Printed Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:8,
    price:279,
    description:{
    size:"230 X 220 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE110T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F144%20TC%20Microfiber%20Double%20Geometric%20Bedsheet%20(220-229cm)-299.jpeg?alt=media&token=909807ea-b739-4541-a342-935a986f7549",
    name:"144 TC Microfiber Double Geometric Bedsheet",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:299,
    description:{
    size:"220 X 229 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE111T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F144%20TC%20Microfiber%20Double%20Printed%20Bedsheet%20(240-230)-379.jpeg?alt=media&token=7c601114-7fa2-4a05-bf65-064b67a003c3",
    name:"144 TC Microfiber Double Printed Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:379,
    description:{
    size:"240 X 230 cm",
    color:"Blue",
    package:"1"
    },
    model_number:"BE112T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F160%20TC%20Cotton%20Double%20Cartoon%20Bedsheet%20(236-230cm)-290.jpeg?alt=media&token=fb04e143-19e4-4e27-bc85-b06988a47e70",
    name:"151 TC Cotton Double, King Printed Bedsheet",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:377,
    description:{
    size:"250 X 227 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE113T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F160%20TC%20Microfiber%20Double%20Floral%20Bedsheet%20(220-240)-399.jpeg?alt=media&token=9c08e7c7-b43e-4135-a33b-9b5b3e23555d",
    name:"160 TC Cotton Double Cartoon Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:8,
    price:290,
    description:{
    size:"236 X 230 cm",
    color:"Red",
    package:"1"
    },
    model_number:"BE114T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F160%20TC%20Microfiber%20Double%20Geometric%20Bedsheet%20(220-240cm)-399.jpeg?alt=media&token=7b16105d-d77b-4b33-9064-17637008bd40",
    name:"160 TC Microfiber Double Floral Bedsheet",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:399,
    description:{
    size:"220 X 240 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE115T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F160%20TC%20Microfiber%20Double%20Printed%20Bedsheet(220-240cm)-400.jpeg?alt=media&token=15c7adce-649a-430b-bc0b-47cc6a181ef3",
    name:"160 TC Microfiber Double Geometric Bedsheet",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:399,
    description:{
    size:"220 X 240 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE116T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F200%20TC%20Cotton%20Double%20King%2C%20Double%20Jaipuri%20Prints%20Bedsheet%20(272-227cm)-375.jpeg?alt=media&token=a48bdba5-d46d-4297-9db2-877513940f75",
    name:"160 TC Microfiber Double Printed Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:400,
    description:{
    size:"220 X 240 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE117T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F210%20TC%20Cotton%20Double%20Geometric%20Bedsheet(273-228)-380.jpeg?alt=media&token=3f2c6e7b-a93a-4a32-bb27-22334e4a8c4c",
    name:"200 TC Cotton Double King, Double Jaipuri Prints Bedsheet",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:375,
    description:{
    size:"272 X 227 cm",
    color:"Yellow",
    package:"1"
    },
    model_number:"BE118T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F300%20TC%20Microfiber%20Double%20Solid%20Bedsheet(235-228cm)-429.jpeg?alt=media&token=bc6f422c-a8ea-4873-86e3-4fd4e11397d4",
    name:"210 TC Cotton Double Geometric Bedsheet",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:380,
    description:{
    size:"273 X 228 cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BE119T01"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F300%20TC%20Microfiber%20Double%20Solid%20Bedsheet(235-228cm)-429.jpeg?alt=media&token=bc6f422c-a8ea-4873-86e3-4fd4e11397d4",
    name:"300 TC Microfiber Double Solid Bedsheet",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:7,
    price:429,
    description:{
    size:"235 X 228 cm",
    color:"Grey",
    package:"1"
    },
    model_number:"BE120T01"
    },
    ]

    var objbed={type:"Bedsheet",category:"Bedroom",    customer_review:[]
}

    var resbed=bedsheet.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}

        return arr={...el,...objbed,...soldoutobj,...discountobj}
    })

    const quilt=[
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FCartoon%20Single%20Dohar%20%20(Microfiber%2C%20Blue%20Angry%20Birds%2C%20Blue%20Angry%20Birds)(240-220cm)-399.jpeg?alt=media&token=f29688a5-36d7-4398-9477-23fcb550613f",
        name:"Cartoon Single Dohar (Microfiber, Blue Angry Birds)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:399,
        description:{
        size:"240 X 220cm",
        color:"Blue",
        package:"1"
        },
        model_number:"QU101T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FCheckered%20Double%20Quilt%20%20(Cotton%2C%20Multicolor)(99-69INCH)-999.jpeg?alt=media&token=7f68879f-a3da-4e22-b15b-47cf492aa26d",
        name:"Checkered Double Quilt (Cotton, Multicolor)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:800,
        description:{
        size:"99 X 69INCH",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU102T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FDamask%20Double%20Quilt%20%20(Cotton%2C%20Multicolor)(180cm-160cm)-999.jpeg?alt=media&token=43ef4c6a-0aab-4f2d-84a3-c9b5d343311d",
        name:"Damask Double Quilt (Cotton, Multicolor)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:800,
        description:{
        size:"180cm X 160cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU103T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FDamask%20Double%20Quilt%20%20(Cotton%2C%20Multicolor)(220-238cm)-459.jpeg?alt=media&token=07d43d6b-b069-4479-ad18-34a7f878b094",
        name:"Damask Double Quilt (Cotton, Multicolor)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:459,
        description:{
        size:"220cm X 238cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU104T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FDesign%20Double%20Quilt%20%20(Microfiber%2C%20Red)(220-250cm)-699.jpeg?alt=media&token=01fa7e91-5463-402d-8664-6d6f773aa912",
        name:"Design Double Quilt (Microfiber, Red)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:699,
        description:{
        size:"220cm X 250cm",
        color:"Red",
        package:"1"
        },
        model_number:"QU105T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FFloral%20Double%20Quilt%20%20(Cotton%2C%20Multicolor)(152.3-228cm)-1200.jpeg?alt=media&token=d5f321ec-f264-403d-8b39-29815927b524",
        name:"Floral Double Quilt (Cotton, Multicolor)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:12,
        price:750,
        description:{
        size:"152.3 X 228cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU106T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FFloral%20Single%20Dohar%20%20(Cotton%2C%20Peach%2C%20Cream)(152-226cm)-459.jpeg?alt=media&token=30995667-e615-40ed-b250-f85461b05ff9",
        name:"Floral Single Dohar (Cotton, Peach, Cream)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:459,
        description:{
        size:"152 X 226cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU107T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FPrinted%20Double%20Quilt%20%20(Cotton%2C%20Multicolor)(220-250cm)-1200.jpeg?alt=media&token=89af4529-8b4b-416d-86c1-735ffc74cc1f",
        name:"Printed Double Quilt (Cotton, Multicolor)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:850,
        description:{
        size:"220 X 250cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU108T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FPrinted%20Double%20Quilt%20%20(Cotton%2C%20Multicolor)(220-278cm)-799.jpeg?alt=media&token=8e2241af-ade7-4593-8608-fd0fff6a009e",
        name:"Printed Double Quilt (Cotton, Multicolor)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:799,
        description:{
        size:"220 X 278cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"QU109T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FPrinted%20Single%20Quilt%20%20(Cotton%2C%20Blue)(150cm-220cm)-468.jpeg?alt=media&token=2602c20e-429d-4117-b3db-f644d7a0defe",
        name:"Printed Single Quilt (Cotton, Blue)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:468,
        description:{
        size:"150cm X 220cm",
        color:"Blue",
        package:"1"
        },
        model_number:"QU110T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FSelf%20Design%20Double%20Quilt%20%20(Cotton%2C%20White)(228-254cm)-555.jpeg?alt=media&token=8a5f42a7-a674-495c-bbb4-b4523b0a5ed7",
        name:"Self Design Double Quilt (Cotton, White)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:555,
        description:{
        size:"228 X 254cm",
        color:"White",
        package:"1"
        },
        model_number:"QU111T02"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2Fvalua%20Self%20Design%20Double%20Quilt%20%20(Microfiber%2C%20CAMEL)(220-212cm)-599.jpeg?alt=media&token=dd1a64b5-aacf-4fe8-a16f-6312332e4109",
        name:"valua Self Design Double Quilt (Microfiber, CAMEL)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:5,
        price:599,
        description:{
        size:"220 X 212cm",
        color:"Camel",
        package:"1"
        },
        model_number:"QU112T02"
        },
        ] 

        var objquilt={type:"Quilt",category:"Bedroom",    customer_review:[]
    }

    var resquilt=quilt.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objquilt,...soldoutobj,...discountobj}
    })

const pillow_cover=[
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2F3D%20Printed%20Pillows%20Cover%20%20(Pack%20of%204%2C%2064%20cm-40%20cm%2C%20Red)-220.jpeg?alt=media&token=acddce19-ef5c-4b40-be4e-a72ba7c51db3",
            name:"3D Printed Pillows Cover (Pack of 4, Red)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:220,
            description:{
            size:"64 cm X 40 cm",
            color:"Red",
            package:"4"
            },
            model_number:"PI101R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FElite%20Striped%20Pillows%20Cover%20%20(Pack%20of%202%2C%2070%20cm46%20cm%2C%20Black)-201.jpeg?alt=media&token=f90fc159-6f09-41aa-98be-ea7a2b1c06ab",
            name:"Striped Pillows Cover (Pack of 2, Black)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:800,
            description:{
            size:"70 cm X 46 cm",
            color:"Black",
            package:"2"
            },
            model_number:"PI102R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FFloral%20Cushions%20%26%20Pillows%20Cover%20%20(Pack%20of%205%2C%2040%20cm-40%20cm%2C%20Multicolor)-249.jpeg?alt=media&token=29618fef-b021-44c1-bac9-b7f3fccedda6",
            name:"Floral Cushions & Pillows Cover (Pack of 5, Multicolor)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:800,
            description:{
            size:"40 cm X 40 cm",
            color:"Multicolor",
            package:"5"
            },
            model_number:"PI103R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FFloral%20Pillows%20Cover%20%20(Pack%20of%202%2C%2069%20cm-44%20cm%2C%20Multicolor)-220.jpeg?alt=media&token=cb0f2f8a-c764-4365-b407-53fbaaef9ee4",
            name:"Floral Pillows Cover (Pack of 2, Multicolor)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:220,
            description:{
            size:"69 cm X 44 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"PI104R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FFloral%20Pillows%20Cover%20%20(Pack%20of%202%2C%2069%20cm-44%20cm%2C%20Multicolor%2C%20Light%20Blue)-149.jpeg?alt=media&token=2f220e05-06d3-41c6-82e3-b77bf04808f9",
            name:"Floral Pillows Cover (Pack of 2, Multicolor, Light Blue)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:149,
            description:{
            size:"69 cm X 44 cm",
            color:"Multicolor, Light Blue",
            package:"2"
            },
            model_number:"PI105R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FFloral%20Pillows%20Cover%20%20(Pack%20of%204%2C%2044%20cm-68%20cm%2C%20White%2C%20Multicolor)-199.jpeg?alt=media&token=2cb6c6c7-7793-461a-bb51-eb6096a908ca",
            name:"Floral Pillows Cover (Pack of 4, White, Multicolor)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:750,
            description:{
            size:"44 cm X 68 cm",
            color:"White,Multicolor",
            package:"4"
            },
            model_number:"PI106R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FFloral%20Pillows%20Cover%20%20(Pack%20of%204%2C%2068%20cm-44%20cm%2C%20Brown)-270.jpeg?alt=media&token=a1d489e6-7d24-4739-85a7-0cbf1c9ef1b5",
            name:"Floral Pillows Cover (Pack of 4, Brown)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:270,
            description:{
            size:"68 cm X 44 cm",
            color:"Brown",
            package:"4"
            },
            model_number:"PI107R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FFloral%20Pillows%20Cover%20%20(Pack%20of%204%2C%2075%20cm-50%20cm%2C%20White)-349.jpeg?alt=media&token=9b9a0b9d-ac2b-4fd2-8396-596cce71de5e",
            name:"Floral Pillows Cover (Pack of 4, White)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:850,
            description:{
            size:"75 cm X 50 cm",
            color:"White",
            package:"4"
            },
            model_number:"PI108R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FHandloom%20Floral%20Pillows%20Cover%20%20(Pack%20of%202%2C%2042.5%20cm-70%20cm%2C%20Pink)-335.jpeg?alt=media&token=32c21767-3bc5-4298-8cab-c209e9d4f30c",
            name:"Handloom Floral Pillows Cover (Pack of 2, Pink)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:335,
            description:{
            size:"42.5 cm X 70 cm",
            color:"Pink",
            package:"2"
            },
            model_number:"PI109R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Cushions%20%26%20Pillows%20Cover%20%20(27%20cm-38%20cm%2C%20Red)-499.jpeg?alt=media&token=849b0177-4bc8-4a79-b506-c4f98720e7df",
            name:"Printed Cushions & Pillows Cover (Pack of 5, Red)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:6,
            price:499,
            description:{
            size:"27 cm X 38 cm, ",
            color:"Red",
            package:"5"
            },
            model_number:"PI110R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Cushions%20%26%20Pillows%20Cover%20%20(Pack%20of%205%2C%2040%20cm-40%20cm%2C%20Multicolor)-250.jpeg?alt=media&token=3b736b31-4fdd-47b7-bb06-ccb36531b57e",
            name:"Printed Cushions & Pillows Cover (Pack of 5, Multicolor)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:250,
            description:{
            size:"40 cm X 40 cm",
            color:"Multicolor",
            package:"5"
            },
            model_number:"PI111R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Cushions%20%26%20Pillows%20Cover%20%20(Pack%20of%205%2C%2040-40%2C%20Multicolor)-230.jpeg?alt=media&token=b2400612-ca82-4c43-b8e6-aeabd053755d",
            name:"Printed Cushions & Pillows Cover (Pack of 5, Multicolor)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:230,
            description:{
            size:"40 X 40 cm",
            color:"Multicolor",
            package:"5"
            },
            model_number:"PI112R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Cushions%20%26%20Pillows%20Cover%20%20(Pack%20of%205%2C%2040-40%2C%20Multicolor)-249.jpeg?alt=media&token=d8e62e9b-12c6-4407-9542-7151823afb55",
            name:"Printed Cushions & Pillows Cover (Pack of 5, Multicolor)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:249,
            description:{
            size:"40 X 40 cm",
            color:"Multicolor",
            package:"5"
            },
            model_number:"PI113R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Pillows%20Cover%20%20(Pack%20of%2010%2C%2044%20cm-69%20cm%2C%20Black)-419.jpeg?alt=media&token=b91a470f-8755-4080-a83a-ff0191b0207a",
            name:"Printed Pillows Cover (Pack of 10,Black)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:419,
            description:{
            size:"44 cm X 69 cm",
            color:"Black",
            package:"10"
            },
            model_number:"PI114R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Pillows%20Cover%20%20(Pack%20of%204%2C%2072%20cm-45%20cm%2C%20Multicolor)-360.jpeg?alt=media&token=e9c81df5-5a9a-459a-adba-bc4ed6b70a36",
            name:"Printed Pillows Cover (Pack of 4, Multicolor)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:360,
            description:{
            size:"72 cm X 45 cm",
            color:"Multicolor",
            package:"4"
            },
            model_number:"PI115R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FPrinted%20Pillows%20Cover%20%20(Pack%20of%208%2C%2069%20cm-46%20cm%2C%20Multicolor)-590.jpeg?alt=media&token=add17fd9-df26-4cce-a86b-6b07840e97d3",
            name:"Printed Pillows Cover (Pack of 8, Multicolor)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:13,
            price:590,
            description:{
            size:"69 cm X 46 cm",
            color:"Multicolor",
            package:"8"
            },
            model_number:"PI116R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FSelf%20Design%20Pillows%20Cover%20%20(Pack%20of%205%2C%2031%20cm-31%20cm%2C%20Yellow)-349.jpeg?alt=media&token=5ab35bbc-2bb6-4776-b43b-35f7233ab3af",
            name:"Self Design Pillows Cover (Pack of 5, Yellow)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:349,
            description:{
            size:"31 cm X 31 cm",
            color:"Yellow",
            package:"5"
            },
            model_number:"PI117R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FSelf%20Design%20Pillows%20Cover%20%20(Pack%20of%206%2C%2043%20cm-68%20cm%2C%20Beige)-349.jpeg?alt=media&token=e85be49e-0f72-404e-8d84-9069366dc3de",
            name:"Self Design Pillows Cover (Pack of 6, Beige)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:11,
            price:349,
            description:{
            size:"43 cm X 68 cm",
            color:"Beige",
            package:"6"
            },
            model_number:"PI118R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2FStriped%20Cushions%20%26%20Pillows%20Cover%20%20(Pack%20of%202%2C%2046%20cm-72%20cm%2C%20Black)-199.jpeg?alt=media&token=db7405f5-fb1e-426e-8560-b140c5f46bfd",
            name:"Striped Cushions & Pillows Cover (Pack of 2, Black)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:199,
            description:{
            size:"46 cm X 72 cm",
            color:"Black",
            package:"2"
            },
            model_number:"PI119R03"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2Flain%20Cushions%20%26%20Pillows%20Cover%20%20(Pack%20of%205%2C%2030%20cm30%20cm%2C%20Multicolor)-349.jpeg?alt=media&token=dd154674-5387-4474-be5c-198bbe2f38d7",
            name:"Cushions & Pillows Cover (Pack of 5, Multicolor)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:349,
            description:{
            size:"30 cm X 30 cm, ",
            color:"Multicolor",
            package:"5"
            },
            model_number:"PI120R03"
            }
            ]

     var objpillow={type:"Pillowcover",category:"Bedroom",    customer_review:[]
    }

    var respillow=pillow_cover.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objpillow,...soldoutobj,...discountobj}
    })

const comforter_set=[
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FCartoon%20Single%20Comforter%20%20(Cotton%2C%20Multicolor)-(252-242)-499.jpeg?alt=media&token=492b051e-a2fb-41c9-8f3a-50c26e847e98",
                name:"Cartoon Single Comforter (Cotton, Multicolor)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:499,
                description:{
                size:"252 X 242 cm",
                color:"Multicolor",
                package:"1"
                },
                model_number:"CO101T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FFashion%20Checkered%20Single%20Comforter%20%20(Poly%20Cotton%2C%20Black%2C%20Grey)(154-228cm)-899.jpeg?alt=media&token=5655cad2-1b10-4278-a559-142dab13162d",
                name:"Checkered Single Comforter (Poly Cotton, Black, Grey)",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:9,
                price:899,
                description:{
                size:"154 X 228 cm",
                color:"Black, Grey",
                package:"1"
                },
                model_number:"CO102T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FFloral%20Double%20Comforter%20%20(Microfiber%2C%20Grey)(220CM-240cm)-2499.jpeg?alt=media&token=43c5a05a-e429-4cc1-abb6-3281883e7882",
                name:"Floral Double Comforter (Microfiber, Grey)",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:2499,
                description:{
                size:"220 cm X 240 cm",
                color:"Grey",
                package:"2"
                },
                model_number:"CO103T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FHomes%20Printed%20Double%20Comforter%20%20(Microfiber%2C%20Multicolor)(228-254)-1599.jpeg?alt=media&token=55575c5b-db09-4572-8e72-7c086436f220",
                name:"Printed Double Comforter (Microfiber, Multicolor)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:1599,
                description:{
                size:"228 X 254 cm",
                color:"Multicolor",
                package:"1"
                },
                model_number:"CO104T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FPORTICO%20NEW%20YORK%20Solid%20Double%20Comforter%20%20(Microfiber%2C%20Peach%2C%20Pink)(240-230)-1358.jpeg?alt=media&token=6f1753ee-ede1-46d2-8b38-3b8baf03eeb1",
                name:"Solid Double Comforter (Microfiber, Peach, Pink)",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:1358,
                description:{
                size:"240 X 230 cm",
                color:"Peach, Pink",
                package:"1"
                },
                model_number:"CO105T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FPrinted%20King%20Comforter%20%20(Cotton%2C%20Multicolor)(90-100INCH)-1899.jpeg?alt=media&token=4b41bdfa-09c7-48ac-8958-d415c4f7c14f",
                name:"Printed Comforter (Cotton, Multicolor)",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:8,
                price:1899,
                description:{
                size:"90 X 100 Inch",
                color:"Multicolor",
                package:"2"
                },
                model_number:"CO106T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FPrinted%20Single%20Comforter%20%20(Poly%20Cotton%2C%20Grey%20Leaf)(153-224cm)-900.jpeg?alt=media&token=d6d6b221-5ec2-44ba-8abb-e0727d99cc80",
                name:"Printed Single Comforter (Poly Cotton, Grey Leaf)",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:7,
                price:900,
                description:{
                size:"153 X 224 cm",
                color:"Grey",
                package:"1"
                },
                model_number:"CO107T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FPrinted%20Single%20Comforter%20%20(Polyester%2C%20Dark%20Green%2C%20Dark%20Blue)-(145-230)-899.jpeg?alt=media&token=791e23fe-cbb0-4d34-a6a8-d02ccdebffdd",
                name:"Printed Single Comforter (Polyester, Dark Green, Dark Blue",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:15,
                price:899,
                description:{
                size:"145 X 230 cm",
                color:"Dark Green, Dark Blue",
                package:"1"
                },
                model_number:"CO108T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Microfiber%2C%20BLACK-GREEN)(254-230)-1305.jpeg?alt=media&token=dcd1cd09-ecce-4d85-96f4-6e70bd8d7827",
                name:"Solid Double Comforter (Microfiber, BLACK-GREEN)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:13,
                price:1305,
                description:{
                size:"254 X 230 cm",
                color:"Black-Green",
                package:"1"
                },
                model_number:"CO109T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Microfiber%2C%20Brown%2C%20Grey)(250-230)-1398.jpeg?alt=media&token=55b5a067-e889-4b8c-b96e-bcb5c6a7a4d3",
                name:"Solid Double Comforter (Microfiber, Brown, Grey)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:6,
                price:1398,
                description:{
                size:"250 X 230 cm",
                color:"Brown, Grey",
                package:"1"
                },
                model_number:"CO110T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Microfiber%2C%20Maroon%2C%20Grey)-(230-255cm)-1350.jpeg?alt=media&token=81d986ec-f87a-4b47-9b0c-2acdee2cfc8a",
                name:"Solid Double Comforter (Microfiber, Maroon, Grey)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:13,
                price:1350,
                description:{
                size:"230 X 255 cm",
                color:"Maroon, Grey",
                package:"1"
                },
                model_number:"CO111T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Microfiber%2C%20Red%2C%20Blue)(250-229)3650.jpeg?alt=media&token=b4466e90-4741-44be-887f-caf8d4696c3b",
                name:"Solid Double Comforter (Microfiber, Red, Blue)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:15,
                price:3650,
                description:{
                size:"250 X 229 cm",
                color:"Red, Blue",
                package:"2"
                },
                model_number:"CO112T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Microfiber%2C%20White)(230-250)1670.jpeg?alt=media&token=52972042-9675-4f4f-84e0-bb1cb8ede4f7",
                name:"Solid Double Comforter (Microfiber, White)",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:6,
                price:1670,
                description:{
                size:"230 X 250 cm",
                color:"White",
                package:"2"
                },
                model_number:"CO113T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Microfiber%2C%20White)(230-250cm)1555.jpeg?alt=media&token=fd08fdcb-faed-4e4c-a342-91ed4a9bf0e6",
                name:"Solid Double Comforter (Microfiber, White)",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:12,
                price:1555,
                description:{
                size:"230 X 250 cm",
                color:"White",
                package:"2"
                },
                model_number:"CO114T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Double%20Comforter%20%20(Polyester%2C%20Grey-Blue)(152-180cm)-949.jpeg?alt=media&token=8003b203-bec7-4327-8436-86aef96d8c25",
                name:"Solid Double Comforter (Polyester, Grey-Blue)",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:949,
                description:{
                size:"152 X 180 cm",
                color:"Grey-Blue",
                package:"1"
                },
                model_number:"CO115T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Queen%20Comforter%20%20(Polyester%2C%20Sepia)-(200-220cm)1349.jpeg?alt=media&token=8dcb5004-3ebe-4a37-8862-e4a115df05aa",
                name:"Solid Queen Comforter (Polyester, Sepia)",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:9,
                price:1349,
                description:{
                size:"200 X 220 cm",
                color:"Sepia",
                package:"1"
                },
                model_number:"CO116T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FSolid%20Single%20Comforter%20%20(Polyester%2C%20True%20Navy)(150-222)-980.jpeg?alt=media&token=c6d6205a-7df0-4478-b8e5-6be0b68a48c7",
                name:"Solid Single Comforter (Polyester, True Navy)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:12,
                price:980,
                description:{
                size:"150 X 222 cm",
                color:"True Navy",
                package:"1"
                },
                model_number:"CO117T04"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2Fbeautiful%20Self%20Design%20Double%20Comforter%20%20(Cotton%2C%20Blue)(228-274cm)5200.jpeg?alt=media&token=6327c1ab-f584-4f83-aafd-8308e98f842b",
                name:"beautiful Self Design Double Comforter (Cotton, Blue)",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:5,
                price:3000,
                description:{
                size:"228 X 274 cm",
                color:"Blue",
                package:"2"
                },
                model_number:"CO118T04"
                },
                ]

                var objcomforter={type:"Comforterset",category:"Bedroom",    customer_review:[]
            }

                var rescomforter=comforter_set.map((el)=>{
                    var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
                    var x=(el.price/100)*(el.offer)
                    var discount=el.price-x
        
                    var discountobj={discountprice:Math.ceil(discount)}
                    return arr={...el,...objcomforter,...soldoutobj,...discountobj}
                })

 Bedroom.insertMany({
     products:{
         Bedsheet:resbed,
        Quilt:resquilt,
        Comforterset:rescomforter,
        Pillowcover:respillow}
 },()=>{
     console.log("Bedroom inserted into Atlas !")
 })
 
 // living room insertion

const sofa_cover=[
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2F2%20Pieces%20Multi%20Sofa%20Slip%20Cover%20for%20Living%20Room%20-%203%20Seater%20Sofa%20Covers(70-29inches)-300.jpg?alt=media&token=88547d3a-d7f0-41b0-97f1-249f6caaed35",
    name:"2 Pieces Multi Sofa Slip Cover for Living Room - 3 Seater Sofa Covers",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:7,
    price:300,
    description:{
    size:"70 x 29inches",
    color:"Multicolor",
    package:"2"
    },
    model_number:"SO101R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FChenille%20Floral%203%20Seater%20Sofa%20Cover%20(Standard%2C%20Blue%20Colour)(69-27)-500.jpg?alt=media&token=e6d3a4de-e350-406b-8dc8-678f1ed4230f",
    name:"Chenille Floral 3 Seater Sofa Cover (Standard, Blue Colour)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:500,
    description:{
    size:"69 x 27inches",
    color:"Blue",
    package:"1"
    },
    model_number:"SO102R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FChenille%20Floral%203%20Seater%20Sofa%20Cover%20(Standard%2C%20Coffee)(69-27)-500.jpg?alt=media&token=81af163f-f2c0-4d34-8b48-a0ab0751cd6b",
    name:"Chenille Floral 3 Seater Sofa Cover",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:500,
    description:{
    size:"69 x 27inches",
    color:"Multicolor",
    package:"1"
    },
    model_number:"SO103R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FCotton%203%20Seater%20Combo%20Sofa%20Cover%20Set%2C%20Standard%20Size%2C%20Set%20of%202%20(Multicolour)(69-27)-420.jpg?alt=media&token=38c23eab-7b10-43cc-beb3-98cab25efeae",
    name:"Cotton 3 Seater Combo Sofa Cover Set, Standard Size, Set of 2 (Multicolour)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:7,
    price:420,
    description:{
    size:"69 x 27inches",
    color:"Multicolor",
    package:"2"
    },
    model_number:"SO104R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FCotton%203%20Seater%20Sofa%20Cover%20(Standard%2CMulticolour%202)%20-Set%20of%202(69-27)-600.jpg?alt=media&token=4bc6aa60-eb18-482f-87f7-dd1356a69307",
    name:"Cotton 3 Seater Sofa Cover (Standard,Multicolour)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:600,
    description:{
    size:"69 x 27inches",
    color:"Multicolor",
    package:"2"
    },
    model_number:"SO105R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FCotton%20Fabric%20Net%20Sofa%20Covers%20for%203%20Seater%20Sofas%20(Grey%2C%20Standard)(69-27inch)-450.jpg?alt=media&token=23879edf-7518-4abe-a67a-ffcce5938f9a",
    name:"Cotton Fabric Net Sofa Covers for 3 Seater Sofas (Grey, Standard)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:450,
    description:{
    size:"69 x 27inches",
    color:"Grey",
    package:"1"
    },
    model_number:"SO106R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FFloral%203%20Seater%20Net%20Fabric%20Sofa%20Cover%20Set%20(Off%20White)%2C%202%20Piece(176-70cm)-400.jpg?alt=media&token=3a672893-c0d7-44f2-a67e-314abc1e76d1",
    name:"Floral 3 Seater Net Fabric Sofa Cover Set (Off White)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:12,
    price:400,
    description:{
    size:"176 x 70cm",
    color:"Off White",
    package:"1"
    },
    model_number:"SO107R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FNendle%20Cotton%20Sofa%20Covers%20Set%20of%203%20Seater%20for%20Living%20Room%20(Violet%2C%202%20Pieces)(69%20Inch%20-%2027%20inch)Abstract%20Pattern-500.jpg?alt=media&token=13f6b0bb-50dc-42f9-83ba-1ff5e2b765ec",
    name:"Nendle Cotton Sofa Covers Set of 3 Seater for Living Room (Violet, 2 Pieces)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:9,
    price:500,
    description:{
    size:"69 x 27inches",
    color:"Multicolor",
    package:"1"
    },
    model_number:"SO108R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FPolyester%20Fabric%20Perfect%20Size%20Sofa%20Cover%20Slipcover(185-230cm)Grey%20Fern%2C%20Three-Seater-1300.jpg?alt=media&token=803da339-465f-4647-90dd-f411b908474c",
    name:"Polyester Fabric Perfect Size Sofa Cover Slipcover",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:1300,
    description:{
    size:"185 x 230cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"SO109R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FSingle%20Seater%20Sofa%20Cover%20Three%20Flowers%20Net%20Fabrics%20Cloth%20(2%20Pieces%20Set)(29-23inches)-200.jpg?alt=media&token=7e024cb2-8804-475a-abfd-7668067cf65a",
    name:"Single Seater Sofa Cover Three Flowers Net Fabrics Cloth (2 Pieces Set)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:200,
    description:{
    size:"29 x 23inches",
    color:"Multicolor",
    package:"1"
    },
    model_number:"SO110R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FSofa%20Cover%20Big%20Elasticity%20Cover%20for%20Couch%20Flexible%20Stretch%20Sofa%20Slipcover%20-%20Mandala%20Print%20(Triple%20Seater%2C%20Geometry%20Neon)(185-230)-1900.jpg?alt=media&token=7228fe64-a9b8-4926-9e51-fd1b288da8c5",
    name:"Sofa Cover Big Elasticity Cover for Couch Flexible Stretch Sofa Slipcover - Mandala Print (Triple Seater, Geometry Neon)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:1900,
    description:{
    size:"185 x 230cm",
    color:"Multicolor",
    package:"1"
    },
    model_number:"SO111R05"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2FTriple%20Seater%20Sofa%20Cover%20Big%20Elasticity%20Cover%20for%20Couch%20Flexible%20Stretch%20Sofa%20Slipcover%20(Triple%20Seater%2C%20Blue%20Diamond)(185-230cm)-1600.jpg?alt=media&token=8be49342-b3c7-4ef1-9dde-f085fa5dfa6f",
    name:"Triple Seater Sofa Cover Big Elasticity Cover for Couch Flexible Stretch Sofa Slipcover (Triple Seater, Blue Diamond)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:1600,
    description:{
    size:"185 x 230cm",
    color:"Blue",
    package:"1"
    },
    model_number:"SO112R05"
    }
    ]   

    var objsofa={type:"Sofacover",category:"Livingroom",    customer_review:[]
}

    var ressofa=sofa_cover.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objsofa,...soldoutobj,...discountobj}
    })
    
const window_curtain=[
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2F153%20cm%20(5%20ft)%20Cotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Abstract%2C%20Red)(120-153)-600.jpeg?alt=media&token=9ff9c5ef-e07d-4296-88b2-93a44cab5c20",
        name:"Cotton Window Curtain (Pack Of 2) (Abstract, Red)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:600,
        description:{
        size:"120 x 153 cm ",
        color:"Red",
        package:"2"
        },
        model_number:"WI101N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Door%20Curtain%20(Pack%20Of%202)%20%20(Geometric%2C%20Chevron%20Multi%20Peach)(152-213)-1150.jpeg?alt=media&token=9ca3ed96-0ed5-4106-a8a0-4732cba7bf2f",
        name:"Cotton Door Curtain (Pack Of 2) (Geometric, Chevron Multi Peach)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:1150,
        description:{
        size:"152 x 213 cm ",
        color:"Multi Peach",
        package:"2"
        },
        model_number:"WI102N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Door%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Blue)(122-214)-500.jpeg?alt=media&token=c4c1656e-36e4-4d4a-b60a-6fd01b9cca27",
        name:"Cotton Door Curtain (Pack Of 2) (Printed, Blue)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:500,
        description:{
        size:"122 x 214 cm ",
        color:"Blue",
        package:"2"
        },
        model_number:"WI103N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Door%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Gold)(152-213)-980.jpeg?alt=media&token=f1ad41cd-4f90-46fe-8cc9-1b64c761f733",
        name:"Cotton Door Curtain (Pack Of 2) (Printed, Gold)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:8,
        price:980,
        description:{
        size:"152 x 213 cm ",
        color:"Gold",
        package:"2"
        },
        model_number:"WI104N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Door%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Maroon)(122-214)-600.jpeg?alt=media&token=75170905-9014-4464-ae33-a66f8b1d48a3",
        name:"Cotton Door Curtain (Pack Of 2) (Printed, Maroon)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:600,
        description:{
        size:"122 x 214 cm ",
        color:"Maroon",
        package:"2"
        },
        model_number:"WI105N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Door%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Sky%20Blue)(54-218)-300.jpeg?alt=media&token=2465a333-1c33-4405-abe5-c4ea1dd46660",
        name:"Cotton Door Curtain Single Curtain (Printed, Sky Blue)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:15,
        price:300,
        description:{
        size:"54 x 218 cm ",
        color:"Sky Blue",
        package:"1"
        },
        model_number:"WI106N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Long%20Door%20Curtain%20(Pack%20Of%202)%20%20(Motif%2C%20Black%20Leaf)(138-274)-1200.jpeg?alt=media&token=d123bcce-b647-48dc-8ba3-ff52e6bc2496",
        name:"Cotton Long Door Curtain (Pack Of 2) (Motif, Black Leaf)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:1200,
        description:{
        size:"138 x 274 cm ",
        color:"Black",
        package:"2"
        },
        model_number:"WI107N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Long%20Door%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Multicolor)(108-215)-900.jpeg?alt=media&token=fbbb2a84-30eb-47a7-8cee-ff816c8a7cde",
        name:"Cotton Long Door Curtain (Pack Of 2) (Printed, Multicolor)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:900,
        description:{
        size:"108 x 215 cm ",
        color:"Multicolor",
        package:"2"
        },
        model_number:"WI108N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Long%20Door%20Curtain%20(Pack%20Of%202)%20%20(Solid%2C%20Blue)(110-275)-1350.jpeg?alt=media&token=46ff8a60-1ff8-4efc-b7d1-b41484cf5568",
        name:"Cotton Long Door Curtain (Pack Of 2) (Solid, Blue)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:1350,
        description:{
        size:"110 x 275 cm ",
        color:"Blue",
        package:"2"
        },
        model_number:"WI109N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Geometric%2C%20Sea%20Blue)(122-153)-700.jpeg?alt=media&token=e085b061-1ca8-4112-a08b-89a7b698d61a",
        name:"Cotton Window Curtain (Pack Of 2) (Geometric, Sea Blue)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:5,
        price:700,
        description:{
        size:"122 x 153 cm ",
        color:"Sea Blue",
        package:"2"
        },
        model_number:"WI110N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Motif%2C%20Yellow)(152-152)-800.jpeg?alt=media&token=693b1782-a7fc-4b09-813c-4476a5dae4ab",
        name:"Cotton Window Curtain (Pack Of 2) (Motif, Yellow)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:800,
        description:{
        size:"152 x 152 cm ",
        color:"Yellow",
        package:"2"
        },
        model_number:"WI111N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Blue)(152-152)-900.jpeg?alt=media&token=c950b4cd-d81e-424d-8b41-6c02c3dcf438",
        name:"Cotton Window Curtain (Pack Of 2) (Printed, Blue)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:900,
        description:{
        size:"152 x 152 cm ",
        color:"Blue",
        package:"2"
        },
        model_number:"WI112N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Grey)(110-150)-800.jpeg?alt=media&token=958acd8a-74bb-48a7-8cd9-c27d436484b6",
        name:"Cotton Window Curtain (Pack Of 2) (Printed, Grey)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:800,
        description:{
        size:"110 x 150 cm",
        color:"Grey",
        package:"2"
        },
        model_number:"WI113N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Orange)(110-150)-850.jpeg?alt=media&token=d40d2899-dcab-4e95-943f-a75396b1d98e",
        name:"Cotton Window Curtain (Pack Of 2) (Printed, Orange)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:850,
        description:{
        size:"110 x 150 cm ",
        color:"Orange",
        package:"2"
        },
        model_number:"WI114N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Orange)(110-215)-1050.jpeg?alt=media&token=018de171-7c60-4abd-b216-2cbafdbdd2bd",
        name:"Cotton Window Curtain (Pack Of 2) (Printed, Orange)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:1050,
        description:{
        size:"110 x 215 cm ",
        color:"Orange",
        package:"2"
        },
        model_number:"WI115N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FCotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Printed%2C%20Yellow)(110-150)-700.jpeg?alt=media&token=0afa0746-fd64-42a2-95fe-ee651dad0ebd",
        name:"Cotton Window Curtain (Pack Of 2) (Printed, Yellow)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:700,
        description:{
        size:"110 x 150 cm ",
        color:"Yellow",
        package:"2"
        },
        model_number:"WI116N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FPolyester%20Long%20Door%20Curtain%20(Pack%20Of%202)%20%20(Plain%2C%20Blue)(120-120)-600.jpeg?alt=media&token=fc07f567-7802-47a3-950a-d74e567e2afa",
        name:"Polyester Long Door Curtain (Pack Of 2) (Plain, Blue)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:600,
        description:{
        size:"120 x 120 cm ",
        color:"Blue",
        package:"2"
        },
        model_number:"WI117N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FPolyester%20Window%20Curtain%20(Pack%20Of%202)%20%20(Floral%2C%20Brown)(115-153cm)-400.jpeg?alt=media&token=f6a928ee-22ca-41b8-8f76-a1c94aa4e201",
        name:"Polyester Window Curtain (Pack Of 2) (Floral, Brown)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:400,
        description:{
        size:"115 x 153 cm ",
        color:"Brown",
        package:"2"
        },
        model_number:"WI118N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FPolyester%20Window%20Curtain%20(Pack%20Of%202)%20%20(Floral%2C%20Pink)(116-153)-400.jpeg?alt=media&token=b0c04666-81df-469d-a03d-e0c5303991a7",
        name:"Polyester Window Curtain (Pack Of 2) (Floral, Pink)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:5,
        price:400,
        description:{
        size:"116 x 153 cm ",
        color:"Pink",
        package:"2"
        },
        model_number:"WI119N06"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2FPolyester%20Window%20Curtain%20Single%20Curtain%20%20(Self%20Design%2C%20Black)(116-153)-220.jpeg?alt=media&token=cc01a709-da36-4914-992a-907bde829b1c",
        name:"Polyester Window Curtain Single Curtain (Self Design, Black)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:220,
        description:{
        size:"116 x 153 cm ",
        color:"Black",
        package:"1"
        },
        model_number:"WI120N06"
        },
        ]

        var objwcurtain={type:"Windowcurtain",category:"Livingroom",    customer_review:[]
    }

    var reswcurtain=window_curtain.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objwcurtain,...soldoutobj,...discountobj}
    })

const rugs=[
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBeige%20Cotton%20Runner%20%20(40%20cm%20X%20120%20cm)-560.jpeg?alt=media&token=94bfa601-77b1-4c47-a494-73b2d54a8e67",
            name:"Beige Cotton Runner (40 cm X 120 cm)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:560,
            description:{
            size:"40 cm X 120 cm",
            color:"Beige",
            package:"1"
            },
            model_number:"RU101S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBlack%20Cotton%20Carpet%20%20(121%20cm%20X%20183%20cm)-340.jpeg?alt=media&token=ee53d01c-d677-4632-abfd-a93e1a768ef9",
            name:"Black Cotton Carpet (121 cm X 183 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:340,
            description:{
            size:"121 cm X 183 cm",
            color:"Black",
            package:"1"
            },
            model_number:"RU102S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBlack%20Cotton%20Runner%20%20(121%20cm%20X%20183%20cm)-250.jpeg?alt=media&token=39f4e98b-0e68-4f56-9960-d518edb18bf5",
            name:"Black Cotton Runner (121 cm X 183 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:250,
            description:{
            size:"121 cm X 183 cm",
            color:"Black",
            package:"1"
            },
            model_number:"RU103S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBlue%20Cotton%20Carpet%20%20(132%20cm%20X%20183%20cm)-320.jpeg?alt=media&token=07750d16-e61d-4d91-a801-bf9a0a5224d7",
            name:"Blue Cotton Carpet (132 cm X 183 cm)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:320,
            description:{
            size:"132 cm X 183 cm",
            color:"Blue",
            package:"1"
            },
            model_number:"RU104S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBlue%20Velvet%20Carpet%20%20(155%20cm%20X%20215%20cm)-550.jpeg?alt=media&token=d0d660a9-3be6-4718-bba2-c0e5a747d249",
            name:"Blue Velvet Carpet (155 cm X 215 cm)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:550,
            description:{
            size:"155 cm X 215 cm",
            color:"Blue",
            package:"1"
            },
            model_number:"RU105S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FDecor%20Multicolor%20Cotton%20Runner%20%20(60%20cm%20X%20150%20cm)-240.jpeg?alt=media&token=4c7c5267-dbed-4ae4-b1da-3a2b17a8a6d1",
            name:"Decor Multicolor Cotton Runner (60 cm X 150 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:11,
            price:240,
            description:{
            size:"60 cm X 150 cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"RU106S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FGrey%20Cotton%20Runner%20%20(45%20cm%20X%20120%20cm)-470.jpeg?alt=media&token=a640073c-b827-41fe-875e-c4b15357f7bd",
            name:"Grey Cotton Runner (45 cm X 120 cm)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:6,
            price:470,
            description:{
            size:"45 cm X 120 cm",
            color:"Grey",
            package:"1"
            },
            model_number:"RU107S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FGrey%20Cotton%20Runner%20%20(45%20cm%20X%20120%20cm)-550.jpeg?alt=media&token=a2574640-d3fc-4849-ae26-4df9d9f2a0ee",
            name:"Grey Cotton Runner (45 cm X 120 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:550,
            description:{
            size:"45 cm X 120 cm",
            color:"Grey",
            package:"1"
            },
            model_number:"RU108S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FLight%20Blue%20Cotton%20Carpet%20%20(50%20cm%20X%2080%20cm)-400.jpeg?alt=media&token=b18e7dd4-5d49-44b7-a754-cc559f0701eb",
            name:"Light Blue Cotton Carpet (50 cm X 80 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:400,
            description:{
            size:"50 cm X 80 cm",
            color:"Light Blue",
            package:"1"
            },
            model_number:"RU109S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FMaroon%20Cotton%20Runner%20%20(40%20cm%20X%20120%20cm)-540.jpeg?alt=media&token=b2c995f8-dc33-4541-bf00-4dee4345cee9",
            name:"Maroon Cotton Runner (40 cm X 120 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:540,
            description:{
            size:"40 cm X 120 cm",
            color:"Maroon",
            package:"1"
            },
            model_number:"RU110S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FMulticolor%20Cotton%20Carpet%20%20(121%20cm%20X%20183%20cm)-300.jpeg?alt=media&token=4ce20162-5add-4ac7-a357-e5c7c3b05f87",
            name:"Multicolor Cotton Carpet (121 cm X 183 cm)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:300,
            description:{
            size:"121 cm X 183 cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"RU111S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FMulticolor%20Cotton%20Carpet%20%20(121%20cm%20X%20183%20cm)-320.jpeg?alt=media&token=9b04acd0-1a43-4e0d-94a7-0fb8da1cfa9f",
            name:"Multicolor Cotton Carpet (121 cm X 183 cm)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:320,
            description:{
            size:"121 cm X 183 cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"RU112S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FMulticolor%20Cotton%20Carpet%20%20(121%20cm%20X%20183%20cm)-350.jpeg?alt=media&token=8a6a2216-ea6c-4272-a54a-607f06e8b013",
            name:"Multicolor Cotton Carpet (121 cm X 183 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:350,
            description:{
            size:"121 cm X 183 cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"RU113S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FMulticolor%20Cotton%20Carpet%20%20(121%20cm%20X%20183%20cm)-380.jpeg?alt=media&token=8fa12bb6-739f-447b-8394-8147a24edce3",
            name:"Multicolor Cotton Carpet (121 cm X 183 cm)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:380,
            description:{
            size:"121 cm X 183 cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"RU114S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FMulticolor%20Cotton%20Carpet%20%20(140%20cm%20X%20170%20cm)-300.jpeg?alt=media&token=4869bd10-9746-4c3a-b597-09fc7d3f6a36",
            name:"Multicolor Cotton Carpet (140 cm X 170 cm)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:300,
            description:{
            size:"140 cm X 170 cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"RU115S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FPink%20Cotton%20Runner%20%20(40%20cm%20X%20120%20cm)-530.jpeg?alt=media&token=6546ae4a-5cb2-4e25-8bf6-721211a56aa3",
            name:"Pink Cotton Runner (40 cm X 120 cm)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:11,
            price:530,
            description:{
            size:"40 cm X 120 cm",
            color:"Pink",
            package:"1"
            },
            model_number:"RU116S07"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FRed%20Cotton%20Carpet%20%20(152%20cm%20X%20212%20cm)-340.jpeg?alt=media&token=3178ad46-fbd8-4ea0-a665-48d0d962b219",
            name:"Red Cotton Carpet (152 cm X 212 cm)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:340,
            description:{
            size:"152 cm X 212 cm",
            color:"Red",
            package:"1"
            },
            model_number:"RU117S07"
            }
            ]
        
    var objrug={type:"Rugs",category:"Livingroom",    customer_review:[]
}

    var resrug=rugs.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objrug,...soldoutobj,...discountobj}
    })

Livingroom.insertMany({
    products:{
        Sofacover:ressofa,
    Windowcurtain:reswcurtain,
    Rugs:resrug
    }
},()=>{
    console.log("Livingroom inserted")
})

// kitchen insertion

const kitchen_towel=[
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Color%20Printed%206%20Multicolor%20Napkins%20%20(6%20Sheets)-380.jpeg?alt=media&token=014f3319-5e17-4cd6-868f-da01f350a78c",
    name:"Cotton 6 Multicolor Napkins (6 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:380,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"6"
    },
    model_number:"KI101L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Dis%20Napkins23%20Maroon%20Napkins%20%20(6%20Sheets)-500.jpeg?alt=media&token=2e957054-c078-4dc0-b8e1-c76e1a4588f0",
    name:"Cotton Maroon Napkins (6 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:500,
    description:{
    size:"18 x 18 Inches",
    color:"Maroon",
    package:"6"
    },
    model_number:"KI102L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Hand%20towels%2CKitchen%20Towels%203%20NP1003%20Napkins%20%20(4%20Sheets)-190.jpeg?alt=media&token=341b9550-3208-4651-8583-ac22361dcd03",
    name:"Cotton Colors Hand towels,Kitchen Towels Napkins (4 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:190,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"4"
    },
    model_number:"KI103L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Hand%20towels%2CKitchen%20Towels%2049%20NP1049%20Napkins%20%20(12%20Sheets)-580.jpeg?alt=media&token=a4ca50e0-65c1-4364-9cb3-9f547da87777",
    name:"Cotton Colors Hand towels,Kitchen Towels Napkins (12 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:580,
    description:{
    size:"16 x 16 Inches",
    color:"Multicolor",
    package:"12"
    },
    model_number:"KI104L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Plain%20Napkin%20Brown%20Napkins%20%20(3%20Sheets)-350.jpeg?alt=media&token=6184cd74-6c47-4fc1-86d5-8c516ada3fec",
    name:"Cotton Colors Plain Napkin Brown Napkins (3 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:8,
    price:350,
    description:{
    size:"16 x 16 Inches",
    color:"Brown",
    package:"3"
    },
    model_number:"KI105L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Plain%20Napkin%20Multicolor%20Napkins%20%20(5%20Sheets)-475.jpeg?alt=media&token=e0e9dc5f-3f2d-442a-b359-1eab32805bc3",
    name:"Cotton Colors Plain Napkin Multicolor Napkins (5 Sheets)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:475,
    description:{
    size:"16 x 16 Inches",
    color:"Multicolor",
    package:"5"
    },
    model_number:"KI106L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20RNB_SLKY_076%20Multicolor%20Napkins%20%20(8%20Sheets)-500.jpeg?alt=media&token=bd0201c9-129d-4336-8326-ef533b2737e8",
    name:"Cotton Colors Multicolor Napkins (8 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:500,
    description:{
    size:"16 x 16 Inches",
    color:"Multicolor",
    package:"8"
    },
    model_number:"KI107L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20White%20Printed%2049%20Multicolor%20Napkins%20%20(6%20Sheets)-290.jpeg?alt=media&token=50462d08-3908-40d1-a5a2-ebe2c39fa0a9",
    name:"Cotton Colors White Printed 49 Multicolor Napkins (6 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:290,
    description:{
    size:"18 x 18 Inches",
    color:"White",
    package:"6"
    },
    model_number:"KI108L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FHand%20Towels%20Set%20of%206%20Piece%20for%20Kitchen%2C%20wash%20Basin%20%26%20Gym%2C%20Soft%20%26%20Super%20Absorbent%2C%20Multicolor%20Napkins%20%20(6%20Sheets)-350.jpeg?alt=media&token=8719e264-65b3-4b5c-b573-369df7e8ed97",
    name:"Hand Towels Set of 6 Piece for Kitchen Multicolor Napkins (6 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:350,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"6"
    },
    model_number:"KI109L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FKitchen%20Towel%20Multicolor%20Napkins%20Pack%20Of%205%20Multicolor%20Napkins%20%20(5%20Sheets)-185.jpeg?alt=media&token=65ff6fb1-c041-43fb-94c2-0b9233dece7b",
    name:"Kitchen Towel Multicolor Napkins (5 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:185,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"5"
    },
    model_number:"KI110L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FKitchen%20Towel%20Pack%20of%206%20Pcs%20(18-18%20Inches)%20Multicolor%2012%20Napkins%20%20(6%20Sheets).jpeg?alt=media&token=969da392-cd96-487e-94b2-743542202758",
    name:"Kitchen Towel Pack of 6 Pcs Multicolor Napkins (6 Sheets)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:320,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"6"
    },
    model_number:"KI111L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FKitchen-DishTowelx9-Blue%20Blue%20Napkins%20%20(9%20Sheets)-350.jpeg?alt=media&token=4db7eda4-e326-4c92-a3ab-b1e36ace76c7",
    name:"Kitchen-DishTowel Blue Napkins (9 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:350,
    description:{
    size:"18 x 18 Inches",
    color:"Blue",
    package:"9"
    },
    model_number:"KI112L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FMicrofiber%20Cloth%20(Pack%20of%204%20Pcs.)%20Multicolor%20Napkins%20%20(4%20Sheets)-230.jpeg?alt=media&token=22825063-8e62-4406-b02c-8ac04f3ee7da",
    name:"Microfiber Cloth (Pack of 4 Pcs.) Multicolor Napkins (4 Sheets)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:230,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"4"
    },
    model_number:"KI113L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FNAPKIN01%20Multicolor%20Napkins%20%20(12%20Sheets)-200.jpeg?alt=media&token=83a9f7d0-f922-4f24-97ef-bd434f98df91",
    name:"NAPKIN01 Multicolor Napkins (12 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:200,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"12"
    },
    model_number:"KI114L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2Fcotton%20Hand%20towels%2CKitchen%20Towels%20soft%20Napkin%20Set%20of%2012%20Multicolor%20Napkins%20%20(12%20Sheets)-400.jpeg?alt=media&token=56c650be-b31e-4112-852b-a929215e7c29",
    name:"cotton ,Kitchen Towels Multicolor Napkins (12 Sheets)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:400,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"12"
    },
    model_number:"KI115L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2Fhand%20%26%20face%20towel%20(4%20towels)%20Multicolor%20Napkins%20%20(4%20Sheets)-190.jpeg?alt=media&token=db334e52-6cc9-4960-a7b8-3ea26e825bd4",
    name:"hand & face towel (4 towels) Multicolor Napkins (4 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:190,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"4"
    },
    model_number:"KI116L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2Fhand%20%26%20face%20towel%20(4%20towels)%20Multicolor%20Napkins%20%20(4%20Sheets)-230.jpeg?alt=media&token=959bdd90-7094-4617-a24a-afe349c3c832",
    name:"hand & face towel (4 towels) Multicolor Napkins (4 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:230,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"4"
    },
    model_number:"KI117L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2Fkitchen%20towel%20Multicolor%20Napkins%20%20(12%20Sheets)-250.jpeg?alt=media&token=4efe0f01-6157-43dc-a98d-851d8868f865",
    name:"kitchen towel Multicolor Napkins (12 Sheets)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:250,
    description:{
    size:"16 x 16 Inches",
    color:"Multicolor",
    package:"12"
    },
    model_number:"KI118L09"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2Fkitchen%20towel%20Multicolor%20Napkins%20%20(3%20Sheets)-180.jpeg?alt=media&token=a26b7429-59c6-40dd-9db6-8c7be576364b",
    name:"kitchen towel Multicolor Napkins (3 Sheets)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:180,
    description:{
    size:"18 x 18 Inches",
    color:"Multicolor",
    package:"3"
    },
    model_number:"KI119L09"
    },
    ]

    var objktowel={type:"Kitchentowel",category:"Kitchen",    customer_review:[]
}

    var resktowel=kitchen_towel.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objktowel,...soldoutobj,...discountobj}
    })

const apron=[
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FBlended%20Chef's%20Apron%20-%20XL%20%20(Blue%2C%20Pack%20of%202)(25-31)-280.jpeg?alt=media&token=a0d17916-cdb4-4ff2-a7ee-bd3ff60e2b22",
        name:"Blended Chef's Apron - XL (Blue, Pack of 2)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:8,
        price:280,
        description:{
        size:"25 x 31 inch",
        color:"Blue",
        package:2
        },
        model_number:"AP101N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Black%2C%20Green%2C%20Pack%20of%202)(25-31)-300.jpeg?alt=media&token=94928ade-9476-4a2e-b40c-e2be0ee76ebc",
        name:"Cotton Chef's Apron - Free Size (Black, Green, Pack of 2)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:300,
        description:{
        size:"25 x 31 inch",
        color:"Black, Green",
        package:2
        },
        model_number:"AP102N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Black%2C%20Red%2C%20Pack%20of%202)(25-31)-450.jpeg?alt=media&token=f0b6c791-5d04-432d-ba91-f0840204e66b",
        name:"Cotton Chef's Apron - Free Size (Black, Red, Pack of 2)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:450,
        description:{
        size:"25 x 31 inch",
        color:"Black, Red",
        package:2
        },
        model_number:"AP103N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Blue%2C%20Green%2C%20Pack%20of%202)(20-30)-400.jpeg?alt=media&token=4418a8bc-b1e1-4182-8c1f-ded2e6e81fc6",
        name:"Cotton Chef's Apron - Free Size (Blue, Green, Pack of 2)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:5,
        price:400,
        description:{
        size:"20 x 30 inch",
        color:"Blue, Green",
        package:2
        },
        model_number:"AP104N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Blue%2C%20Single%20Piece)(25-30)-250.jpeg?alt=media&token=26ae6c1d-1b22-4940-a4a6-bad907a968d0",
        name:"Cotton Chef's Apron - Free Size (Blue, Single Piece)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:8,
        price:250,
        description:{
        size:"25 x 30 inch",
        color:"Blue",
        package:1
        },
        model_number:"AP105N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Green%2C%20Single%20Piece)(20-35)-250.jpeg?alt=media&token=f8a43f9d-4906-4e60-be25-dbabd6ece978",
        name:"Cotton Chef's Apron - Free Size (Green, Single Piece)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:250,
        description:{
        size:"20 x 35 inch",
        color:"Green",
        package:1
        },
        model_number:"AP106N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Green%2C%20Single%20Piece)(25-30)-400.jpeg?alt=media&token=29b650da-2bd3-4e9c-83c0-5a72c269ba26",
        name:"Cotton Chef's Apron - Free Size (Green, Single Piece)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:15,
        price:400,
        description:{
        size:"25 x 30 inch",
        color:"Green",
        package:1
        },
        model_number:"AP107N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Multicolor%2C%20Single%20Piece)(20-31)-100.jpeg?alt=media&token=45edc6d5-c734-4b53-9258-30c768e2f9cc",
        name:"Cotton Chef's Apron - Free Size (Multicolor, Single Piece)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:100,
        description:{
        size:"20 x 31 inch",
        color:"Multicolor",
        package:1
        },
        model_number:"AP108N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Red%2C%20White%2C%20Single%20Piece)(25-31)-200.jpeg?alt=media&token=38098cdd-e43c-413e-ae39-bdb99180685b",
        name:"Cotton Chef's Apron - Free Size (Red, White, Single Piece)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:200,
        description:{
        size:"25 x 31 inch",
        color:"Red, White",
        package:1
        },
        model_number:"AP109N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Red%2C%20Yellow%2C%20Blue%2C%20Pack%20of%203)(25-31)-500.jpeg?alt=media&token=70e83121-23e8-400d-a2ea-b72aff6c094d",
        name:"Cotton Chef's Apron - Free Size (Red, Yellow, Blue, Pack of 3)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:500,
        description:{
        size:"25 x 31 inch",
        color:"Red, Yellow, Blue",
        package:3
        },
        model_number:"AP110N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Chef's%20Apron%20-%20Free%20Size%20%20(Yellow%2C%20Orange%2C%20Pack%20of%202)(20-30)-350.jpeg?alt=media&token=e8585f24-131b-453f-816e-7ce13862f558",
        name:"Cotton Chef's Apron - Free Size (Yellow, Orange, Pack of 2)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:350,
        description:{
        size:"20 x 30 inch",
        color:"Yellow, Orange",
        package:2
        },
        model_number:"AP111N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(Black%2C%20Red%2C%20Pack%20of%202)(25-31)-350.jpeg?alt=media&token=03dfcf3a-2ea4-479c-bc32-01030ae92de8",
        name:"Cotton Home Use Apron - Free Size (Black, Red, Pack of 2)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:350,
        description:{
        size:"25 x 31 inch",
        color:"Black, Red",
        package:2
        },
        model_number:"AP112N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(Black%2C%20Single%20Piece)(25-31)-150.jpeg?alt=media&token=8e0a78f6-387d-4473-bfb3-9298104e619c",
        name:"Cotton Home Use Apron - Free Size (Black, Single Piece)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:150,
        description:{
        size:"25 x 31 inch",
        color:"Black",
        package:1
        },
        model_number:"AP113N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(Light%20Blue%2C%20Single%20Piece)(20-30)-200.jpeg?alt=media&token=8abb6506-2cb5-4b6d-93c7-a7caf4b1b482",
        name:"Cotton Home Use Apron - Free Size (Light Blue, Single Piece)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:5,
        price:200,
        description:{
        size:"20 x 30 inch",
        color:"Light Blue",
        package:1
        },
        model_number:"AP114N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(Multicolor%2C%20Pack%20of%202)(25-35)-160.jpeg?alt=media&token=59c0e180-c62a-4d9d-9b72-4873b47bf77f",
        name:"Cotton Home Use Apron - Free Size (Multicolor, Pack of 2)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:15,
        price:160,
        description:{
        size:"25 x 35 inch",
        color:"Multicolor",
        package:2
        },
        model_number:"AP115N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(Multicolor%2C%20Single%20Piece)(25-31)-100.jpeg?alt=media&token=099d2627-c319-4792-a6ac-5bc9e83b21bb",
        name:"Cotton Home Use Apron - Free Size (Multicolor, Single Piece)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:100,
        description:{
        size:"25 x 31 inch",
        color:"Multicolor",
        package:1
        },
        model_number:"AP116N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(Red%2C%20Single%20Piece)(20-30)-120.jpeg?alt=media&token=3c052f96-99a9-4071-ac0c-c68a0641a75e",
        name:"Cotton Home Use Apron - Free Size (Red, Single Piece)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:120,
        description:{
        size:"20 x 30 inch",
        color:"Red",
        package:1
        },
        model_number:"AP117N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20Free%20Size%20%20(White%2C%20Maroon%2C%20Single%20Piece)(20-30)-180.jpeg?alt=media&token=ec2077c5-bc7b-413f-8bce-9b8581e16643",
        name:"Cotton Home Use Apron - Free Size (White, Maroon, Single Piece)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:180,
        description:{
        size:"20 x 30 inch",
        color:"White, Maroon",
        package:1
        },
        model_number:"AP118N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FCotton%20Home%20Use%20Apron%20-%20XL%20%20(Multicolor%2C%20Pack%20of%202)(25-35)-500.jpeg?alt=media&token=f9694a93-e2fd-4429-b6a0-07dbd7c14c01",
        name:"Cotton Home Use Apron - XL (Multicolor, Pack of 2)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:500,
        description:{
        size:"25 x 35 inch",
        color:"Multicolor",
        package:2
        },
        model_number:"AP119N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FDenim%20Chef's%20Apron%20-%20Free%20Size%20%20(Blue%2C%20Red%2C%20Single%20Piece)(25-31)-460.jpeg?alt=media&token=15f98bdd-06dc-4b58-b736-058c9f000b25",
        name:"Denim Chef's Apron - Free Size (Blue, Red, Single Piece)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:460,
        description:{
        size:"25 x 31 inch",
        color:"Blue, Red",
        package:1
        },
        model_number:"AP120N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FPolyester%20Chef's%20Apron%20-%20Free%20Size%20%20(Black%2C%20Pack%20of%202)(20-30)-300.jpeg?alt=media&token=70334b4e-b125-420d-8929-9b1a54ad4d14",
        name:"Polyester Chef's Apron - Free Size (Black, Pack of 2)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:300,
        description:{
        size:"20 x 30 inch",
        color:"Black",
        package:2
        },
        model_number:"AP121N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FPolyester%20Chef's%20Apron%20-%20Free%20Size%20%20(Brown%2C%20Maroon%2C%20Pack%20of%202)(20-30)-250.jpeg?alt=media&token=5fb04ba0-a4aa-4c33-b0a3-98a5af720610",
        name:"Polyester Chef's Apron - Free Size (Brown, Maroon, Pack of 2)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:250,
        description:{
        size:"20 x 30 inch",
        color:"Brown, Maroon",
        package:2
        },
        model_number:"AP122N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FPolyester%20Chef's%20Apron%20-%20Free%20Size%20%20(Brown%2C%20Maroon%2C%20Pack%20of%202)(25-31)-240.jpeg?alt=media&token=67bddeec-41ab-4150-adb3-09efeb3d5d17",
        name:"Polyester Chef's Apron - Free Size (Brown, Maroon, Pack of 2)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:240,
        description:{
        size:"25 x 31 inch",
        color:"Brown, Maroon",
        package:2
        },
        model_number:"AP123N08"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FPolyester%20Chef's%20Apron%20-%20Free%20Size%20%20(Red%2C%20Black%2C%20Pack%20of%202)(20-30inch)-270.jpeg?alt=media&token=995c2af9-e1e6-4f7e-b5dd-06195df7d97f",
        name:"Polyester Chef's Apron - Free Size (Red, Black, Pack of 2)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:12,
        price:270,
        description:{
        size:"20 x 30 inch",
        color:"Red, Black",
        package:2
        },
        model_number:"AP124N08"
        }
        ]

        var objapron={type:"Apron",category:"Kitchen",    customer_review:[]
    }

    var resapron=apron.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objapron,...soldoutobj,...discountobj}
    })

Kitchen.insertMany({
    products:{
        Kitchentowel:resktowel,
    Apron:resapron
    }
},()=>{
    console.log("kitchen inserted into Atlas !")
})

// table linen

const placemat=[
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%2012%20Table%20Placemat%20%20(Blue%2C%20PVC%2C%20Polyester)(10-38cm)-999.jpeg?alt=media&token=a1d3bed4-a32a-4b57-a9a9-f702d03c9402",
    name:"Rectangular Pack of 12 Table Placemat (Blue, PVC, Polyester)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:9,
    price:999,
    description:{
    size:"10 x 38 cm",
    color:"Blue",
    package:12
    },
    model_number:"PL101T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%202%20Table%20Placemat%20%20(Yellow%2C%20Green%2C%20Red%2C%20Fiber)(30-55cm)-378.jpeg?alt=media&token=4bc813df-7b63-41f8-a3f8-05ede029ef22",
    name:"Rectangular Pack of 2 Table Placemat (Yellow, Green, Red, Fiber)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:378,
    description:{
    size:"30 x 55 cm",
    color:"Yellow, Green, Red",
    package:2
    },
    model_number:"PL102T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%204%20Table%20Placemat%20%20(Brown%2C%20Silicone)-498.jpeg?alt=media&token=f179317f-d7f2-47b3-b927-54bd31014505",
    name:"Rectangular Pack of 4 Table Placemat (Brown, Silicone)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:498,
    description:{
    size:"29 x 50 cm",
    color:"Brown",
    package:4
    },
    model_number:"PL103T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Brown%2C%20PVC)(19-33cm)-249.jpeg?alt=media&token=c6f6b6f9-8129-4574-b1bf-1f560a9a40bd",
    name:"Rectangular Pack of 6 Table Placemat (Brown, PVC)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:249,
    description:{
    size:"19 x 33 cm",
    color:"Brown",
    package:6
    },
    model_number:"PL104T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Maroon%2C%20PVC)(6-46cm)-245.jpeg?alt=media&token=4e74d069-b451-4595-8e44-c879cdbeb9b1",
    name:"Rectangular Pack of 6 Table Placemat (Maroon, PVC)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:245,
    description:{
    size:"6 x 46 cm",
    color:"Maroon",
    package:6
    },
    model_number:"PL105T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20PVC)(30-49cm)-299.jpeg?alt=media&token=8d38aac5-8a52-4340-8ce9-f798f4a931fc",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor, PVC)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:7,
    price:299,
    description:{
    size:"30 x 49 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL106T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20PVC)(5cm-40cm)-220.jpeg?alt=media&token=a2e71df4-a077-4504-abe2-8ceb363e579b",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor, PVC)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:220,
    description:{
    size:"5 x 40 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL107T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20PVC)(6cm-38cm)-230.jpeg?alt=media&token=95095655-5566-486e-a426-ace093bb3804",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor, PVC)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:230,
    description:{
    size:"6 x 38 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL108T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor-6-35cm)-225.jpeg?alt=media&token=67ecaef7-a49f-4bd2-a5a0-3eaf386b9249",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:225,
    description:{
    size:"6 x 35 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL109T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Red%2C%20PVC)(5-30cm)-160.jpeg?alt=media&token=16dfd6f7-6871-480a-b427-1db608aacaf7",
    name:"Rectangular Pack of 6 Table Placemat (Red, PVC)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:9,
    price:160,
    description:{
    size:"5 x 30 cm",
    color:"Red",
    package:6
    },
    model_number:"PL110T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Silver%2C%20PVC)(30-40cm)-475.jpeg?alt=media&token=0f63242c-23e9-487a-b0ab-76e09f1f1c8f",
    name:"Rectangular Pack of 6 Table Placemat (Silver, PVC)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:475,
    description:{
    size:"30 x 40 cm",
    color:"Silver",
    package:6
    },
    model_number:"PL111T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20%20(Yellow%2C%20Cotton)(35-48cm)-510.jpeg?alt=media&token=6d0415d0-2121-4618-89b4-2133703633c5",
    name:"Rectangular Pack of 6 Table Placemat (Yellow, Cotton)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:12,
    price:510,
    description:{
    size:"35 x 48 cm",
    color:"Yellow",
    package:6
    },
    model_number:"PL112T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%206%20Table%20Placemat%20(4cm-45cm)-149.jpeg?alt=media&token=0a01c28d-fd65-45e9-a190-52ea4a0c2f4e",
    name:"Rectangular Pack of 6 Table Placemat (4cm-45cm)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:149,
    description:{
    size:"4 x 45 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL113T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%207%20Table%20Placemat%20%20(Multicolor%2C%20Polyester%2C%20Cotton)(20-43cm)-849.jpeg?alt=media&token=c6cdfa8e-b212-472b-8070-5f72e1c2e485",
    name:"Rectangular Pack of 7 Table Placemat (Multicolor, Polyester, Cotton)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:849,
    description:{
    size:"20 x 43 cm",
    color:"Multicolor",
    package:7
    },
    model_number:"PL114T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FSquare%20Pack%20of%201%20Table%20Placemat%20%20(Multicolor%2C%20Fiber)-(10-10cm)-288.jpeg?alt=media&token=d38b2088-e6ed-4457-8c0e-3f5eb555721f",
    name:"Square Pack of 1 Table Placemat (Multicolor, Fiber)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:288,
    description:{
    size:"10 x 10 cm",
    color:"Multicolor",
    package:1
    },
    model_number:"PL115T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FTalk%20Round%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20Cotton)-499.jpeg?alt=media&token=0b39423f-3024-46bc-8c95-285bf670f14e",
    name:"Round Pack of 6 Table Placemat (Multicolor, Cotton)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:499,
    description:{
    size:"20 x 43 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL116T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FTree%20Rectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20PVC)(20-32cm)-212.jpeg?alt=media&token=a0e7a16a-902d-4bd3-9489-56d4f228ca4c",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor, PVC)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:212,
    description:{
    size:"20 x 32 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL117T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FTree%20Rectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20PVC)(7cm-39cm)-210.jpeg?alt=media&token=9cb56185-2a10-411e-9f70-d98e9ffe9acd",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor, PVC)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:210,
    description:{
    size:"7 x 39 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL118T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FTree%20Rectangular%20Pack%20of%206%20Table%20Placemat%20%20(Multicolor%2C%20PVC)-(20-34cm)-110.jpeg?alt=media&token=641f2988-4b1e-4bf0-92ae-1722a5983764",
    name:"Rectangular Pack of 6 Table Placemat (Multicolor, PVC)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:9,
    price:110,
    description:{
    size:"20 x 34 cm",
    color:"Multicolor",
    package:6
    },
    model_number:"PL119T10"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FWEAVES%20Rectangular%20Pack%20of%206%20Table%20Placemat%20%20(Grey%2C%20PVC)(22-34cm)-555.jpeg?alt=media&token=d0d04c16-935e-4fbc-9920-8b71fc432404",
    name:"Rectangular Pack of 6 Table Placemat (Grey, PVC)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:555,
    description:{
    size:"22 x 34 cm",
    color:"Grey",
    package:6
    },
    model_number:"PL120T10"
    }
    ]

    var objplacemat={type:"Placemat",category:"Tablelinen",    customer_review:[]
}

    var resplacemat=placemat.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objplacemat,...soldoutobj,...discountobj}
    })

const table_clothe=[
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2F(130-199cm)Embroidered%204%20Seater%20Table%20Clothe%20(Brown%2C%20Cotton)-210.jpeg?alt=media&token=7c29a970-3224-4ebc-b2ab-bf1af96dfa2a",
        name:"Embroidered 4 Seater Table Clothe (Brown, Cotton)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:210,
        description:{
        size:"130 x 199cm",
        color:"Brown",
        package:"1"
        },
        model_number:"TA101H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2F4%20Seater%20Table%20Clothe(Maroon%2C%20Cotton)-(140-198cm)195.jpeg?alt=media&token=457e0ae3-177f-4f9b-b5e6-231ebdef9faf",
        name:"4 Seater Table Clothe(Maroon, Cotton)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:195,
        description:{
        size:"140 x 198cm",
        color:"Maroon",
        package:"1"
        },
        model_number:"TA102H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FAbstract%204%20Seater%20Table%20Cover%20%20(White%2C%20Plastic)(110-156cm)-297.jpeg?alt=media&token=b34ddbce-3ad8-4d3c-a3dd-846a9325e895",
        name:"Abstract 4 Seater Table Cover (White, Plastic)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:297,
        description:{
        size:"110 x 156cm",
        color:"White",
        package:"1"
        },
        model_number:"TA103H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FAbstract%206%20Seater%20Table%20Cover%20%20(Flower%2C%20Polyester)(160-230cm)-1399.jpeg?alt=media&token=daecf47b-d599-467b-bac3-9729785c4655",
        name:"Abstract 6 Seater Table Cover (Flower, Polyester)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:1399,
        description:{
        size:"2",
        color:"160 x 230cm",
        package:"3"
        },
        model_number:"TA104H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FEmbroidered%204%20Seater%20Table%20Cover%20%20(Multicolor%2C%20Cotton)(110-160cm)-435.jpeg?alt=media&token=2a551463-1eda-4c32-9027-6a219cfd51ec",
        name:"Embroidered 4 Seater Table Cover (Multicolor, Cotton)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:8,
        price:435,
        description:{
        size:"110 x 60cm",
        color:"Multicolor",
        package:"2"
        },
        model_number:"TA105H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FFloral%204%20Seater%20Table%20Clothe%20%20(Multicolor%2C%20Polyester)-189(120-150cm).jpeg?alt=media&token=56ffa3fd-8691-41db-a69e-4f7048b182dd",
        name:"Floral 4 Seater Table Clothe (Multicolor, Polyester)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:189,
        description:{
        size:"120 x 150cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"TA106H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FFloral%204%20Seater%20Table%20Clothe%20(Pink%2C%20Cotton)-197(140-198cm).jpeg?alt=media&token=7cb3d405-9286-48fc-90dd-12706d9c4d37",
        name:"Floral 4 Seater Table Clothe (Pink, Cotton)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:197,
        description:{
        size:"140 x 198cm",
        color:"Pink",
        package:"1"
        },
        model_number:"TA107H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FFloral%204%20Seater%20Table%20Cover%20%20(Multicolor%2C%20Cotton)(120-159cm)-229.jpeg?alt=media&token=52872faf-c08e-43a0-acaa-b3e9a8ac6b02",
        name:"Floral 4 Seater Table Cover (Multicolor, Cotton)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:229,
        description:{
        size:"120 x 159cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"TA108H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FFloral%204%20Seater%20Table%20Cover%20%20(White%2C%20Polyester%2C%20Cotton)-199(145-210cm).jpeg?alt=media&token=200d9333-dddc-4c9b-aeb9-c27fdddfc32e",
        name:"Floral 4 Seater Table Cover (White, Polyester, Cotton)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:199,
        description:{
        size:"145 x 210cm",
        color:"White",
        package:"1"
        },
        model_number:"TA109H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FFloral%2C%20Printed%206%20Seater%20Table%20Clothe%20(Green%2C%20Cotton)-599(128-198).jpeg?alt=media&token=ac0714f1-815f-456c-a91e-7d49642756bf",
        name:"Floral, Printed 6 Seater Table Clothe (Green, Cotton)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:599,
        description:{
        size:"128 x 198cm",
        color:"Green",
        package:"2"
        },
        model_number:"TA110H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FFloral%2C%20Self%20Design%204%20Seater%20Table%20Cover%20%20(Brown%2C%20Polyester)-378(142-188cm).jpeg?alt=media&token=b17a179d-526d-4053-884e-579fdb72f959",
        name:"Floral, Self Design 4 Seater Table Cover (Brown, Polyester)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:8,
        price:378,
        description:{
        size:"142 x 188cm",
        color:"Brown",
        package:"1"
        },
        model_number:"TA111H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FGeometric%204%20Seater%20Table%20Clothe%20%20(White%2C%20Polyester)-191(129-190cm).jpeg?alt=media&token=cbf8b75d-f49c-4d2d-917e-8fa633b39351",
        name:"4 Seater Table Clothe (White, Polyester)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:191,
        description:{
        size:"129 x 190cm",
        color:"White",
        package:"1"
        },
        model_number:"TA112H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FPolka%206%20Seater%20Table%20Cover%20%20(Black%2C%20White%2C%20PVC)(156-228cm)-360.jpeg?alt=media&token=e03a9c27-5c5f-4ce9-9d43-2ad2e3f88fcd",
        name:"Polka 6 Seater Table Cover (Black, White, PVC)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:12,
        price:360,
        description:{
        size:"156 x 228cm",
        color:"Black,White",
        package:"1"
        },
        model_number:"TA113H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FPrinted%204%20Seater%20Table%20Clothe(Rust%2C%20Cotton)-199(126-190cm).jpeg?alt=media&token=0bf7d612-429f-455e-a5c3-5c2e47f01ba7",
        name:"Printed 4 Seater Table Clothe(Rust, Cotton)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:199,
        description:{
        size:"126 x 190cm",
        color:"Rust",
        package:"1"
        },
        model_number:"TA114H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FPrinted%204%20Seater%20Table%20Clothe-%20%20(Maroon%2C%20Cotton)-199(142-200cm).jpeg?alt=media&token=58ffbd6e-7f3e-4bce-932b-2f2f1c068707",
        name:"Printed 4 Seater Table Clothe- (Maroon, Cotton)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:11,
        price:199,
        description:{
        size:"142 x 200cm",
        color:"Maroon",
        package:"1"
        },
        model_number:"TA115H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FPrinted%204%20Seater%20Table%20Cover%20%20(Brown%2C%20Cotton)(120-160cm)-289.jpeg?alt=media&token=06477d36-179b-4da7-a7c1-97e57a3e3115",
        name:"Printed 4 Seater Table Cover (Brown, Cotton)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:14,
        price:289,
        description:{
        size:"120 x 160cm",
        color:"Brown",
        package:"1"
        },
        model_number:"TA116H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FPrinted%206%20Seater%20Table%20Cover%20%20(Multicolor%2C%20Cotton)-599.jpeg?alt=media&token=bd106157-8377-4a96-a81c-b178680e33cd",
        name:"Printed 6 Seater Table Cover (Multicolor, Cotton)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:12,
        price:599,
        description:{
        size:"120 x 160cm",
        color:"Multicolor",
        package:"2"
        },
        model_number:"TA117H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FSolid%206%20Seater%20Table%20Clothe(Transparent%2C%20PVC%20(Polyvinyl%20Chloride))-349(155-223cm).jpeg?alt=media&token=7830b3d7-bc8e-4bcc-a6e9-a7382764a641",
        name:"Solid 6 Seater Table Clothe(Transparent, PVC (Polyvinyl Chloride))",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:9,
        price:349,
        description:{
        size:"155 x 223cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"TA118H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FVilla%20Floral%204%20Seater%20Table%20Clothe%20(Multicolor%2C%20Cotton)-239(143-210cm).jpeg?alt=media&token=43a9f91c-505b-40ec-b774-db9797ee2473",
        name:"Floral 4 Seater Table Clothe (Multicolor, Cotton)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:13,
        price:239,
        description:{
        size:"143 x 210cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"TA119H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FWEAVES%20Floral%204%20Seater%20Table%20Cover%20%20(Multicolor%2C%20Polyester)-199(129-180cm).jpeg?alt=media&token=29042d25-1876-4347-b1d1-1681e3443df8",
        name:"Floral 4 Seater Table Cover (Multicolor, Polyester)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:199,
        description:{
        size:"129 x 180cm",
        color:"Multicolor",
        package:"1"
        },
        model_number:"TA120H12"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2FWEAVES%20Geometric%204%20Seater%20Table%20Clothe-%20(Off%20White%2C%20Polyester)-198(130-197cm).jpeg?alt=media&token=ec3a0b4a-2fe2-47ee-bae3-7bbe4136e0f7",
        name:"Geometric 4 Seater Table Clothe (Off White, Polyester)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:198,
        description:{
        size:"130 x 197cm",
        color:"White",
        package:"1"
        },
        model_number:"TA121H12"
        }
        ]

        var objtcloth={type:"Tablecloth",category:"Tablelinen",    customer_review:[]
    }

    var restcloth=table_clothe.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objtcloth,...soldoutobj,...discountobj}
    })

const table_runner=[
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2F140%20cm%20-32.3)Table%20Runner%20-designed%20round%20(Cotton)-699.jpeg?alt=media&token=b4525ef6-468b-4c93-8696-e3424dd3deb0",
            name:"Table Runner -designed round (Cotton)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:699,
            description:{
            size:"140 x 32.3cm",
            color:"white",
            package:"5"
            },
            model_number:"TA101R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FBeige%20130%20cm-33.3cm)%20Table%20Runner%20%20(Cotton%2C%20Polyester)-889.jpeg?alt=media&token=700db998-cfd1-49ba-9820-03e4b38aefc0",
            name:"Table Runner (Cotton, Polyester)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:889,
            description:{
            size:"130 x 33.3cm",
            color:"Beige ",
            package:"6"
            },
            model_number:"TA102R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FBlack%20150%20cm%20-29.5cm)Table%20Runner%20%20(Rayon%2C%20Cotton)-245.jpeg?alt=media&token=0218b874-3899-48a1-8a77-8a3370c00273",
            name:"Table Runner (Rayon, Cotton)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:245,
            description:{
            size:"150 x 29.5cm",
            color:"Black",
            package:"2"
            },
            model_number:"TA103R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FBrown%20104%20cm-31.3cm)%20Table%20Runner%20%20(Cotton)-270.jpeg?alt=media&token=3484a838-973f-4224-9ce8-6ca13ab3a69d",
            name:"Brown Table Runner (Cotton)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:270,
            description:{
            size:"104 x 31.3cm",
            color:"Brown",
            package:"2"
            },
            model_number:"TA104R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FBrown%2080%20cm%20-27cm)Table%20Runner%20%20(PVC)-259.jpeg?alt=media&token=25c94a47-2fc7-4b2d-84a0-3cc95a1f8ffd",
            name:"Brown Table Runner (PVC)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:259,
            description:{
            size:"80cm x 27cm",
            color:"Brown",
            package:"2"
            },
            model_number:"TA105R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FGold%20133cm%20-34cm)Table%20Runner%20%20(Nylon)-399.jpeg?alt=media&token=231d76de-e586-403b-ad80-b0327fa39c5f",
            name:"Gold Table Runner (Nylon)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:399,
            description:{
            size:"133cm x 34cm",
            color:"Gold",
            package:"3"
            },
            model_number:"TA106R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FGold%2040%20in-12in)%20Table%20Runner%20%20(Nylon)-235.jpeg?alt=media&token=689cbaba-573d-48d5-96e0-81fa890de882",
            name:"Gold Table Runner (Nylon)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:235,
            description:{
            size:"40 x 12inch",
            color:"Gold",
            package:"1"
            },
            model_number:"TA107R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FGreen%20152%20cm-34.8cm)%20Table%20Runner%20%20(Silk)-875.jpeg?alt=media&token=f8f3d8d7-701f-488f-9135-c5d3b66c33d2",
            name:"Green Table Runner (Silk)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:875,
            description:{
            size:"152 cm x 34.8cm",
            color:"Green",
            package:"4"
            },
            model_number:"TA108R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FGreen%2040.64%20in-10in)%20Table%20Runner%20%20(Silk)-699.jpeg?alt=media&token=8558a6aa-3dc4-4f63-9e28-1feb4a6ee372",
            name:"Green Table Runner (Silk)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:699,
            description:{
            size:"40.64inch x 10inch",
            color:"Green",
            package:""
            },
            model_number:"TA109R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FIMPEX%20White%20105cm-31.4cm)%20cm%20Table%20Runner%20%20(PVC)-220.jpeg?alt=media&token=8015b884-1821-4399-a197-8d8a636e9d13",
            name:"White Table Runner (PVC)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:220,
            description:{
            size:"105cm x 31.4cm",
            color:"White",
            package:"1"
            },
            model_number:"TA110R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FINDUSTRIES%20Gold%20135cm-33cm)%20Table%20Runner%20%20(Nylon)-220.jpeg?alt=media&token=3200e400-9bd1-43a0-aef9-161aa435e442",
            name:"Gold Table Runner (Nylon)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:220,
            description:{
            size:"135cm x 33cm",
            color:"Gold",
            package:"1"
            },
            model_number:"TA111R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FMulticolor%20120%20cm-33cm)%20Table%20Runner%20%20(Satin)-898.jpeg?alt=media&token=623a7e6f-8740-4a1f-abf1-37f8e7632768",
            name:"Multicolor Table Runner (Satin)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:898,
            description:{
            size:"120cm x 33cm",
            color:"Multicolor",
            package:"4"
            },
            model_number:"TA112R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FMulticolor%20135cm-33%20cm%20Table%20Runner%20%20(Organic%20Cotton)-555.jpeg?alt=media&token=dcd87b90-2637-4b9b-a619-ec600d84de6c",
            name:"Multicolor Table Runner (Organic Cotton)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:555,
            description:{
            size:"135cm x 33cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"TA113R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FMulticolor%20152-34cm)%20Table%20Runner%20%20(Cotton)-410.jpeg?alt=media&token=a669c78b-1b04-47de-a737-004b1af5726a",
            name:"Multicolor Table Runner (Cotton)",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:410,
            description:{
            size:"152 x 34cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"TA114R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FMulticolor%20180%20cm-32.4cm)%20Table%20Runner%20%20(Vinyl)-199.jpeg?alt=media&token=9e62efe9-1d1a-4102-8cb7-f309280a68c1",
            name:"Multicolor Table Runner (Vinyl)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:199,
            description:{
            size:"180cm x 32.4cm",
            color:"Multicolor",
            package:"1"
            },
            model_number:"TA115R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FMulticolor%2090%20cm%20-32cm)Table%20Runner%20%20(Satin)-1249.jpeg?alt=media&token=02dae362-d21b-43f1-bd04-bad78957091b",
            name:"Multicolor Table Runner (Satin)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:1249,
            description:{
            size:"90cm x 32cm",
            color:"Multicolor ",
            package:"7"
            },
            model_number:"TA116R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FOrange%20185%20cm-34cm)%20Table%20Runner%20%20(Cotton)-299.jpeg?alt=media&token=d73681c3-3508-4540-9a72-96852f15dff9",
            name:"Orange Table Runner (Cotton)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:299,
            description:{
            size:"185cm x 34cm",
            color:"Orange",
            package:"1"
            },
            model_number:"TA117R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FPALACE%20Blue%20183-32.3%20cm%20Table%20Runner%20%20(Cotton)-1099.jpeg?alt=media&token=404c374d-00ca-4ea5-b626-83030eb59c2d",
            name:"Blue Table Runner (Cotton)",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:1099,
            description:{
            size:"183cm x 32.3cm",
            color:"Blue",
            package:"7"
            },
            model_number:"TA118R11"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2FWhite%2C%20Multicolor%20180%20cm-29.9cm%20Table%20Runner%20%20(Jacquard)-1550.jpeg?alt=media&token=315d2cef-81d7-46f8-af97-ecd63352444b",
            name:"White, Multicolor Table Runner (Jacquard)",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:1550,
            description:{
            size:"180cm x 29.9cm",
            color:"White, Multicolor",
            package:"8"
            },
            model_number:"TA119R11"
            },
            ]

            var objtrunner={type:"Tablerunner",category:"Tablelinen",    customer_review:[]
        }

    var restrunner=table_runner.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objtrunner,...soldoutobj,...discountobj}
    })
   
const napkin=[
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2F100%25%20cotton%20Hand%20towels%2CKitchen%20Towels%20soft%20Napkin%20Set%20of%2012%20Multicolor%20Napkins(12-18inch)-360.jpeg?alt=media&token=403fd4c8-135f-4c23-addd-5d9449d26616",
                name:"100% cotton Hand towels,Kitchen Towels soft Napkin Set of 12 Multicolor Napkins",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:360,
                description:{
                size:"12 x 18 inch",
                color:"Multicolor",
                package:"12"
                },
                model_number:"NA101N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2F1218%20Multicolor%20Napkins%20-(12-18inch)-180.jpeg?alt=media&token=e61919f0-0cf0-4652-be8d-1a0f89a5a557",
                name:"Hand towels,Multicolor Napkins ",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:11,
                price:180,
                description:{
                size:"12 x 18inch",
                color:"Multicolor",
                package:"6"
                },
                model_number:"NA102N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FCotton%20Cool%20Rose%2020X13%20Inch%20Multicolor%20Napkins-199.jpeg?alt=media&token=ab4f5c3f-067b-4002-8077-64ad51595c66",
                name:"Cotton Cool Rose Multicolor Napkins",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:12,
                price:199,
                description:{
                size:"20 x 13 Inch",
                color:"Multicolor",
                package:"5"
                },
                model_number:"NA103N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FCotton%20Hand%20Block%20Printed%20Napkins%20Blue%20Napkins%20%20(16-16inch)-349.jpeg?alt=media&token=29de6f45-f961-4dcc-aec8-1bf93dc9416d",
                name:"Cotton Hand Block Printed Napkins Blue Napkins ()-349.jpeg",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:8,
                price:349,
                description:{
                size:"16 x 16inch",
                color:"Blue",
                package:"12"
                },
                model_number:"NA104N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FCotton%20Kitchen%20Cloth%20Multicolor%20Napkins-(16-16inch)-235.jpeg?alt=media&token=cbabfa84-70a2-4a85-949a-7122c9cfb351",
                name:"Cotton Kitchen Cloth Multicolor Napkins",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:6,
                price:235,
                description:{
                size:"16 x 16inch",
                color:"Multicolor",
                package:"6"
                },
                model_number:"NA105N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FCotton%20cool%20010%20Multicolor%20Napkins-(9-9inch)-160.jpeg?alt=media&token=6b9bcad2-c80c-438b-9aab-d8e9a659af9a",
                name:"Cotton cool 10 Multicolor Napkins",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:6,
                price:160,
                description:{
                size:"9 x 9inch",
                color:"Multicolor",
                package:"10"
                },
                model_number:"NA106N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FFold%20Tissue%20Paper%20White%20Napkins(425).jpeg?alt=media&token=ccf2e70b-1399-47c6-8047-ba6bafee96f7",
                name:"Fold Tissue Paper White Napkins",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:12,
                price:425,
                description:{
                size:"9 x 9inch",
                color:"Multicolor",
                package:"12"
                },
                model_number:"NA107N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FKN-06%20White%20Napkins-197.jpeg?alt=media&token=057db6b5-6064-4a98-9ace-debdd692b917",
                name:"Cotton Kitchen Cloth White Napkins",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:13,
                price:197,
                description:{
                size:"16 x 16inch",
                color:"White",
                package:"6"
                },
                model_number:"NA108N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FKitchen%20Chapatis%20Napkin(22-15inch)-280.jpeg?alt=media&token=8c5ee9fa-040e-4b62-9418-5834c29434d9",
                name:"Kitchen Chapatis Napkin()-280.jpeg",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:11,
                price:280,
                description:{
                size:"22 x 15inch",
                color:"Multicolor",
                package:"6"
                },
                model_number:"NA109N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FKitchen%20Dinner%20Table%20and%20Face%20Wash_001%20Multicolor%20Napkins(12-17inch)-270.jpeg?alt=media&token=6afad56c-cefa-48e3-9d43-7b8147bd7f7e",
                name:"Kitchen Dinner Table and Face Wash Multicolor Napkins",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:9,
                price:270,
                description:{
                size:"22 x 15inch",
                color:"Multicolor",
                package:"8"
                },
                model_number:"NA110N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FKitchen%20Floor%20wet%20and%20dry%20cleaning%20cloth%20(Medium%20Pocha)%20set%20of%2012%20pcs%20(%2053%20x%2053%20cm)%20White%2C%20Grey%20Napkins-198.jpeg?alt=media&token=4bce86b7-0851-479b-8304-a294c9400460",
                name:"Kitchen Floor wet and dry cleaning cloth set of 12 pcs White, Grey Napkins",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:11,
                price:198,
                description:{
                size:"53 x 53 cm",
                color:"White, Grey",
                package:"12"
                },
                model_number:"NA111N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FKitchen%20Towels%20Cotton%20Dish%20Napkin%20-%20Machine%20Washable%20-%20Multi%20Coloured%20Checked%20Dish%20Towels%2C%20Tea%20Towels%2C%20Table%20Cloth%2018x18%20Inch%20-%20Pack%20of%2012%20Multicolor%20Napkins%20-230.jpeg?alt=media&token=7b279880-3526-468b-90aa-588d848a4e6b",
                name:"Kitchen Towels Multi Coloured Checked Dish Towels Pack of 12 Multicolor Napkins",
                rating:5,
                wishlist:false,
                cart:false,
                stock:true,
                offer:6,
                price:230,
                description:{
                size:"18 x 18 Inch",
                color:"White",
                package:"12"
                },
                model_number:"NA112N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FKitchen%20Towels%20Multicolor%20Napkins-220.jpeg?alt=media&token=3625c484-b9e4-4c63-a8f0-cf7aa4883a03",
                name:"Kitchen Towels Multicolor Napkins",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:12,
                price:220,
                description:{
                size:"18 x 18 Inch",
                color:"Multicolor",
                package:"3"
                },
                model_number:"NA113N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FMicrofiber%20Napkin%20P1G%20Green%20Napkins(120).jpeg?alt=media&token=e451b6e2-00cd-4f90-9577-11c0317024df",
                name:"Microfiber Napkin Green Napkins",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:10,
                price:120,
                description:{
                size:"18 x 18 Inch",
                color:"Orange",
                package:"1"
                },
                model_number:"NA114N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FSoft%20and%20Absorbent%20Hand%20Napkins%20For%20Kitchen%20White%20Napkins%20%20(320).jpeg?alt=media&token=ea8d99c5-3cb1-4a3a-a000-d0c7df3d9c3b",
                name:"Soft and Absorbent Hand Napkins For Kitchen White Napkins",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:6,
                price:320,
                description:{
                size:"53 x 53 cm",
                color:"Multicolor",
                package:"5"
                },
                model_number:"NA115N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FSolid%20Cotton%20Maroon%20Color%20Table%20Napkin%20Maroon%20Napkins(16-16inch)-250.jpeg?alt=media&token=36349e85-9235-4aa1-bd62-41ddefe17081",
                name:"Solid Cotton Maroon Color Table Napkin Maroon Napkins",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:5,
                price:250,
                description:{
                size:"16 x 16inch",
                color:"Maroon",
                package:"6"
                },
                model_number:"NA116N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FUltaSoft%20SkinCare%20Napkins%20-%20Face%20Towels%20Multicolor%20Napkins%20(12-12inch)-170.jpeg?alt=media&token=930653ab-660b-4c69-a3bd-46d681f878c5",
                name:"UltaSoft SkinCare Napkins - Face Towels Multicolor Napkins",
                rating:4,
                wishlist:false,
                cart:false,
                stock:true,
                offer:14,
                price:170,
                description:{
                size:"12 x 12inch",
                color:"Multicolor",
                package:"8"
                },
                model_number:"NA117N13"
                },
                {
                img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2FWashbasin%20%26%20Kitchen%20Napkin%20Hand%20Towel%20Pack%20of%203%20Multicolor%20Napkins(11.8-16.7inch)-229.jpeg?alt=media&token=2a620c69-403c-463d-aa16-d595bec73032",
                name:"Washbasin & Kitchen Napkin Hand Towel Pack of 3 Multicolor Napkins",
                rating:3,
                wishlist:false,
                cart:false,
                stock:true,
                offer:7,
                price:229,
                description:{
                size:"11.8 x 16.7inch",
                color:"Multicolor",
                package:"3"
                },
                model_number:"NA118N13"
                }
                ]

                var objnapkin={type:"Napkin",category:"Tablelinen",    customer_review:[]
            }

                var resnapkin=napkin.map((el)=>{
                    var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
                    var x=(el.price/100)*(el.offer)
                    var discount=el.price-x
        
                    var discountobj={discountprice:Math.ceil(discount)}
                    return arr={...el,...objnapkin,...soldoutobj,...discountobj}
                })

Tablelinen.insertMany({
    products:{
        Placemat:resplacemat,
    Tablecloth:restcloth,
    Tablerunner:restrunner,
    Napkin:resnapkin
    }
},()=>{
    console.log("Table linen inserted into Atlas !")
})


// bathroom

const bathroom_mat=[
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FAcrylic%20Bathroom%20Mat%20%20(Red%2C%20Medium)(40-80)-280.jpeg?alt=media&token=b2508542-495a-4cbf-8681-ab575fbaecf8",
    name:"Acrylic Bathroom Mat (Red, Medium)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:280,
    description:{
    size:"40 X 80 cm ",
    color:"Red",
    package:"1"
    },
    model_number:"BA101T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Beige%2C%20Medium)(40-60)-550.jpeg?alt=media&token=b1ee6398-fe3a-4345-9208-9d3ab653a647",
    name:"Cotton Bathroom Mat (Beige, Medium)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:550,
    description:{
    size:"40 X 60 cm ",
    color:"Beige",
    package:"2"
    },
    model_number:"BA102T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Grey%2C%20Small)(60-60)-300.jpeg?alt=media&token=4bb483f5-5082-4282-bf81-d97e8cd2336a",
    name:"Cotton Bathroom Mat (Grey, Small)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:300,
    description:{
    size:"40 X 40 cm ",
    color:"Grey",
    package:"1"
    },
    model_number:"BA103T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(INK%20BLUE%2C%20Free)(40-70)-450.jpeg?alt=media&token=00b1c298-49f5-4447-a516-1eaacd8dd069",
    name:"Cotton Bathroom Mat (INK BLUE, Free)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:9,
    price:450,
    description:{
    size:"40 X 70 cm ",
    color:"INK BLUE",
    package:"1"
    },
    model_number:"BA104T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Multicolor%2C%20Large)(40-70)-340.jpeg?alt=media&token=4ef875e0-9999-4f1c-81f9-7d77734d95e6",
    name:"Cotton Bathroom Mat (Multicolor, Large)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:340,
    description:{
    size:"40 X 70 cm ",
    color:"Multicolor",
    package:"4"
    },
    model_number:"BA105T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Multicolor%2C%20Medium)(35-50)-400.jpeg?alt=media&token=d67c41bd-4385-427b-9077-e3d36d11a23a",
    name:"Cotton Bathroom Mat (Multicolor, Medium)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:400,
    description:{
    size:"35 X 50 cm ",
    color:"8",
    package:"8"
    },
    model_number:"BA106T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Multicolor%2C%20Medium)(50-80)-100.jpeg?alt=media&token=8546c10d-2b04-4798-be9b-61dbb13f8c4d",
    name:"Cotton Bathroom Mat (Multicolor, Medium)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:5,
    price:100,
    description:{
    size:"50 X 80 cm ",
    color:"Multicolor",
    package:"1"
    },
    model_number:"BA107T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Multicolor%2C%20Medium)(50-80)-300.jpeg?alt=media&token=9e8c6558-4050-440d-9939-d6de2363c7dc",
    name:"Cotton Bathroom Mat (Multicolor, Medium)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:300,
    description:{
    size:"50 X 80 cm ",
    color:"Multicolor",
    package:"3"
    },
    model_number:"BA108T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(PLATINUM%2C%20Free)(50-80)-500.jpeg?alt=media&token=6d6d7d3d-a359-4b37-848f-bae9e35a8b01",
    name:"Cotton Bathroom Mat (PLATINUM, Free)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:6,
    price:500,
    description:{
    size:"50 X 80 cm ",
    color:"PLATINUM",
    package:"1"
    },
    model_number:"BA109T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FMicrofiber%20Bathroom%20Mat%20%20(Brown%2C%20Medium)(35-50)-200.jpeg?alt=media&token=bfa97d60-349d-4af0-b173-512d39f842d6",
    name:"Microfiber Bathroom Mat (Brown, Medium)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:13,
    price:200,
    description:{
    size:"35 X 50 cm",
    color:"Brown",
    package:"2"
    },
    model_number:"BA110T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FMicrofiber%20Bathroom%20Mat%20%20(Dark%20Pink%2C%20Small)(60-100)-330.jpeg?alt=media&token=cc58638f-81ef-4812-b23f-d8cb22baa6be",
    name:"Microfiber Bathroom Mat (Dark Pink, Small)",
    rating:4,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:330,
    description:{
    size:"60 X 100 cm ",
    color:"Dark Pink",
    package:"1"
    },
    model_number:"BA111T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FMicrofiber%20Bathroom%20Mat%20%20(Grey%2C%20Large)(60-40cm)-250.jpeg?alt=media&token=217ad498-c76d-4bda-90ad-f6c270cbce40",
    name:"Microfiber Bathroom Mat (Grey, Large)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:12,
    price:250,
    description:{
    size:"60 X 40 cm ",
    color:"Grey",
    package:"2"
    },
    model_number:"BA112T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FMicrofiber%20Bathroom%20Mat%20%20(Grey%2C%20Medium)(60-100)-250.jpeg?alt=media&token=c7b64ff4-db32-4e39-9200-0134173b222f",
    name:"Microfiber Bathroom Mat (Grey, Medium)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:250,
    description:{
    size:"60 X 100 cm ",
    color:"Grey",
    package:"1"
    },
    model_number:"BA113T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FMicrofiber%20Bathroom%20Mat%20%20(Multicolor%2C%20Free)(40-70)-680.jpeg?alt=media&token=bb10b78f-2c04-4281-8958-4473e6ab84f8",
    name:"Microfiber Bathroom Mat (Multicolor, Free)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:8,
    price:680,
    description:{
    size:"40 X 70 cm ",
    color:"Multicolor",
    package:"4"
    },
    model_number:"BA114T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FMicrofiber%20Bathroom%20Mat%20%20(Multicolor%2C%20Medium)(60-80)-350.jpeg?alt=media&token=8def5db2-3f86-4c6b-be3c-621d8ee559e5",
    name:"Microfiber Bathroom Mat (Multicolor, Medium)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:15,
    price:350,
    description:{
    size:"60 X 80 cm ",
    color:"Multicolor",
    package:"2"
    },
    model_number:"BA115T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FPolyester%20Bathroom%20Mat%20%20(Black%2C%20Medium)(40-60)-300.jpeg?alt=media&token=c8ddbc6a-b420-47a0-8a89-1a8a6a75efe6",
    name:"Polyester Bathroom Mat (Black, Medium)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:14,
    price:300,
    description:{
    size:"40 X 60 cm ",
    color:"Black",
    package:"2"
    },
    model_number:"BA116T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FPolyester%20Bathroom%20Mat%20%20(Brown%2C%20Beige%2C%20Free)(40-60)-300.jpeg?alt=media&token=92376351-b91b-4329-8278-335c5fbf32e0",
    name:"Polyester Bathroom Mat (Brown, Beige)",
    rating:3,
    wishlist:false,
    cart:false,
    stock:true,
    offer:10,
    price:300,
    description:{
    size:"40 X 60 cm ",
    color:"Brown, Beige",
    package:"2"
    },
    model_number:"BA117T14"
    },
    {
    img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FPolyester%20Bathroom%20Mat%20%20(Turq%2C%20Green%2C%20Medium)(60-100)-300.jpeg?alt=media&token=f470e7a5-b080-4a9e-9ccd-7e2a3c515f97",
    name:"Polyester Bathroom Mat (Turq, Green, Medium)",
    rating:5,
    wishlist:false,
    cart:false,
    stock:true,
    offer:11,
    price:300,
    description:{
    size:"60 X 100 cm ",
    color:"Turq, Green,",
    package:"2"
    },
    model_number:"BA118T14"
    },
    ]

    var objbmat={type:"Bathmat",category:"Bathroom",    customer_review:[]
}

    var resbmat=bathroom_mat.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objbmat,...soldoutobj,...discountobj}
    })

const s_curtain=[
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20(Polyvinyl%20Chloride)%20Shower%20Curtain%20Single%20Curtain%20%20(Floral%2C%20Multicolor)(121-213)-450.jpeg?alt=media&token=d52209cc-78b1-475e-96cd-084ffe923edd",
        name:"PVC (Polyvinyl Chloride) Shower Curtain Single Curtain (Floral, Multicolor)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:450,
        description:{
        size:"121 X 213 cm ",
        color:"Multicolor",
        package:"1"
        },
        model_number:"SH101N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20(Polyvinyl%20Chloride)%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Blue)(137-213)-350.jpeg?alt=media&token=35f13fec-0598-4b19-86ab-d4078c864138",
        name:"PVC (Polyvinyl Chloride) Shower Curtain Single Curtain (Printed, Blue)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:15,
        price:350,
        description:{
        size:"137 X 213 cm ",
        color:"Blue",
        package:"1"
        },
        model_number:"SH102N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20(Pack%20Of%202)%20%20(Self%20Design%2C%20Royal%20Blue)(137-213)-280.jpeg?alt=media&token=a8dc62ba-f734-48d9-a9c9-d7c48e1e7428",
        name:"PVC Shower Curtain (Pack Of 2) (Self Design, Royal Blue)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:12,
        price:280,
        description:{
        size:"137 X 213 cm ",
        color:"Royal Blue",
        package:"2"
        },
        model_number:"SH103N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Floral%2C%20Blue)(137-213)-250.jpeg?alt=media&token=6e0bd0ab-4235-44e6-be15-448786fa847e",
        name:"PVC Shower Curtain Single Curtain (Floral, Blue)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:7,
        price:250,
        description:{
        size:"137 X 213 cm ",
        color:"Blue",
        package:"1"
        },
        model_number:"SH104N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Black)(144-220cm)-250.jpeg?alt=media&token=f0a8af1f-42c9-4017-9b7f-309f1887d736",
        name:"PVC Shower Curtain Single Curtain (Printed, Black)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:250,
        description:{
        size:"144 X 220cm",
        color:"Black",
        package:"1"
        },
        model_number:"SH105N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Grey)(180-180)-330.jpeg?alt=media&token=92464b9c-74b2-4a8c-853a-c6b54f105845",
        name:"PVC Shower Curtain Single Curtain (Printed, Grey)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:330,
        description:{
        size:"180 X 180 cm ",
        color:"Grey",
        package:"1"
        },
        model_number:"SH106N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Red)(144-220)-250.jpeg?alt=media&token=59af5c69-e3ab-465d-b538-14ef8c186421",
        name:"PVC Shower Curtain Single Curtain (Printed, Red)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:15,
        price:250,
        description:{
        size:"144 X 220 cm ",
        color:"Red",
        package:"1"
        },
        model_number:"SH107N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Seashell-Star)(150-180)-500.jpeg?alt=media&token=ae54d1bd-28bc-40e1-9967-cda342e6bac8",
        name:"PVC Shower Curtain Single Curtain (Printed, Seashell-Star)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:500,
        description:{
        size:"150 X 180 cm ",
        color:"Multicolor",
        package:"1"
        },
        model_number:"SH108N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Wave-Yellow)(150-150)-500.jpeg?alt=media&token=ada8563f-31c1-428b-920f-df4f0fdfd08c",
        name:"PVC Shower Curtain Single Curtain (Printed, Wave-Yellow)",
        rating:4,
        wishlist:false,
        cart:false,
        stock:true,
        offer:6,
        price:500,
        description:{
        size:"150 X 150 cm ",
        color:"Wave-Yellow",
        package:"1"
        },
        model_number:"SH109N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20Shower%20Curtain%20Single%20Curtain%20%20(Solid%2C%20Neo%20Green)(50-172)-750.jpeg?alt=media&token=455a2b74-0009-4ce1-b95e-5ce98e121f39",
        name:"PVC Shower Curtain Single Curtain (Solid, Neo Green)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:750,
        description:{
        size:"50 X 172 cm ",
        color:"Neo Green",
        package:"1"
        },
        model_number:"SH110N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPolyester%20Shower%20Curtain%20(Pack%20Of%203)%20%20(Solid%2C%20Multicolor)(122-275)-850.jpeg?alt=media&token=086f1cc3-606e-4a6f-934c-a77f647eff6b",
        name:"Polyester Shower Curtain (Pack Of 3) (Solid, Multicolor)",
        rating:5,
        wishlist:false,
        cart:false,
        stock:true,
        offer:12,
        price:850,
        description:{
        size:"122 X 275 cm ",
        color:"Multicolor",
        package:"3"
        },
        model_number:"SH111N15"
        },
        {
        img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPolyester%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Blue)(180-200)-480.jpeg?alt=media&token=c991c37d-7ed6-4b3d-82c5-deeec8ca9959",
        name:"Polyester Shower Curtain Single Curtain (Printed, Blue)",
        rating:3,
        wishlist:false,
        cart:false,
        stock:true,
        offer:10,
        price:480,
        description:{
        size:"180 X 200 cm ",
        color:"Blue",
        package:"1"
        },
        model_number:"SH112N15"
        }
        ]

        var objscurtain={type:"Showercurtain",category:"Bathroom",    customer_review:[]
    }

    var resscurtain=s_curtain.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objscurtain,...soldoutobj,...discountobj}
    })

 const bath_towel=[
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F200gsm(30-60)-287.jpeg?alt=media&token=83149e61-35a0-44f8-ab8f-ae39e9ca64d2",
            name:"200gsm Multicolor Bath Towel Pack of 2",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:287,
            description:{
            size:"30 X 60 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA101L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F200gsm(30-60)-300.jpeg?alt=media&token=de86cb05-7873-4637-bcfa-490752bddeda",
            name:"200gsm Multicolor Bath Towel Pack of 2",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:300,
            description:{
            size:"30 X 60 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA102L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F250gsm(30-60)-200.jpeg?alt=media&token=b7b37c91-5f4c-436e-821b-18f9d1772bc7",
            name:"250gsm Green Bath Towel Pack of 1",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:200,
            description:{
            size:"30 X 60 cm",
            color:"Green",
            package:"1"
            },
            model_number:"BA103L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F280gsm(28-55)-300.jpeg?alt=media&token=ea2411f8-e427-45cf-ad0d-e60376144451",
            name:"280gsm Multicolor Bath Towel Pack of 2",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:300,
            description:{
            size:"28 X 55 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA104L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F300gsm(14-21)-279.jpeg?alt=media&token=b609d32c-ad41-47f4-b37a-299c73f89562",
            name:"300gsm Multicolor Bath Towel Pack of 6",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:8,
            price:279,
            description:{
            size:"14 X 21 cm",
            color:"Multicolor",
            package:"6"
            },
            model_number:"BA105L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F300gsm(16-24)-150.jpeg?alt=media&token=ab48e5f9-b9c3-42d3-85f7-1a99c6dac5c3",
            name:"300gsm Multicolor Bath Towel Pack of 4",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:150,
            description:{
            size:"16 X 24 cm",
            color:"Multicolor",
            package:"4"
            },
            model_number:"BA106L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F350gsm(24-48)-300.jpeg?alt=media&token=e310416f-63e0-48b4-8f5f-51bca4b977ec",
            name:"350gsm Multicolor Bath Towel Pack of 2",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:300,
            description:{
            size:"24 X 48 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA107L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F375gsm(14-21)-240.jpeg?alt=media&token=019f3097-9ffa-4814-bdf6-bb5ac2c89787",
            name:"375gsm Multicolor Bath Towel Pack of 4",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:240,
            description:{
            size:"14 X 21 cm",
            color:"Multicolor",
            package:"4"
            },
            model_number:"BA108L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F400gsm(31-66)-340.jpeg?alt=media&token=de8953bc-efaa-4c69-ad09-0ac284f40ff3",
            name:"400gsm Multicolor Bath Towel Pack of 3",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:15,
            price:340,
            description:{
            size:"31 X 66 cm",
            color:"Multicolor",
            package:"3"
            },
            model_number:"BA109L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F450gsm(30-60)-420.jpeg?alt=media&token=bed54883-813e-4a4e-b181-139929f9bdd5",
            name:"450gsm Multicolor Bath Towel Pack of 3",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:6,
            price:420,
            description:{
            size:"30 X 60 cm",
            color:"Multicolor",
            package:"3"
            },
            model_number:"BA110L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F450gsm(33-72)-360.jpeg?alt=media&token=38a93afc-2eae-40e4-a96e-2021ab461f66",
            name:"450gsm Multicolor Bath Towel Pack of 3",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:360,
            description:{
            size:"33 X 72 cm",
            color:"Multicolor",
            package:"3"
            },
            model_number:"BA111L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F455gsm(27-54)-280.jpeg?alt=media&token=aae8fec8-7624-4e82-b372-cea11d3d997d",
            name:"455gsm White Bath Towel Pack of 1",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:280,
            description:{
            size:"27 X 54 cm",
            color:"White",
            package:"1"
            },
            model_number:"BA112L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F480gsm(27-55)-700.jpeg?alt=media&token=6189649f-45ed-4a84-84c7-398a67c3ea9e",
            name:"480gsm Multicolor Bath Towel Pack of 2",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:9,
            price:700,
            description:{
            size:"27 X 55 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA113L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F490gsm(16-24)-500.jpeg?alt=media&token=29880ae6-216f-4c7d-90e6-6130fe549728",
            name:"490gsm Blue Bath Towel Pack of 3",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:6,
            price:500,
            description:{
            size:"16 X 24 cm",
            color:"Blue",
            package:"3"
            },
            model_number:"BA114L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F490gsm(16-24)-520.jpeg?alt=media&token=29c77f41-b7e8-40ba-aa87-50e20dca61d7",
            name:"490gsm Grey Bath Towel Pack of 3",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:14,
            price:520,
            description:{
            size:"16 X 24 cm",
            color:"Grey",
            package:"3"
            },
            model_number:"BA115L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F500gsm(27-54)-500.jpeg?alt=media&token=72d35d57-388f-4343-89b8-2fd1bffeb974",
            name:"500gsm Blue Bath Towel Pack of 2",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:11,
            price:500,
            description:{
            size:"27 X 54 cm",
            color:"Blue",
            package:"2"
            },
            model_number:"BA116L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F530gsm(30-60%20inch)-350.jpeg?alt=media&token=1450a273-2357-4198-a716-6a0b2eadae19",
            name:"530gsm Multicolor Bath Towel Pack of 2",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:350,
            description:{
            size:"30 X 60 inch cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA117L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F550gsm(16-24)-530.jpeg?alt=media&token=bce6c363-4c94-47db-b9aa-765a5122d10b",
            name:"550gsm Multicolor Bath Towel Pack of 6",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:11,
            price:530,
            description:{
            size:"16 X 24 cm",
            color:"Multicolor",
            package:"6"
            },
            model_number:"BA118L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F550gsm(23-47)-800.jpeg?alt=media&token=b8472753-330c-49ce-8210-4daf35e7bd58",
            name:"550gsm Multicolor Bath Towel Pack of 2",
            rating:3,
            wishlist:false,
            cart:false,
            stock:true,
            offer:12,
            price:800,
            description:{
            size:"23 X 47 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA119L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F550gsm(30-60)-650.jpeg?alt=media&token=cca9405d-cd75-4264-a560-40c01a5737fe",
            name:"550gsm Multicolor Bath Towel Pack of 2",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:10,
            price:650,
            description:{
            size:"30 X 60 cm",
            color:"Multicolor",
            package:"2"
            },
            model_number:"BA120L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F600gsm(30-60)-350.jpeg?alt=media&token=201e0cd8-f8ca-4e18-b713-133d81a12436",
            name:"600gsm Pink Bath Towel Pack of 1",
            rating:4,
            wishlist:false,
            cart:false,
            stock:true,
            offer:7,
            price:350,
            description:{
            size:"30 X 60 cm",
            color:"Pink",
            package:"1"
            },
            model_number:"BA121L16"
            },
            {
            img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F650gsm(36-72)-230.jpeg?alt=media&token=310df3ba-fdbe-404a-ae9a-c31389f54e09",
            name:"650gsm Blue Bath Towel Pack of 1",
            rating:5,
            wishlist:false,
            cart:false,
            stock:true,
            offer:5,
            price:230,
            description:{
            size:"36 X 72 cm",
            color:"Blue",
            package:"1"
            },
            model_number:"BA122L16"
            }
            ]

            var objbtowel={type:"Bathtowel",category:"Bathroom",    customer_review:[]
        }

    var resbtowel=bath_towel.map((el)=>{
        var soldoutobj={soldout:Math.floor((500-50) * Math.random()+50)}
        var x=(el.price/100)*(el.offer)
        var discount=el.price-x
        
        var discountobj={discountprice:Math.ceil(discount)}
        return arr={...el,...objbtowel,...soldoutobj,...discountobj}
    })

Bathroom.insertMany({
    products:{
        Bathmat:resbmat,
    Showercurtain:resscurtain,
    Bathtowel:resbtowel
    }
},()=>{
    console.log("bathroom inserted into Atlas !")
})

