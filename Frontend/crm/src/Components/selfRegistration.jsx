import React,{useState} from "react";
import Footer from "./Footer";
const SelfRegistratiion = () => {
    const [Name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [number ,setNumber] = useState('')
    const [age , setAge] = useState('')
    const [Date_Of_Billing , setDate] = useState('')
    const [End_Date , setEndDate] = useState('')
    const [Service , setService] = useState('')
    const [reception , setReception] = useState('')
    const [enroll , setEnrolled] = useState('')
    const [address, setAddress] = useState('')
    const [city , setCity] = useState('')
    const [state , setState] = useState('')
    const [zip , setZip] = useState('')
    const [Emergency_Name , setEmergencyName] = useState('')
    const [Emergency_Email , setEmergencyEmail] = useState('')
    const [Emergency_Contact , setEmergencyNumber] = useState('')
    const [Emergency_Relation , setEmergencyRelation] = useState('')
    const [emergencyAddress , setEmergencyAddress] = useState('')
    const [emergencyCity , setEmergencyCity] = useState('')
    const [emergencyState , setEmergencyState] = useState('')
    const [emergencyZip , setEmergencyZip] = useState('')
    const [gender , setGender] = useState('')

      
    
    const takeEmail=(e)=>{
        setEmail(e.target.value)
    }
    const takeName =(e)=>{
        setName(e.target.value)
    }
    const takeNumber=(e)=>{
        setNumber(e.target.value)
    }
    const takeDate=(e)=>{
        setDate(e.target.value)
    }
    const takeEndDate=(e)=>{
        setEndDate(e.target.value)
    }
    const takeService=(e)=>{
        setService(e.target.value)
    }
    const takeReception=(e)=>{
        setReception(e.target.value)
    }
    const takeAddress=(e)=>{
        setAddress(e.target.value)
    }
    const takeCity=(e)=>{
        setCity(e.target.value)
    }
    const takeState=(e)=>{
        setState(e.target.value)
    }
    const takeZip=(e)=>{
        setZip(e.target.value)
    }
    const takeEnrollement=(e)=>{
         setEnrolled(e.target.value)
    }
    const takeEmergencyName=(e)=>{
        setEmergencyName(e.target.value)
    }
    const takeEmergencyAddress=(e)=>{
        setEmergencyAddress(e.target.value)
    }
    const takeEmergencyCity=(e)=>{
        setEmergencyCity(e.target.value)
    }
    const takeEmergencyState=(e)=>{
        setEmergencyState(e.target.value)
    }
    const takeEmergencyZip=(e)=>{
        setEmergencyZip(e.target.value)
    }
    const takeAge=(e)=>{
        setAge(e.target.value)
    }
    const takeEmergencyRelation=(e)=>{
        setEmergencyRelation(e.target.value)
    }
    const takeEmergecyNumber=(e)=>{
        setEmergencyNumber(e.target.value)
    }
    const takeEmergencyEmail=(e)=>{
        setEmergencyEmail(e.target.value)
    }
   const takeGender=(e)=>{
    setGender(e.target.value)
   }
   console.log(number)
    
console.log(gender)
    const createClient=async (e)=>{
        e.preventDefault();
      const payload ={
        Name,
        number,
        email,
        age,
        customer_Id : `${Name+"_"+Date_Of_Billing}`,
        Date_Of_Billing,
        End_Date,
        gender,
        Address: `${address+" "+city+" "+state+" "+zip}`,
        Emergency_Name,
        Emergency_Contact,
        Emergency_Email,
        Emergency_Address :`${emergencyAddress+" "+emergencyCity+" "+emergencyState+" "+emergencyZip}`,
        reception,
        Service,
        enroll,
        Emergency_Relation,
      }
      console.log(payload)
      try{
        const response = await fetch('http://localhost:2102/crm/newclients',{
           method: "POST",
           body: JSON.stringify(payload),
           headers: {
            'Content-Type': 'application/json'
           }
        })
        if(response.ok){
            const data = await response.data
            console.log("Successful Client Registration:" , data)
            alert("Client Registered Successfully !!!")
        }
        else{
            alert("OOPs , Cannot Proceed !! Please try Again")
        }

      }
      catch(error){

      }
    }

    return (
        <>
            <nav class="navbar navbar-light bg-dark">
                <a class="navbar-brand" href="#">
                    <img src="" width="30" height="30" class="d-inline-block align-top" alt=".." />
                    <h className="bg-light">Client Matrix</h>
                </a>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="center-heading mt-5">Client's Self Registration Form</h1>
                    </div>
                </div>
            </div>
            <form class="row g-3 custom-form">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="inputEmail4" onChange={takeName}/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Email</label>
                    <input type="Email" class="form-control" id="inputEmail" onChange={takeEmail}/>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Gender</label>
                    <select id="inputState" class="form-select" onChange={takeGender}>
                        <option selected></option>
                        <option>...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="inputNumber" class="form-label">Age</label>
                    <input type="Number" class="form-control" id="inputAddress" placeholder="Min 15+" onChange={takeAge}/>
                </div>
                <div class="col-md-6">
                    <label for="inputNumber" class="form-label">Number</label>
                    <input type="number" class="form-control" id="inputAddress" placeholder="+91-9999999999" onChange={takeNumber}/>
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label">Program Start Date</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" onChange={takeDate}/>
                </div>
                <div class="col-md-6">
                    <label for="inputDate" class="form-label">Program End Date</label>
                    <input type="Date" class="form-control" id="Date" placeholder="21/02/1998" onChange={takeEndDate}/>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Service</label>
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
                    <label for="inputState" class="form-label" >Receptionist</label>
                    <select id="inputState" class="form-select" placeholder="Our Host on the Reception" onChange={takeReception}>
                        <option selected></option>
                        <option>...</option>
                        <option>Shilpi</option>
                        <option>Tabrez</option>
                        <option>12345</option>
                        <option>6789</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Previously Enrolled Client</label>
                    <select id="inputState" class="form-select" onChange={takeEnrollement}>
                        <option selected></option>
                        <option>...</option>
                        <option>Yes</option>
                        <option>No</option>

                    </select>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Current Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={takeAddress}/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" onChange={takeCity}/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select "onChange={takeState}>
                        <option selected>Choose...</option>
                        <option>Karnataka</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" onChange={takeZip}/>
                </div>
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Emergency Contact Name</label>
                    <input type="Name" class="form-control" id="inputName" onChange={takeEmergencyName}/>
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">Emergency Contact Email</label>
                    <input type="Email" class="form-control" id="inputEmail" onChange={takeEmergencyEmail}/>
                </div>
                <div class="col-md-6">
                    <label for="inputNumber" class="form-label">Emergency Contact Number</label>
                    <input type="Number" class="form-control" id="inputAddress" placeholder="+91-9999999999" onChange={takeEmergecyNumber}/>
                </div>
                <div class="col-md-6">
                    <label for="inputState" class="form-label">Relation With Emergency Contact</label>
                    <select id="inputState" class="form-select" onChange={takeEmergencyRelation}>
                        <option selected>Choose...</option>
                        <option>Son</option>
                        <option>Daughter</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Brother</option>
                        <option>Sister</option>
                        <option>Husband</option>
                        <option>Friend</option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Emergency or Permanent Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={takeEmergencyAddress}/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Emergency or Permanent City</label>
                    <input type="text" class="form-control" id="inputCity" onChange={takeEmergencyCity}/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select" onChange={takeEmergencyState}>
                        <option selected>Choose...</option>
                        <option>Karnataka</option>
                        <option>Madhya Pradesh</option>
                        <option>Uttar Pradesh</option>
                        <option>Andaman and Nicobar Islands</option>
                        <option>Lakshwadeep</option>
                        <option>Jammu & Kashmir</option>
                        <option>Leh</option>
                        <option>Punjab</option>
                        <option>Haryana</option>
                        <option>Gujarat</option>
                        <option>Chattisgarh</option>
                        <option>Jharkhand</option>
                        <option>Bihar</option>
                        <option>West Bengal</option>
                        <option>Sikkim</option>
                        <option>Himachal Pradesh</option>
                        <option>Uttrakhand</option>
                        <option>Assam</option>
                        <option>Tripura</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Arunachal Pradesh</option>
                        <option>Meghalaya</option>
                        <option>Manipur</option>
                        <option>Telangana</option>
                        <option>Andhra Pradesh</option>
                        <option>Tamil Nadu</option>
                        <option>Kerala</option>
                        <option>Delhi</option>
                        <option>Chandigarh</option>
                        <option>Pondicherry</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip" onChange={takeEmergencyZip}/>
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
                    <button type="submit" class="btn btn-primary" onClick={createClient}>Create Client</button>
                </div>
            </form>
            <Footer />
        </>
    )
}
export default SelfRegistratiion