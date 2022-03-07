require('dotenv').config()
const knex=require('knex')({
    client:"mysql",
    connection:{
        user:process.env.user,
        host:process.env.host,
        password:process.env.password,
        database:process.env.database,
        multipleStatements:true
    }
})

knex.schema.createTable('saralapiData', t=>{
    t.integer('id')
    t.string('name')
    t.string('logo')
    t.string('notes')
    t.string('days_to_complete')
    t.string('short_description')
    t.string('type')
    t.string('course_type')
    t.string('lang_available')
}).then(()=>{
    console.log('connected to the database');
}).catch(err=>{
    console.log(err.message);
})


module.exports=knex