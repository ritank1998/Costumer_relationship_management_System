import mongoose from "mongoose"


const db1 = mongoose.createConnection("mongodb://127.0.0.1:27017/Visitors")
const db2 = mongoose.createConnection("mongodb://127.0.0.1:27017/Clients")


export const walkInVisitors = db1.model("walkInVisitors", mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Number: {
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
        type: Date,
        required: true
    },
    Next_Date_Of_Contact: {
        type: Date,
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
    customer_Id: {
        type: String,
        require: true
    },
    Number: {
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
       require: true
      },
    InvoiceId: {
        type: String,
        require: true
    },
    Service:{
        type: String,
        require: true
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
    reception: {
        type: String,
        require: true
    }
}))