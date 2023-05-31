import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./components/login";
import { Flip, ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard.js";
import ForgotPassword from "./components/ForgotPassword";
import RequireAuth from "./RequireAuth";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

function App() {
  // const location = useLocation();
  // const shouldShowHeader = !["/login", "/password/forgot"].includes(
  //   location.pathname
  // );
  return (
    <>
      <Router>
        <ToastContainer transition={Flip} />
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<RequireAuth />}>
            <Route path="/login" Component={() => <Login />} />
            <Route
              path="/password/forgot"
              Component={() => <ForgotPassword />}
            />
            <Route path="" exact element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

const ConditionalHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log({ pathname });
  const shouldShowHeader = !["/login", "/password/forgot"].includes(pathname);
  return shouldShowHeader ? <Header /> : null;
};

export default App;
