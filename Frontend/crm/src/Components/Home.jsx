import React from "react";
import "../App.css"
import Newbar from "./newbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <>

            <Newbar />
            <div class="row cards">
                <div class="col-sm-6 sigmacard sigmacard1">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment 11</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 sigmacard sigmacard2">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment 12</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 sigmacard sigmacard3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment 13</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 sigmacard sigmacard4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Special title treatment 14</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <NavLink href="#" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                    </div>
                </div>
            </div>



            <div class="d-grid gap-2 col-6 mx-auto btns">
                <NavLink to='/visitortype'><button class="btn btn-primary btn1" type="button">Register A New Visitor</button></NavLink>
                <NavLink to='/landing'><button class="btn btn-primary btn2" type="button">Register A New Client</button></NavLink>
            </div>

            <Footer />
        </>
    )
}
export default Home