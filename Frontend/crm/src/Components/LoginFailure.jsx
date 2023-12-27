import React from "react";
import { NavLink } from "react-router-dom";
const LoginFail = () => {
    return (
        <>
            <div class="card">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <NavLink to='/signin'><a class="btn btn-primary" href="...">Try Login Again ?</a></NavLink>
                </div>
            </div>
        </>

    )
}
export default LoginFail