import mongoose from "mongoose"


const db1 = mongoose.createConnection("mongodb://127.0.0.1:27017/Costumer_Relationship_System")
const db2 = mongoose.createConnection("mongodb://127.0.0.1:27017/Costumer_Relationship_System")
const db3 = mongoose.createConnection("mongodb://127.0.0.1:27017/Costumer_Relationship_System")

export const walkInVisitors = db1.model("walkInVisitors", mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        requires: true
    },
    email: {
        type: String,
        required: true
    },
    reception: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    Next_Date_Of_Contact: {
        type: String,
    },
    Enquiry_Type: {
        type: String,
        required: true
    }
}))

export const userDetails = db2.model("newClients", mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        require: true
    },
    customer_Id: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    Address: {
     type: String,
     require: true
    },
    Date_Of_Billing: {
      type: String,
      require: true        
    },
    End_Date: {
      type: String,
      require: true
     },
    payment_Intent: {
       type: String,
      },
    InvoiceId: {
        type: String,
    },
    Service:{
        type: String,
        require: true
    },
    Emergency_Name:{
        type: String,
        require:true
   },
    Emergency_Contact:{
         type: Number
    },
    Emergency_Email:{
         type: String
    },
    Emergency_Address: {
        type: String
    },
    Emergency_Relation:{
       type: String,
       require: true
    },
    reception: {
        type: String,
        require: true
    },
    enrolled:{
        type : String,
        require: true
    }
}))


export const newBusiness = db3.model("newBusiness" , mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type :String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    Business_Type:{
        type: String,
        required: true
    }
}))