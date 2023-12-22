import express from "express"
import { users , clients , signup, getClients ,businessDetails } from "../routes/userCreation.js"
const router = express.Router()

router.post("/createuser" , users)
router.post("/newclients" , clients)
router.post("/signup" , signup )
router.get("/clients" , getClients)
router.post("/business" , businessDetails)

export default router