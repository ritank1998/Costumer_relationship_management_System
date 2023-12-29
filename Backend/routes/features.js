import CircularJSON from "circular-json";
import nodemailer from "nodemailer"

//click the avatar on the google and go to manage accounts 
//click security on the left handside then enable 2 factor authentication
//then go to 2 factor authentication , then scroll down the window and click app passwords then set up ur app and click create
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'saxena.ritank@gmail.com',
        pass: 'jxtyxdltbkihtcpc'
    }
});



export const sendEmail = async(req,res)=>{
    const {link , client} =  req.body
try{
    console.log(link , client)
    let mailOptions = {
        from: 'saxena.ritank@gmail.com',
        to: client,
        subject: 'Register',
        text: link
    };
    const response = transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.status(200).json(CircularJSON.stringify({response}))
}
catch(error){
    res.status(500).json(CircularJSON.stringify({error: error.message}))
}
}