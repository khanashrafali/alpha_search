import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import { Flip, ToastContainer } from "react-toastify";
import Dashboard from "./components/dashboard";
import ForgotPassword from "./components/ForgotPassword";
import RequireAuth from "./RequireAuth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <ToastContainer transition={Flip} />
        <Routes>
          <Route path="/login" Component={() => <Login />} />
          <Route path="/password/forgot" Component={() => <ForgotPassword />} />
          <Route path="/" element={<RequireAuth />}>
            <Route path="" exact element={<Dashboard />} />
          </Route>
          {/* <Route path="/" exact Component={() => <Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
