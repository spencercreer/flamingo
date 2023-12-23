import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppContextProvider, { useAppContext } from "./context/AppContext";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Login from "./pages/Login";
import AddProspect from "./pages/AddProspect";
import Prospects from "./pages/Prospects";
import Dashboard from "./pages/Dashboard";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute protectedPage={<Dashboard />} />}
          />
          <Route
            path="/prospects"
            element={<ProtectedRoute protectedPage={<Prospects />} />}
          />
          <Route
            path="/"
            element={<ProtectedRoute protectedPage={<AddProspect />} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}
