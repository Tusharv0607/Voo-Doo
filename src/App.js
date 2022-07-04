import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Navbar from './components/navbar';
import About from './components/About';
import Help from './components/Help';
import Spin from './components/Spin';

function App() {
  return (
   <>
    <Router>
      <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home />}> </Route>
            <Route exact path='/Login' element={<Login />}> </Route>
            <Route exact path='/Signup' element={<Signup />}> </Route>
            <Route exact path='/Spin' element={<Spin />}> </Route>
            <Route exact path='/About' element={<About />}> </Route>
            <Route exact path='/Help' element={<Help />}> </Route>
          </Routes>
        </Router>
   </>
  );
}

export default App;
