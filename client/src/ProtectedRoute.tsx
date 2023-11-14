import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuth: boolean = localStorage.getItem("isLogged");

  return isAuth != true ? <Navigate to="login" /> : <Outlet />;
};

export default ProtectedRoute;
