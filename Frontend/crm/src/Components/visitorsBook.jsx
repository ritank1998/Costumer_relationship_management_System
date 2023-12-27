import React from "react";
import Newbar from "./newbar";
import Footer from "./Footer";
import VisitorProp from "./visitorProp";
const VisitorBook = () => {
    return (
        <>
            <Newbar />
            <nav class="navbar navbar-light bg-light searchBox">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2 box" type="search" placeholder="Seacrh Your Client Here ......" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <VisitorProp />
            <Footer />
        </>
    )
}
export default VisitorBook