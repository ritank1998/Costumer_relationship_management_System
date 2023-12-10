import express from "express"
import { users , clients } from "../routes/userCreation.js"
const router = express.Router()

router.post("/createuser" , users)
router.post("/newclients" , clients)


export default router