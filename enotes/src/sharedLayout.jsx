import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
const SharedLayout = () => {
  return (
    <div className="topElement">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
export default SharedLayout;
