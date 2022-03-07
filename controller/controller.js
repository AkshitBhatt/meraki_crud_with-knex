const knex=require("../config/db")


exports.getAllData=(req,res)=>{
    knex('saralapiData').then(data=>{
        res.send(data)
        console.log(data);
    }).catch(err=>{
        res.send(err.message)
    })
}

exports.getDataBYid=(req,res)=>{
    knex('saralapiData').where({id:req.params.id}).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err.message)
    })
}

exports.deleteById=(req,res)=>{
    knex('saralapiData').where({id:req.params.id}).del().then(()=>{
        res.send('data deleted')
    }).catch(err=>{
        res.send(err.message)
    })
}

exports.updateById=(req,res)=>{
    // const id = req.params.id
    // res.send('checking the data sending process.')
    knex('saralapiData').update(req.body).where({id:req.params.id}).then(()=>{
        res.send('data updated')
        console.log('data updated');
    }).catch(err=>{
        res.send(err.message)
    })
}

exports.insertData=(req,res)=>{
    knex('saralapiData').insert(req.body).then(()=>{
        res.send('data inserted')
    }).catch(err=>{
        res.send(err.message)
    })
}