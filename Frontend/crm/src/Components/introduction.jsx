import React from "react";
import "./indexpage.css"
const Introduction = () => {
    return (
        <>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card text-center">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="true" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact Us</a>
                                </li>
    
                            </ul>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Client's Matrix</h5>
                            <p class="card-text">"Client Matrix redefines CRM solutions, streamlining customer interactions with its intuitive platform. Seamlessly manage leads, enhance client relationships, and optimize sales pipelines. Empower your business with cutting-edge technology, robust analytics, and a user-centric approach, all within Client Matrix's dynamic framework."</p>
                            <a href="#" class="btn btn-primary">Let's Begin</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Introduction