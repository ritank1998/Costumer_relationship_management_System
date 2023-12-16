import React from "react";
import { getClients } from "../Controller/controller";
import { NavLink } from "react-router-dom";
const Clients =()=>{
    fetch('http://localhost:2102/crm/clients').then((res)=>res.json()).then((data)=>console.log(data))

    return(
        <>
         <div className="container">
                <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Client Metrix</a>
                        <div className="social-media order-lg-last">
                            <p className="mb-0 d-flex">
                                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                            </p>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars"></span> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto mr-md-3">
                                <li className="nav-item active"><NavLink to='/landing' className="nav-link">Home</NavLink></li>
                                <li className="nav-item"><NavLink href="#" className="nav-link">Account Settings</NavLink></li>
                                <li className="nav-item"><NavLink href="#" className="nav-link">Contact Us</NavLink></li>
                                <li className="nav-item"><NavLink href="#" className="nav-link">Logout</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Clients