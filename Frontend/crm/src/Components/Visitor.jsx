import React from "react";
import "./indexpage.css"
import Footer from "./Footer";
import Newbar from "./newbar";
const Visitor = () => {
    return (
        <>
         <Newbar />




            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="center-heading mt-5">Visitor's Enquiry Form</h1>
                    </div>
                </div>
            </div>
            <form class="row g-3 custom-form">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="Email" class="form-control" id="inputEmail" />
                </div>
                <div class="col-md-6">
                    <label for="inputNumber" class="form-label">Number</label>
                    <input type="Number" class="form-control" id="inputAddress" placeholder="+91-9999999999" />
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label">Enquiry Date</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" />
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label">Next Date of Enquiry</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" />
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Service</label>
                    <select id="inputState" class="form-select">
                        <option selected></option>
                        <option>...</option>
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
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Receptionist</label>
                    <select id="inputState" class="form-select">
                        <option selected></option>
                        <option>...</option>
                        <option>Shilpi</option>
                        <option>Tabrez</option>
                        <option>12345</option>
                        <option>6789</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Previously Enrolled Client</label>
                    <select id="inputState" class="form-select">
                        <option selected></option>
                        <option>...</option>
                        <option>Yes</option>
                        <option>No</option>

                    </select>
                </div>
                
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Explained Terms & Conditions to Client (All Fields are Compulsory on this Form)
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Register New Visitor</button>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default Visitor