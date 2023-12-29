import './App.css';
import React from 'react';
import IndexPage from './Components/indexpage';

import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Loggedin from './Components/loggedin';
import LandingPage from './Components/landingAfterSignup';
import Clients from './Components/Clients';
import Dashboard from './Components/dashboard';
import Home from './Components/Home';
import Visitor from './Components/Visitor';
import LoginFail from './Components/LoginFailure';
import SignUpFailed from './Components/Signupfailed';
import VisitorBook from './Components/visitorsBook';
import UserBook from './Components/UserBook';
import PointsTable from './Components/pointstable';
import RegistrationFeature from './Components/registerFeature';
import SelfRegistratiion from './Components/selfRegistration';


function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<IndexPage />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/home' element={<IndexPage />}/>
      <Route path='/login' element={<Loggedin />}/>
      <Route path='/clientform' element={<LandingPage />} />
      <Route path='/client' element={<Clients />}/>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/selectclienttype' element={<Home />}></Route>
      <Route path='/visitortype' element={<Visitor />}></Route>
      <Route path='/loginfail' element={<LoginFail />}></Route>
      <Route path='/signupfail' element={<SignUpFailed />}></Route>
      <Route path='/visitor' element={<VisitorBook />}></Route>
      <Route path='/clientbook' element={<UserBook />}></Route>
      <Route path='/points' element={<PointsTable />}></Route> 
      <Route path='/sendform' element={<RegistrationFeature />}></Route>
      <Route path='/selfregistration' element={<SelfRegistratiion />}></Route>
      
    </Routes>
    </>
  );
}

export default App;
