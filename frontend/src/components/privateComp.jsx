import { Outlet, Navigate } from "react-router-dom";

const PrivateComp = () => {
  const auth = localStorage.getItem("email");
  return auth ? <Outlet /> : <Navigate to="/landingPage" />;
};

export default PrivateComp;
