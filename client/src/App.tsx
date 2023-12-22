import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { AppContextProvider } from "./context/AppContext";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import AddProspectPage from "./pages/AddProspectPage";
import ProspectsPage from "./pages/ProspectsPage";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AddProspectPage />} />
          <Route path="/prospects" element={<ProspectsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
