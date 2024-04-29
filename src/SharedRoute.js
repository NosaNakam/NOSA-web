import { Outlet } from "react-router-dom";
import Footer from "./components/footers/FiveColumnWithBackground";
const SharedRoute = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedRoute;
