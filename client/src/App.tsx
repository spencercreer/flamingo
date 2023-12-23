import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppContextProvider, { useAppContext } from "./context/AppContext";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import AddProspectPage from "./pages/AddProspectPage";
import ProspectsPage from "./pages/ProspectsPage";

function ProtectedRoute({ protectedPage }: { protectedPage: JSX.Element }) {
  const { isAuthenticated } = useAppContext();
  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return protectedPage;
}

export default function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/prospects"
            element={<ProtectedRoute protectedPage={<ProspectsPage />} />}
          />
          <Route
            path="/"
            element={<ProtectedRoute protectedPage={<AddProspectPage />} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}
