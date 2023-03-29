const express=require("express")
const { connection } = require("./db")
const { productRouter } = require("./routes/products.routes")
const { userRouter } = require("./routes/user.routes")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log({msg:'Connected to healthDB'})
    } catch (err) {
        console.log({msg:err.message})
    }
    console.log(`App is running at ${process.env.port}`)
})