const mongoose = require("mongoose");
const { addAdminRecord } = require("./SeedAdmin");

const connectDb=async ()=>{
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    )
    .then(()=>{
        console.log('connected To database')
        addAdminRecord();
    })
    .catch((err)=>console.error(err));


}

module.exports={connectDb}