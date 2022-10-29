import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from "./pages/landing/landing.jsx";
import Signup from "./pages/signup/signup";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <>
        <Route
        path="*"
        element={<Landing />}
        />
        <Route
        path="/signup"
        element={<Signup />}
        />
          
        </>
      </Routes>
    </React.Suspense>
  );
}

export default App;
