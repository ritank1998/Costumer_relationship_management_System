import React from "react";
const IndexPage =()=>{
    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a href="#" class="navbar-brand">
            <img src="images/logo.svg" height="28" alt="CoolBrand" />
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">About Us</a>
                <a href="#" class="nav-item nav-link">Contact Us</a>
                <a href="#" class="nav-item nav-link disabled" tabindex="-1"></a>
            </div>
            <div className="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </div>
</nav>
        </>
    )
}
export default IndexPage