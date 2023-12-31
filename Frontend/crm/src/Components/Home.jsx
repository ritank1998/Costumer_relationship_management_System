import React from "react";
import "../App.css"
import Newbar from "./newbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <>
            <Newbar />



            <div class="d-grid gap-2 col-6 mx-auto btns">
                <NavLink to='/visitortype'><button class="btn btn-primary btn1" type="button">Register A New Visitor</button></NavLink>
                <NavLink to='/sendform'><button class="btn btn-primary btn2" type="button">Register A New Client</button></NavLink>
            </div>

            <Footer />
        </>
    )
}
export default Home