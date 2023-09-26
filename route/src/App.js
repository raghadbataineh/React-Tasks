import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
