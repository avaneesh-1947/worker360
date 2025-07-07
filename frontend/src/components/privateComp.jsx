import { Outlet, Navigate } from "react-router-dom";

const PrivateComp = () => {
  const clientAuth = localStorage.getItem("email");
  const workerAuth = localStorage.getItem("username");
  return clientAuth || workerAuth ? <Outlet /> : <Navigate to="/landingPage" />;
};

export default PrivateComp;
