const mongoose = require("mongoose")

const connect = async()=>{
   await mongoose.connect("mongodb://localhost:27017/Hemang")
   console.log("Database connected !!!")
}


module.exports = connect