import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import IndexPage from './Components/indexpage';

import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Loggedin from './Components/loggedin';
import LandingPage from './Components/landingAfterSignup';
import Clients from './Components/Clients';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<IndexPage />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/home' element={<IndexPage />}/>
      <Route path='/login' element={<Loggedin />}/>
      <Route path='/landing' element={<LandingPage />} />
      <Route path='/client' element={<Clients />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
