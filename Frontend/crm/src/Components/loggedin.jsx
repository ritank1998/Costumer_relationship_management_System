import React , {useState} from 'react';
import "./indexpage.css"
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const takeEmail =(e)=>{
    setEmail(e.target.value)
    
  }
  const takePassword =(e)=>{
    setPassword(e.target.value)
  }
  console.log(email)
  console.log(password)

 //this is the method to login authentiction
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const payload = {
      email,
      password,
    };
    console.log(payload);
    const response = await fetch('http://localhost:2102/crm/business', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      // Login successful
      const data = await response.json();
      console.log('Login successful:', data);
      window.location.href = '/selectclienttype'; // Corrected line
      // Perform actions upon successful login
    } else {
      // Handle login failure
      window.location.href = '/loginfail'
      console.error('Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};



  return (
<>
<nav className="navbar navbar-light bg-dark index">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="" width="60" height="50" />
                    </NavLink>
                    <NavLink className="btn btn-primary" to="/home">Home</NavLink>
                </div>
            </nav>
    
    <div className="container py-5 login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <br></br>
          <form >
            <div className="form-group">
              <label htmlFor="formIdentifier">Email or Mobile Number</label>
              <br></br>
              <input type="text" className="form-control" id="formIdentifier" placeholder="Enter email or mobile number" required onChange={takeEmail}/>
            </div>

            <div className="form-group">
              <label htmlFor="formPassword">Password</label>
              <input type="password" className="form-control" id="formPassword" placeholder="Enter password" required onChange={takePassword}/>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Login</button>
          </form>

          <p className="text-center mt-3">New user? <NavLink to='/signin'>Sign up</NavLink></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;