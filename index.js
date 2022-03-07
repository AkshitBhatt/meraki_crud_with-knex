const axios=require('axios')
const fs=require('fs')


axios.get("http://api.navgurukul.org/courses").then(apidata=>{
    const data=apidata.data
    // console.log(data);
    fs.writeFileSync("./staticFiles/saralapi.json",JSON.stringify(data,null,4))
    console.log("done");
})