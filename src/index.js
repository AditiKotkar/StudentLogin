import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import StudentLogin from './components/studentlogin'; 
import StudentDashbord from './components/StudentDashbord';
import Profilepage from './components/Profilepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentLogin />} /> 
      <Route path='student' element={<StudentDashbord />} />
      <Route path='profile' element={<Profilepage />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();