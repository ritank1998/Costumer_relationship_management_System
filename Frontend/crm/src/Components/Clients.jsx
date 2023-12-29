import React from "react";
import "./indexpage.css"
import Newbar from "./newbar";
import ClientProp from "./clientsProps";
import Footer from "./Footer";

const Clients = () => {
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

<ClientProp />


<Footer />
        </>
        
    )
}
export default Clients