import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const expiry = Math.floor(
    new Date(localStorage.getItem("EXPIRED_AT")).getTime() / 1000
  );
  const currentTime = Math.floor(new Date().getTime() / 1000);

  console.log({ expiry, currentTime });

  let message = "";

  if (expiry && currentTime > expiry) {
    localStorage.clear();
    localStorage.setItem("message", "Token Expired");
  }
  if (message || !token) {
    return <Navigate to="/login" state={{ from: location, message }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
