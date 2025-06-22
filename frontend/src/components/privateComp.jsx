import { Outlet, Navigate } from "react-router";
const auth = localStorage.getItem("email");

const PrivateComp = () => {
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateComp;
