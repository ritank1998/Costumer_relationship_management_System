import mongoose from "mongoose";
import express from "express"
import { walkInVisitors , userDetails } from "../mongodb/models/schema.js";
import CircularJSON from "circular-json";
import { Novu } from "@novu/node";
const NOVU_KEY = '5a81b3ea5f716a12e4224205bbf4dcd1'

//when user arrives in the work station
export const users = async(req,res)=>{
    const novu = new Novu(NOVU_KEY)
    try{
        const { Name,Number,email,reception,Date,Next_Date_Of_Contact,Enquiry_Type} = req.body;
        
            const myVisitor = walkInVisitors({
                Name,
                Number,
                email,
                reception,
                Date,
                Next_Date_Of_Contact,
                Enquiry_Type
            })
            const newUser = await myVisitor.save()
            const notifEmail = novu.trigger('crm-visitorcreated', {
                to: {
                  subscriberId : `${email+"_"+Name}`,
                  email
                },
                payload: {}
              });
            res.status(200).json(CircularJSON.stringify({newUser , notifEmail}))

    }
    catch(error){
        res.status(500).json(CircularJSON.stringify({error: error.message}))
    }
}

//when the payment for the client is successful
export const clients = async(req,res)=>{
    const novu = new Novu(NOVU_KEY)
    try{
        const {Name, Number,email,customer_Id,Date_Of_Billing,End_Date,Address,payment_Intent,InvoiceId,Emergency_Contact,Emergency_Email,Emergency_Address,reception,Service} = req.body
        const myClients = userDetails({
            Name,
            Number,
            email,
            customer_Id,
            Date_Of_Billing,
            End_Date,
            Address,
            payment_Intent,
            InvoiceId,
            Emergency_Contact,
            Emergency_Email,
            Emergency_Address,
            reception,
            Service
        })
        const newClient = myClients.save()
        const sendNotif = await novu.trigger('new-clients', {
            to: {
              subscriberId: `${email+"_"+customer_Id}`,
              email
            },
            payload: {}
          });
        res.status(200).json(CircularJSON.stringify({newClient , sendNotif}))
    }
    catch(error){
        res.status(500).json(CircularJSON.stringify({error: error.message}))
    }
}
