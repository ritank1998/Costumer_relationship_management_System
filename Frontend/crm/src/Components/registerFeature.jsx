import React, { useState } from "react";
import Newbar from "./newbar";
import Footer from "./Footer";
const RegistrationFeature = () => {
    const [link, setLink] = useState('')
    const [client, setClient] = useState('')
    const [plan, setPlan] = useState('')

    const takeClient = (e) => {
        setClient(e.target.value)
    }
    const takeLink = (e) => {
        setLink(e.target.value)
    }
    const takePlan = (e) => {
        setPlan(e.target.value)
    }

    console.log(client)
    console.log(link)
    console.log(plan)

    const sendLink = async (e) => {
        e.preventDefault()
        try {
            const payload = {
                client,
                link
            }
            const response = await fetch('http://localhost:2102/crm/sendmail', {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Newbar />
            <form class="row g-3 custom-form">
            <h1 class="display-4">Create Client's Self Registration & Payment Link</h1>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="inputEmail4"  />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="Email" class="form-control" id="inputEmail" onChange={takeClient} />
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Registration Link</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value="http://localhost:3000/selfregistration" onChange={takeLink}/>
                </div>
                <div class="row" style={{ "marginTop": "25px" }}>
                    <div class="col-sm-3">
                        <label class="sr-only" for="inlineFormInputName">Plan Name</label>
                        <input type="text" class="form-control mb-2" id="inlineFormInputName" placeholder="Jane Doe" />
                    </div>
                    <div class="col-sm-3">
                        <label class="sr-only" for="inlineFormInputGroupUsername">Plan Amount</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">₹</div>
                            </div>
                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                        </div>
                    </div>
                    <div class="col-auto" style={{ "marginTop": "22px" }}>
                        <button type="submit" class="btn btn-primary mb-2">Create Payment Link</button>
                    </div>
                </div>


                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={sendLink}>Send Email</button>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default RegistrationFeature