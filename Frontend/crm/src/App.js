import './App.css';
import React from 'react';
import Footer from './Components/Footer';
import IndexPage from './Components/indexpage';

import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Loggedin from './Components/loggedin';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<IndexPage />}/>
      <Route path='/signin' element={<Login />}/>
      <Route path='/home' element={<IndexPage />}/>
      <Route path='/login' element={<Loggedin />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
