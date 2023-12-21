import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import SignupPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import ScoresPage from './pages/ScoresPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ScoresPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App;
