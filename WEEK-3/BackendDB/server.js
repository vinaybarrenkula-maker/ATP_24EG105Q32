import exp from 'express'
import { connect } from "mongoose";
import { userApp } from "./APIS/userApi.js"
import { productApp } from "./APIS/productApi.js"
import { config } from 'dotenv';

config()   // proccess.env.PORT
           // process.env.DB_URL
const app = exp();
const port = 4000//get server from hostic server 
app.use(exp.json())
app.use("/user-api",userApp)
app.use("/product-api",productApp)
//app.use("/user-api",userApp)===>middlewares to call them by server 

app.listen(port, () => console.log(`server listening to part ${port}...`))
async function connectDB() {
    try {
        await connect(process.env.DB_URL)// use mongooes atlas url for cloud==> process.env.DB_URL

        console.log("DB Connection Success")
        //start server
        app.listen(4000, () => console.log("server on port 4000...."))
    }
    catch (err) {
        console.log("Error in DB connection:", err)
    }
}

connectDB()
app.use((err, req, res, next) => {
    res.json({ message: "error is occured ", Error: err.message })
})
