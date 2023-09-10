import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import ScrollTop from "../Components/ScrollTop";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ScrollTop></ScrollTop>
      <Footer></Footer>
    </div>
  );
};
export default Main;
