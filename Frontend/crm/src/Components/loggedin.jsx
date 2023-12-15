import React from 'react';
import "./indexpage.css"
import { NavLink } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
<>
<nav className="navbar navbar-light bg-dark index">
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand" to="/">
                        <img src="images/logo.png" alt="" width="60" height="50" />
                    </NavLink>
                    <NavLink className="btn btn-primary" to="/home">Home</NavLink>
                </div>
            </nav>
    
    <div className="container py-5 login">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="formIdentifier">Email or Mobile Number</label>
              <input type="text" className="form-control" id="formIdentifier" placeholder="Enter email or mobile number" required />
            </div>

            <div className="form-group">
              <label htmlFor="formPassword">Password</label>
              <input type="password" className="form-control" id="formPassword" placeholder="Enter password" required />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>

          <p className="text-center mt-3">New user? <NavLink to='/signin'>Sign up</NavLink></p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;