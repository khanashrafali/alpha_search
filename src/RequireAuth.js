import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const expiry = Math.floor(
    new Date(localStorage.getItem("EXPIRED_AT")).getTime() / 1000
  );
  const currentTime = Math.floor(new Date().getTime() / 1000);

  let message = "";

  if (expiry && currentTime > expiry) {
    localStorage.clear();
    localStorage.setItem("message", "Token Expired");
  }
  if (message || (!token && location.pathname !== "/login")) {
    return <Navigate to="/login" state={{ from: location, message }} replace />;
  }
  if (
    (location.pathname === "/login" ||
      location.pathname === "/password/forgot") &&
    token &&
    currentTime <= expiry
  ) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
