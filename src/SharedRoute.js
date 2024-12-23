import { Navigate, Outlet } from "react-router-dom";
import Footer from "./components/footers/FiveColumnWithBackground";
import { useSelector } from "react-redux";
const SharedRoute = () => {
  const { isLogin } = useSelector((state) => state.AppSlice);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={{ width: "100%" }}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedRoute;
