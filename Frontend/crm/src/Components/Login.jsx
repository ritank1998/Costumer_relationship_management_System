import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"

const Login = () => {
    const [fullName, setFullName] = useState('')
    const [number, SetNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [Business_Type, setBusiness_Type] = useState('')

    const takeName = (e) => {
        setFullName(e.target.value)
    }
    const takeNumber = (e) => {
        SetNumber(e.target.value)
    }
    const takeEmail = (e) => {
        setEmail(e.target.value)
    }
    const takePassword = (e) => {
        SetPassword(e.target.value)
    }
    const takeConfirmPassword = (e) => {
        setConfirm_password(e.target.value)
    }
    const takeBusiness = (e) => {
        setBusiness_Type(e.target.value)
    }

    console.log(fullName)
    console.log(number)
    console.log(email)
    console.log(password)
    console.log(confirm_password)
    console.log(Business_Type)




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                fullName,
                email,
                number,
                password,
                confirm_password,
                Business_Type
            }
            console.log("payload is:---" , payload)
        if(password !== confirm_password){
           alert("Try Again!!! Passwords Miss-Matched")
        }else{
           const response = await fetch('http://localhost:2102/crm/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        if (response.ok) {
            const data = await response.data
            console.log('Signup successful:', data);
            window.location.href = '/selectclienttype';
        }
        else {
            window.location.href = '/signupfail'
            console.error('Signup failed');
        }
        }     
        }
        catch (error) {
            console.log(error)
        }

    };

    return (
        <>
            <nav className="navbar navbar-light bg-dark index">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" width="60" height="50" />
                    </NavLink>
                    <NavLink className="btn btn-primary" to="/home">Home</NavLink>
                </div>
            </nav>

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="text-center mb-4">Create an Account</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="formFullName">Full Name</label>
                                <input type="text" className="form-control" id="formFullName" placeholder="Enter your full name" required onChange={takeName} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formMobile">Mobile Number</label>
                                <input type="tel" className="form-control" id="formMobile" placeholder="Enter your mobile number" required onChange={takeNumber} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formEmail">Email</label>
                                <input type="email" className="form-control" id="formEmail" placeholder="Enter your email" required onChange={takeEmail} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formPassword">Password</label>
                                <input type="password" className="form-control" id="formPassword" placeholder="Enter password" required onChange={takePassword} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formNewPassword">New Password</label>
                                <input type="password" className="form-control" id="formNewPassword" placeholder="Enter new password" required onChange={takeConfirmPassword} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="formBusinessType">Business Type</label>
                                <select className="form-control" id="formBusinessType" onChange={takeBusiness}>
                                    <option>Choose...</option>
                                    <option>Fitness & Gym</option>
                                    <option>Banking Services</option>
                                    <option>Food Services</option>
                                    <option>IT Management</option>
                                    <option>Real-Estate</option>
                                    <option>Hospital & Medical Services</option>
                                    <option>Educational Institutions</option>
                                    <option>Hospitality Services</option>
                                </select>
                            </div>
                            <br></br>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="formCheckbox" required />
                                <label className="form-check-label" htmlFor="formCheckbox">I accept the terms and conditions</label>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                        <p className="text-center mt-3">Already have an account? <NavLink to="/login">Login</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Login;