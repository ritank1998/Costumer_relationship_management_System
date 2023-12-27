import React , {useState }from "react";
import "./indexpage.css"
import Footer from "./Footer";
import Newbar from "./newbar";
const Visitor = () => {
    const [Name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [number ,setNumber] = useState('')
    const [Date , setDate] = useState('')
    const [Next_Date_Of_Contact , setNext_Date_Of_Contact] = useState('')
    const [Enquiry_Type , setEnquiry_Type] = useState('')
    const [gender , setGender] = useState('')
    const [reception , setReception] = useState('')

    const takeName=(e)=>{
        setName(e.target.value)
    }
    const takeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const takeNumber=(e)=>{
        setNumber(e.target.value)
    }
    const takeDate=(e)=>{
        setDate(e.target.value)
    }
    const takeDateNext=(e)=>{
        setNext_Date_Of_Contact(e.target.value)
    }
    const takeService=(e)=>{
        setEnquiry_Type(e.target.value)
    }
    const takeGender=(e)=>{
        setGender(e.target.value)
    }
    const takeReception=(e)=>{
        setReception(e.target.value)
    }

    console.log(Name)
    console.log(email)
    console.log(number)
    console.log(Date)
    console.log(Next_Date_Of_Contact)
    console.log(reception)
    console.log(gender)
    console.log(Enquiry_Type)

    const submitVisitor=async(e)=>{
          e.preventDefault()
          try{
            const payload={
                Name,
                email,
                number,
                Date,
                Next_Date_Of_Contact,
                reception,
                gender,
                Enquiry_Type
            }
             const response = await fetch('http://localhost:2102/crm/createuser' , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
             })
             if (response.ok) {
                const data = await response.data
                console.log('Signup successful:', data);
                alert('Visitor Registered')
            }
            else {
                alert("Error in Visitor's registration")
                console.error('Signup failed');
            }
          }
          catch(error){
            console.log(error)
          }
    }

    return (
        <>
         <Newbar />




            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="center-heading mt-5">Visitor's Enquiry Form</h1>
                    </div>
                </div>
            </div>
            <form class="row g-3 custom-form">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label" >Full Name</label>
                    <input type="email" class="form-control" id="inputEmail4" onChange={takeName}/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label" >Email</label>
                    <input type="Email" class="form-control" id="inputEmail" onChange={takeEmail} />
                </div>
                <div class="col-md-6">
                    <label for="inputNumber" class="form-label" >Number</label>
                    <input type="Number" class="form-control" id="inputAddress" placeholder="+91-9999999999" onChange={takeNumber}/>
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label" >Enquiry Date</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" onChange={takeDate}/>
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label" >Next Date of Enquiry</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" onChange={takeDateNext}/>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label" >Service</label>
                    <select id="inputState" class="form-select" onChange={takeService}>
                        <option selected></option>
                        <option>...</option>
                        <option>Fitness & Gym</option>
                        <option>Banking Services</option>
                        <option>Food Services</option>
                        <option>IT Management</option>
                        <option>Real-Estate</option>
                        <option>Hospital & Medical Services</option>
                        <option>Educational Institutions</option>
                        <option>Hospitality Services</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label" >Gender</label>
                    <select id="inputState" class="form-select" onChange={takeGender}>
                        <option selected></option>
                        <option>...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>

                    </select>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label" >Receptionist</label>
                    <select id="inputState" class="form-select" onChange={takeReception}>
                        <option selected></option>
                        <option>...</option>
                        <option>Shilpi</option>
                        <option>Tabrez</option>
                        <option>12345</option>
                        <option>6789</option>
                    </select>
                </div>
                
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Explained Terms & Conditions to Client (All Fields are Compulsory on this Form)
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary" onClick={submitVisitor}>Register New Visitor</button>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default Visitor