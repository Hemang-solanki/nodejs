const express = require("express");
const connection = require("./Config/db");
const UserRouter = require("./Routes/UserRoutes");
require("dotenv").config()
const app = express();
const cors = require ("cors")

app.use(express.json());
app.use(cors())
app.use("/", UserRouter)


app.listen(process.env.PORT,()=>{
    connection()
    console.log(`Server is started at port ${process.env.PORT}`)
})