import React from "react";
import "./indexpage.css"
import { NavLink } from "react-router-dom";
const Newbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-pink-lightest shadow-sm">
                <div class="container-fluid">
                    <NavLink to='/landing'><a class="navbar-brand text-dark">
                        <span class="me-2 fw-bold">The Client Metrix</span>
                        <i class="bi bi-heart text-pink"></i>
                    </a></NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <NavLink to='/landing'><a class="nav-link text-dark fw-bold">Home</a> </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/client'><a class="nav-link text-dark">Clients</a></NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to='/dashboard'><a class="nav-link text-dark">Dashboard</a></NavLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Account Settings
                                </a>
                                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <li><NavLink><a class="dropdown-item text-dark" href="#">Logout</a></NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Newbar