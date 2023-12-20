import React from "react";
import "./indexpage.css"
import Newbar from "./newbar";
import ClientProp from "./clientsProps";
import Footer from "./Footer";
const Clients = () => {
    fetch('http://localhost:2102/crm/clients').then((res)=>res.json()).then((data)=>console.log(data))


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

{/* <div class="table-responsive">
  <table class="table table-striped border border-secondary rounded shadow-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Client Name</th>
        <th scope="col">Client Email</th>
        <th scope="col">Client Contact Number</th>
        <th scope="col">Plan Expiry Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>John Doe</td>
        <td>john.doe@example.com</td>
        <td>+91 123-456-7890</td>
        <td>2024-01-01</td>
      </tr>
      </tbody>
  </table>
</div>   */}

<Footer />
        </>
        
    )
}
export default Clients