import mongoose from "mongoose";
import express from "express"
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { walkInVisitors, userDetails, newBusiness, inactive } from "../mongodb/models/schema.js";
import CircularJSON from "circular-json";
import { Novu } from "@novu/node";
import cron from "node-cron"
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
//Inactive clients are coming into the inactive DB from the clients DB . A cron is running to
// to keep the track over the payment status , If the status becomes inactive or null then the client will shift to the inactive db.
export const clients = async (req, res) => {
    const novu = new Novu(NOVU_KEY)
    try {
        const { transaction_Id, Payment_Status, age, Emergency_Relation, Emergency_Name, gender, enroll, customer_Id, Name, number, email, Date_Of_Billing, End_Date, Address, payment_Intent, InvoiceId, Emergency_Contact, Emergency_Email, Emergency_Address, reception, Service } = req.body
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
            gender,
            Payment_Status,
            transaction_Id
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
        const { email } = req.body
        const data = await userDetails.findOne({ email: email })
        res.status(200).json(data)

    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

//to get the visitor by name on search query
export const searchVisitor = async (req, res) => {
    try {
        const { email } = req.body
        console.log(email)
        const data = await walkInVisitors.findOne({ email: email })
        res.status(200).send(data)

    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

export const inactiveclientsApi = async (req, res) => {
    try {
        const data = await inactive.find()
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).json(CircularJSON.stringify({ error: error.message }))
    }
}

//api to push the inactive payment status to the inactive client database
// export const cronToPushInactiveClients = async (req, res) => {
//     try {
//         const userName = [];
//         const users = await userDetails.find();
//         users.forEach(user => {
//             userName.push(user.Name);
//         });
//         for(let i=0;i<userName.length;i++){
//             const member = await userDetails.findOne({Name: userName[i]})
//             let date = new Date(member.End_Date);
//             if(date < new Date()){
//                 console.log(true)
//             }
//             else{
//                 const delmember = await userDetails.findOne({Name: userName[i]})
//                 const notMember = inactive({
//                     Name: delmember.Name,
//                     email: delmember.email,
//                     gender:delmember.gender,
//                     age:delmember.age,
//                     customer_Id: delmember.customer_Id,
//                     number:delmember.number,
//                     Address:delmember.Address,
//                     Date_Of_Billing:delmember.Date_Of_Billing,
//                     End_Date: delmember.End_Date,
//                     payment_Intent: delmember.payment_Intent,
//                     InvoiceId: delmember.InvoiceId,
//                     Service:delmember.Service,
//                     Emergency_Name: delmember.Emergency_Name,
//                     Emergency_Contact: delmember.Emergency_Contact,
//                     Emergency_Email: delmember.Emergency_Email,
//                     Emergency_Address: delmember.Emergency_Address,
//                     Emergency_Relation: delmember.Emergency_Relation,
//                     reception: delmember.reception ,
//                     enrolled: delmember.enroll,
//                     Payment_Status: delmember.Payment_Status,
//                     transaction_Id: delmember.transaction_Id
//                 })
//                 const notAMemberNow = notMember.save()
//                 const deleteMem = await userDetails.deleteOne({Name : userName[i]})
//             }
//             console.log(date)
//         }
//         res.status(200).json(CircularJSON.stringify({ users: userName })); 
//     } catch (error) {
//         res.status(500).json(CircularJSON.stringify({error: error.message}));
//     }
// }; 
// export const cronToPushInactiveClients = async (req, res) => {
//     try {
//         const userName = [];
//         const users = await userDetails.find();

//         users.forEach(user => {
//             userName.push(user.Name);
//         });

//         for (let i = 0; i < userName.length; i++) {
//             const member = await userDetails.findOne({ Name: userName[i] });

//             if (!member) {
//                 console.log(`User ${userName[i]} not found.`);
//                 continue; // Skip to the next user if current user is not found
//             }

//             let date = new Date(member.End_Date);

//             if (date < new Date()) {
//                 console.log(true);
//             } else {
//                 const inactiveMember = new inactiveDetails({ ...member._doc });
//                 await inactiveMember.save();
//                 await userDetails.deleteOne({ Name: userName[i] });
//             }
//             res.status(500).json(CircularJSON.stringify({ error: error.message }))
//             console.log(date);
//         }

//         res.status(200).json({ users: userName });
//     } catch (error) {
//         console.error(error); // Log the error for debugging purposes
//     }
// };
const cronToPushInactiveClient= async(req,res)=>{
    try{
        const userNames = []
        const users = await userDetails.find()
        users.forEach(user =>{
            userNames.push(user.Name)
        })
        console.log(users)
        for(let i=0;i<userNames.length;i++){
            const member = await userDetails.findOne({Name: userNames[i]})
            const memberEndDate = new Date(member.End_Date)
            if(memberEndDate < new Date()){
                res.status(404).json(CircularJSON.stringify("No In Active Client"))
            }
            else{
                const inactiveMemberDetails = new inactiveDetails({...member._doc})
                await inactiveMemberDetails.save()
                await userDetails.deleteOne({ Name: userNames[i] });
            }
            res.status(200).json(CircularJSON.stringify({userNames}))
        }
    }
    catch(error){
        res.status(500).json(CircularJSON.stringify({error: error.message}))
    }
}
// export const cronToPushInactiveClients = async (req, res) => {
//     try {
//       const userNames = []; // Use more descriptive variable name
//       const users = await userDetails.find();
  
//       users.forEach(user => {
//         userNames.push(user.Name);
//       });
  
//       for (let i = 0; i < userNames.length; i++) {
//         const member = await userDetails.findOne({ Name: userNames[i] });
  
//         if (!member) {
//           console.log(`User ${userNames[i]} not found.`);
//           continue;
//         }
  
//         const memberEndDate = new Date(member.End_Date); // Use descriptive variable name
  
//         if (memberEndDate < new Date()) {
//           console.log(true); // Add meaningful code here for handling active users
//         } else {
//           const inactiveMemberDetails = new inactiveDetails({ ...member._doc }); // Use descriptive variable name
//           await inactiveMemberDetails.save();
//           await userDetails.deleteOne({ Name: userNames[i] });
//         }
//       }
  
//       res.status(200).json({ users: userNames });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json(CircularJSON.stringify({error: error.message})); // Send error response in case of exceptions
//     }
//   };

cron.schedule('*/10 * * * * *', () => {
    console.log('Running cron job...');
    cronToPushInactiveClient()
});