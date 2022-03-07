const express=require('express')
const router=express.Router()
const fs=require('fs')
const knex=require('../config/db')
const {getAllData,getDataBYid,deleteById,updateById,insertData}=require('../controller/controller')


router.post("/data",(req,res)=>{
    fs.readFile('./staticFiles/saralapi.json','utf-8',(err,data)=>{
        if(err){
            console.log('err while reading the file',err);
        }else{
            var inc = 0;
            for(let element of JSON.parse(data)) {
                knex('saralapiData').insert(element).then(()=>{
                    console.log('data inserted');
                }).catch(err=>{
                    inc = err.message;  
                })
                if(inc!==0) {
                    console.log(inc);
                    return res.send(inc)
                }
            };
            res.send('Data Inserted. ')
        }
        // res.send('all done')
    })
})

router.get("/data",getAllData)

router.get('/data/:id',getDataBYid)

router.put('/delete/:id',deleteById)

router.put('/update/:id',updateById)

router.post('/insertdata',insertData)

module.exports=router