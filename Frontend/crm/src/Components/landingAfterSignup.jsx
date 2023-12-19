import React from "react";
import "./indexpage.css"
import Newbar from "./newbar";
import Footer from "./Footer";
const LandingPage = () => {
    return (
        <>
         <Newbar />




            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="center-heading mt-5">Client On-Boarding Form</h1>
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
                    <label for="inputDate" class="form-label">Program Start Date</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" />
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label">Program End Date</label>
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
                    <label for="inputAddress2" class="form-label">Current Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Karnataka</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Emergency Contact Name</label>
                    <input type="Name" class="form-control" id="inputName" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Emergency Contact Email</label>
                    <input type="Email" class="form-control" id="inputEmail" />
                </div>
                <div class="col-md-6">
                    <label for="inputNumber" class="form-label">Emergency Contact Number</label>
                    <input type="Number" class="form-control" id="inputAddress" placeholder="+91-9999999999" />
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Relation With Emergency Contact</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Son</option>
                        <option>Daughter</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Brother</option>
                        <option>Sister</option>
                        <option>Husband</option>
                        <option>Friend</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Emergency or Permanent Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Emergency or Permanent City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Karnataka</option>
                        <option>Madhya Pradesh</option>
                        <option>Uttar Pradesh</option>
                        <option>Andaman and Nicobar Islands</option>
                        <option>Lakshwadeep</option>
                        <option>Jammu & Kashmir</option>
                        <option>Leh</option>
                        <option>Punjab</option>
                        <option>Haryana</option>
                        <option>Gujarat</option>
                        <option>Chattisgarh</option>
                        <option>Jharkhand</option>
                        <option>Bihar</option>
                        <option>West Bengal</option>
                        <option>Sikkim</option>
                        <option>Himachal Pradesh</option>
                        <option>Uttrakhand</option>
                        <option>Assam</option>
                        <option>Tripura</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Arunachal Pradesh</option>
                        <option>Meghalaya</option>
                        <option>Manipur</option>
                        <option>Telangana</option>
                        <option>Andhra Pradesh</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Delhi</option>
                        <option>Chandigarh</option>
                        <option>Pondicherry</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" />
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
                    <button type="submit" class="btn btn-primary">Create Client</button>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default LandingPage