import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";
import Newbar from "./newbar";
import Footer from "./Footer";

const UserBook = () => {
    return (
        <>
        <Newbar />
            <div class="card text-center col-md-6 mx-auto">
                <div class="card-header ">
                    Stock Your Visitors For a While !!!
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <NavLink to='/visitor'>
                    <button href=".." class="btn btn-primary">Visitors Book</button>
                    </NavLink>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            <div class="card text-center col-md-6 mx-auto">
                <div class="card-header">
                    Check On to Your Clients
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <NavLink to='/client'>
                    <a href=".." class="btn btn-primary">Clients Book</a>
                    </NavLink>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
            <Footer />
        </>
    )
}
export default UserBook