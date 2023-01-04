import React from 'react';
import './App.css';
import Home from './view/Home';
import { Routes, Route, Link } from 'react-router-dom';
import About from './view/About';
import Contact from './view/Contact';

const App = () => {
  return (
    <div>
      <h1>Hello React Router v6</h1>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
