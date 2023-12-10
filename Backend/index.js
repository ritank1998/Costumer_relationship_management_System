import express from "express"
import cors from "cors"
import circularJson from "circular-json"
import "./mongodb/conn.js"
import "./mongodb/models/schema.js"
import crmNotif from "./router/router.js"
const app = express()
const port = 2102

app.use(cors())
app.use(express.json());


app.get('/' , (req,res)=>{
    res.status(200).json(circularJson.stringify("This is working fine"))
})




app.use("/crm" , crmNotif)









app.listen(port, ()=>{
    console.log("The App is working on the port " , port)
})