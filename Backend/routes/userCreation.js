import mongoose from "mongoose";
import express from "express"
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { walkInVisitors, userDetails, newBusiness } from "../mongodb/models/schema.js";
import CircularJSON from "circular-json";
import { Novu } from "@novu/node";
const NOVU_KEY = '5a81b3ea5f716a12e4224205bbf4dcd1'

const generateKeys = (length) => {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}
const accessKey = generateKeys(16)
const refreshKey = generateKeys(16)

console.log(accessKey, refreshKey)
//when login to the CRM by a New Business
export const signup = async (req, res) => {
    try {
        const { fullName, email, number, password, confirm_password, Business_Type } = req.body
        const businessDetails = newBusiness({
            fullName,
            email,
            number,
            password,
            confirm_password,
            Business_Type
        })
        const newClient = await businessDetails.save()
        const accessToken = jwt.sign(
            { email: newClient.email, number: newClient.number },
            accessKey,
            { expiresIn: '1h' }
        )
        const refreshToken = jwt.sign(
            { email: newClient.email, userId: newClient._id },
            refreshKey,
            { expiresIn: '7d' } // Refresh token expires in 7 days
        );
        // localStorage.setItem('accessToken', accessToken);
        // localStorage.setItem('refreshToken', refreshToken);
        // localStorage.setItem('userData', JSON.stringify(newClient));
        res.status(200).json(CircularJSON.stringify({ newClient }))
    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

//Business Login Details for entering the CRM
export const businessDetails = async (req, res) => {
    const { email, password } = req.body;
    try {

        const user = await newBusiness.findOne({ email: email });

        console.log(email);
        const pass = user.password;
        console.log(pass);

        if (pass !== password) {
            return res.status(404).send('Invalid Username or Password !!!');
        }

        return res.status(200).json(CircularJSON.stringify({ user }));
    } catch (error) {
        return res.status(500).json(CircularJSON.stringify({ error: error.message }));
    }
};


//when user arrives in the work station
export const users = async (req, res) => {
    const novu = new Novu(NOVU_KEY)
    try {
        const { Name, gender, number, email, reception, Date, Next_Date_Of_Contact, Enquiry_Type } = req.body;

        const myVisitor = walkInVisitors({
            Name,
            number,
            email,
            reception,
            Date,
            gender,
            Next_Date_Of_Contact,
            Enquiry_Type
        })
        const newUser = await myVisitor.save()
        const notifEmail = novu.trigger('crm-visitorcreated', {
            to: {
                subscriberId: `${email + "_" + Name}`,
                email
            },
            payload: {}
        });
        res.status(200).json(CircularJSON.stringify({ newUser, notifEmail }))

    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
        console.log(error)
    }
}

//when the payment for the client is successful and client becomes the permanent member of the Service 
export const clients = async (req, res) => {
    const novu = new Novu(NOVU_KEY)
    try {
        const {age ,Emergency_Relation,Emergency_Name, gender ,enroll ,customer_Id, Name, number, email, Date_Of_Billing, End_Date, Address, payment_Intent, InvoiceId, Emergency_Contact, Emergency_Email, Emergency_Address, reception, Service } = req.body
        const myClients = userDetails({
            Name,
            number,
            email,
            age,
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
            Service,
            enroll,
            Emergency_Name,
            Emergency_Relation,
            gender
        })
        const newClient = myClients.save()
        const sendNotif = await novu.trigger('new-clients', {
            to: {
                subscriberId: `${email + "_" + customer_Id}`,
                email
            },
            payload: {}
        });
        res.status(200).json(CircularJSON.stringify({ newClient, sendNotif }))
    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}


//Aoi to get the clients from the DB
export const getClients = async (req, res) => {
    try {
        const data = await userDetails.find({})
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

//APi to Bring the Visitor from the DB
export const getVisitor = async (req, res) => {
    try {
        const data = await walkInVisitors.find({})
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

//To search The Client from the DB
export const searchClient = async (req, res) => {
    try {
        const { name } = req.body
        const data = await userDetails.findOne({ Name: name })
        res.status(200).json(data)

    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

//to get the visitor by name on search query
export const searchVisitor = async(req,res)=>{
    try{
        const {name}= req.body
        const data = await walkInVisitors.findOne({Name: name})
        res.status(200).send(data)

    }
    catch(error){
        res.status(500).json(CircularJSON.stringify({error: error.message}))
    }
}