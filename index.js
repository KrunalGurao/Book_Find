const express= require("express")
const cors= require("cors")
require("dotenv").config()
const {connection}=require("./db")
const {bookRouter} = require("./routes/book")


const app= express()
app.use(express.json())
app.use(cors())


app.use("/book" , bookRouter)


app.listen(process.env.port, async()=>{

    try {
        await connection
        console.log("*************CONNECTED TO SERVER*************")
    } catch (err) {
        console.log("Server not connected")
    }
})