import express from "express"
import {inactiveclientsApi ,users , clients , signup, getClients ,businessDetails ,getVisitor , searchClient , searchVisitor} from "../routes/userCreation.js"
import { sendEmail } from "../routes/features.js"
const router = express.Router()

router.post("/createuser" , users)
router.post("/newclients" , clients)
router.post("/signup" , signup )
router.get("/clients" , getClients)//to display the clients
router.post("/business" , businessDetails) //to login the crm by a business
router.get("/visitor" , getVisitor)//to get the visitors 
router.get("/seacrhclient" , searchClient) //to make the search query for the client
router.get("/searchvisitor" , searchVisitor) //to make the search query for the Visitors from the DB
router.post("/sendmail" , sendEmail)//to activate the node mailer.
router.get("/inactiveclients" , inactiveclientsApi)//to get the clients from the database
export default router