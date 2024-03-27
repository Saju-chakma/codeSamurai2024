
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Home';
import Login from './LogIn';

function App() {
  return (
    <Router>
      <Routes > 
      
        <Route exact path="/" element={<Landing/>} />
        <Route path="/LogIn" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
