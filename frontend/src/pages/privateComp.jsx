import { Outlet } from "react-router";
import { Navigate } from "react-router";

export default function PrivateComp() {
    const auth = localStorage.getItem("email");
    return auth ? <Outlet /> : <Navigate to="/login" />;
}   