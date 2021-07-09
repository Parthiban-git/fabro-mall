const express=require('express')
require('./database/mongoose')
const Home=require('./schema/home')

const app=express()

const cors=require('cors')

const port=process.env.PORT || 3000

app.use(express.json())
app.use(cors())


// bedroom
const Bedsheet=require('./schema/bedsheet')
const Quilt=require('./schema/quilt')
const Pillowcover=require('./schema/pillowcover')
const Comforterset=require('./schema/comforterset')

//living room
const Sofacover=require('./schema/sofacover')
const Windowcurtain=require('./schema/windowcurtain')
const Rugs=require('./schema/rugs')

//kitchen
const Kitchentowel=require('./schema/kitchentowel')
const Apron=require('./schema/apron')

// table linen
const Placemat=require('./schema/placemat')
const Tablerunner=require('./schema/table-runner')
const Tableclothe=require('./schema/table-clothe')
const Napkin=require('./schema/napkin')

// bathroom
const Bathmat=require('./schema/bathmat')
const Showercurtain=require('./schema/showercurtain')
const Bathtowel=require('./schema/bathtowel')


       Bedsheet.findOne({name:"bedsheet"}).then((bedsheet)=>{
        bedsheet=bedsheet.products
         bedsheet=bedsheet.slice(5,7)
        

        Quilt.findOne({name:"quilt"}).then((quilt)=>{
            
                quilt=quilt.products
                 quilt=quilt.slice(3,4)

        Comforterset.findOne({name:"comforterset"}).then((comforter)=>{
        
                comforter=comforter.products
                comforter=comforter.slice(6,8)
               
        
            Pillowcover.findOne({name:"pillowcover"}).then((pillowcover)=>{

                pillowcover=pillowcover.products
                pillowcover=pillowcover.slice(1,2)

                   const bs1= bedsheet[0]
                   const bs2=bedsheet[1]
                   const qu1=quilt[0]
                   const pc1=pillowcover[0]
                   const cf1=comforter[0]
                   const cf2=comforter[1]

                const bedroom=[bs1,bs2,qu1,pc1,cf1,cf2]

             Sofacover.findOne({name:"sofacover"}).then((sofacover)=>{
            
                sofacover=sofacover.products
                sofacover=sofacover.slice(6,8)

               Windowcurtain.findOne({name:"windowcurtain"}).then((windowcurtain)=>{

                    windowcurtain=windowcurtain.products
                    windowcurtain=windowcurtain.slice(7,9)

                Rugs.findOne({name:"rugs"}).then((rugs)=>{
                       rugs=rugs.products
                       rugs=rugs.slice(2,4)

                        const sf1= sofacover[0]
                        const sf2=sofacover[1]
                        const wc1=windowcurtain[0]
                        const wc2=windowcurtain[1]
                        const ru1=rugs[0]
                        const ru2=rugs[1]

                    const livingroom=[sf1,sf2,wc1,wc2,ru1,ru2]
            
                Kitchentowel.findOne({name:"kitchentowel"}).then((kitchentowel)=>{
                            kitchentowel=kitchentowel.products
                          kitchentowel=kitchentowel.slice(5,8)

                Apron.findOne({name:"apron"}).then((apron)=>{
                        apron=apron.products
                        apron=apron.slice(5,8)

                            const kt1= kitchentowel[0]
                            const kt2=kitchentowel[1]
                            const kt3=kitchentowel[2]
                            const ap1=apron[0]
                            const ap2=apron[1]
                            const ap3=apron[2]

                       const kitchen=[kt1,kt2,kt3,ap1,ap2,ap3]

                Placemat.findOne({name:"placemat"}).then((placemat)=>{

                       placemat=placemat.products
                       placemat=placemat.slice(5,7)

                Tableclothe.findOne({name:"tablecloth"}).then((tableclothe)=>{

                        tableclothe=tableclothe.products
                        tableclothe=tableclothe.slice(5,7)

                        Tablerunner.findOne({name:"tablerunner"}).then((tablerunner)=>{

                        tablerunner=tablerunner.products
                        tablerunner=tablerunner.slice(5,6)

                            Napkin.findOne({name:"napkin"}).then((napkin)=>{

                        napkin=napkin.products
                        napkin=napkin.slice(5,6)

                            const pl1= placemat[0]
                            const pl2=placemat[1]
                            const tr=tablerunner[0]
                            const tc1=tableclothe[0]
                            const tc2=tableclothe[1]
                            const np=napkin[0]

                          const tablelinen=[pl1,pl2,tr,tc1,tc2,np]

                Bathmat.findOne({name:"bathmat"}).then((bathmat)=>{

                        bathmat=bathmat.products
                        bathmat=bathmat.slice(6,8)

                    Showercurtain.findOne({name:"showercurtain"}).then((showercurtain)=>{

                        showercurtain=showercurtain.products
                        showercurtain=showercurtain.slice(6,8)

                        Bathtowel.findOne({name:"bathtowel"}).then((bathtowel)=>{

                            bathtowel=bathtowel.products
                            bathtowel=bathtowel.slice(6,8)

                            const bm1= bathmat[0]
                            const bm2=bathmat[1]
                            const sc1=showercurtain[0]
                            const sc2=showercurtain[1]
                            const bt1=bathtowel[0]
                            const bt2=bathtowel[1]

                            const bathroom=[bm1,bm2,sc1,sc2,bt1,bt2]

                 const arr=[
                                {categoryname:"Bedroom",categoryvalue:"Bedroom",typename:"Bedsheet",typevalue:"Bedsheet",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bedsheet%2F104%20TC%20Cotton%20Double%20Floral%20Bedsheet(235-220cm)-399.jpeg?alt=media&token=5fe94faa-e093-4fdc-ae5e-bf28a6398025"},
                                {categoryname:"Bedroom",categoryvalue:"Bedroom",typename:"Quilt",typevalue:"Quilt",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/quilt%2FCartoon%20Single%20Dohar%20%20(Microfiber%2C%20Blue%20Angry%20Birds%2C%20Blue%20Angry%20Birds)(240-220cm)-399.jpeg?alt=media&token=f29688a5-36d7-4398-9477-23fcb550613f"},
                                {categoryname:"Bedroom",categoryvalue:"Bedroom",typename:"Pillow cover",typevalue:"Pillowcover",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/pillow_cover%2F3D%20Printed%20Pillows%20Cover%20%20(Pack%20of%204%2C%2064%20cm-40%20cm%2C%20Red)-220.jpeg?alt=media&token=acddce19-ef5c-4b40-be4e-a72ba7c51db3"},
                                {categoryname:"Bedroom",categoryvalue:"Bedroom",typename:"Comforter set",typevalue:"Comforterset",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FCartoon%20Single%20Comforter%20%20(Cotton%2C%20Multicolor)-(252-242)-499.jpeg?alt=media&token=492b051e-a2fb-41c9-8f3a-50c26e847e98"},
                    
                                {categoryname:"Livingroom",categoryvalue:"Livingroom",typename:"Sofa cover",typevalue:"Sofacover",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/sofa_cover%2F2%20Pieces%20Multi%20Sofa%20Slip%20Cover%20for%20Living%20Room%20-%203%20Seater%20Sofa%20Covers(70-29inches)-300.jpg?alt=media&token=88547d3a-d7f0-41b0-97f1-249f6caaed35"},
                                {categoryname:"Livingroom",categoryvalue:"Livingroom",typename:"Rugs",typevalue:"Rugs",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBeige%20Cotton%20Runner%20%20(40%20cm%20X%20120%20cm)-560.jpeg?alt=media&token=94bfa601-77b1-4c47-a494-73b2d54a8e67"},
                                {categoryname:"Livingroom",categoryvalue:"Livingroom",typename:"Window curtain",typevalue:"Windowcurtain",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/window_curtain%2F153%20cm%20(5%20ft)%20Cotton%20Window%20Curtain%20(Pack%20Of%202)%20%20(Abstract%2C%20Red)(120-153)-600.jpeg?alt=media&token=9ff9c5ef-e07d-4296-88b2-93a44cab5c20"},
                    
                                {categoryname:"Kitchen",categoryvalue:"Kitchen",typename:"Kitchen towel",typevalue:"Kitchentowel",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/kitchen_towel%2FCotton%20Colors%20Color%20Printed%206%20Multicolor%20Napkins%20%20(6%20Sheets)-380.jpeg?alt=media&token=014f3319-5e17-4cd6-868f-da01f350a78c"},
                                {categoryname:"Kitchen",categoryvalue:"Kitchen",typename:"Apron",typevalue:"Apron",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FBlended%20Chef's%20Apron%20-%20XL%20%20(Blue%2C%20Pack%20of%202)(25-31)-280.jpeg?alt=media&token=a0d17916-cdb4-4ff2-a7ee-bd3ff60e2b22"},
                                
                                {categoryname:"Table linen",categoryvalue:"Tablelinen",typename:"Placemat",typevalue:"Placemat",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/placemat%2FRectangular%20Pack%20of%2012%20Table%20Placemat%20%20(Blue%2C%20PVC%2C%20Polyester)(10-38cm)-999.jpeg?alt=media&token=a1d3bed4-a32a-4b57-a9a9-f702d03c9402"},
                                {categoryname:"Table linen",categoryvalue:"Tablelinen",typename:"Table cloth",typevalue:"Tablecloth",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_clothe%2F(130-199cm)Embroidered%204%20Seater%20Table%20Clothe%20(Brown%2C%20Cotton)-210.jpeg?alt=media&token=7c29a970-3224-4ebc-b2ab-bf1af96dfa2a"},
                                {categoryname:"Table linen",categoryvalue:"Tablelinen",typename:"Table runner",typevalue:"Tablerunner",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/table_runner%2F140%20cm%20-32.3)Table%20Runner%20-designed%20round%20(Cotton)-699.jpeg?alt=media&token=b4525ef6-468b-4c93-8696-e3424dd3deb0"},
                                {categoryname:"Table linen",categoryvalue:"Tablelinen",typename:"Napkin",typevalue:"Napkin",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2F100%25%20cotton%20Hand%20towels%2CKitchen%20Towels%20soft%20Napkin%20Set%20of%2012%20Multicolor%20Napkins(12-18inch)-360.jpeg?alt=media&token=403fd4c8-135f-4c23-addd-5d9449d26616"},
                    
                                {categoryname:"Bathroom",categoryvalue:"Bathroom",typename:"Bath mat",typevalue:"Bathmat",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_mats%2FCotton%20Bathroom%20Mat%20%20(Grey%2C%20Small)(60-60)-300.jpeg?alt=media&token=4bb483f5-5082-4282-bf81-d97e8cd2336a"},
                                {categoryname:"Bathroom",categoryvalue:"Bathroom",typename:"Shower curtain",typevalue:"Showercurtain",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20(Polyvinyl%20Chloride)%20Shower%20Curtain%20Single%20Curtain%20%20(Floral%2C%20Multicolor)(121-213)-450.jpeg?alt=media&token=d52209cc-78b1-475e-96cd-084ffe923edd"},
                                {categoryname:"Bathroom",categoryvalue:"Bathroom",typename:"Bath towel",typevalue:"Bathtowel",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/bath_towel%2F250gsm(30-60)-200.jpeg?alt=media&token=b7b37c91-5f4c-436e-821b-18f9d1772bc7"},
                               
                                {categoryname:"Bedroom",categoryvalue:"Bedroom",typename:"Bedroom products",typevalue:"all", img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/comforter_set%2FCartoon%20Single%20Comforter%20%20(Cotton%2C%20Multicolor)-(252-242)-499.jpeg?alt=media&token=492b051e-a2fb-41c9-8f3a-50c26e847e98"},
                                {categoryname:"Livingroom",categoryvalue:"Livingroom",typename:"Livingroom products",typevalue:"all",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/rugs%2FBeige%20Cotton%20Runner%20%20(40%20cm%20X%20120%20cm)-560.jpeg?alt=media&token=94bfa601-77b1-4c47-a494-73b2d54a8e67"},
                                {categoryname:"Kitchen",categoryvalue:"Kitchen",typename:"Kitchen products",typevalue:"all",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/apron%2FBlended%20Chef's%20Apron%20-%20XL%20%20(Blue%2C%20Pack%20of%202)(25-31)-280.jpeg?alt=media&token=a0d17916-cdb4-4ff2-a7ee-bd3ff60e2b22"},
                                {categoryname:"Table linen",categoryvalue:"Tablelinen",typename:"Table linen products",typevalue:"all",img:"https://firebasestorage.googleapis.com/v0/b/fabromall.appspot.com/o/napkin%2F1218%20Multicolor%20Napkins%20-(12-18inch)-180.jpeg?alt=media&token=e61919f0-0cf0-4652-be8d-1a0f89a5a557"},
                                {categoryname:"Bathroom",categoryvalue:"Bathroom",typename:"Bathroom products",typevalue:"all",img:"https://firebasestorage.googleapis.com/v0/b/fabromal-gdn.appspot.com/o/shower_curtain%2FPVC%20(Polyvinyl%20Chloride)%20Shower%20Curtain%20Single%20Curtain%20%20(Printed%2C%20Blue)(137-213)-350.jpeg?alt=media&token=35f13fec-0598-4b19-86ab-d4078c864138"}
                    
                          ]

                            Home.insertMany({
                                home:{"bedroom":bedroom,"livingroom":livingroom,"kitchen":kitchen,"table linen":tablelinen,"bathroom":bathroom},
                                suggestions:arr
                            },()=>{
                                console.log("Home products uploaded")
                            })

                        })
                    })
                })

                            })
                        })
                    })
                })


                })
            })
         
                })
            })
        })
     
        })


        })            

        })
})

    app.listen(port,()=>{
        console.log("port running")
    })