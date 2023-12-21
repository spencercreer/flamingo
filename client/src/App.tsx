import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import UserAuth from './pages/UserAuth';
import ErrorPage from './pages/ErrorPage';
import ScoresPage from './pages/ScoresPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<UserAuth />} />
      <Route path="/scores" element={<ScoresPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App;
