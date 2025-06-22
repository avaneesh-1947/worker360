import { Outlet, Navigate } from "react-router-dom";

const PrivateComp = () => {
  const auth = localStorage.getItem("email"); // <-- Move inside the function
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComp;
