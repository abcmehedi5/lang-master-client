// import { Outlet } from "react-router-dom";
// import Footer from "../Pages/Shared/Footer/Footer";
// import Navbar from "../Pages/Shared/Navbar/Navbar";
// import ScrollTop from "../Components/ScrollTop";

// const Main = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Outlet></Outlet>
//       <ScrollTop></ScrollTop>
//       <Footer></Footer>
//     </div>
//   );
// };
// export default Main;

import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import LazyLoader from "../Components/LazyLoader/LazyLoader";
const LazyNavbar = lazy(() => import("../Pages/Shared/Navbar/Navbar"));
const LazyFooter = lazy(() => import("../Pages/Shared/Footer/Footer"));
const LazyScrollTop = lazy(() => import("../Components/ScrollTop/ScrollTop"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader></LazyLoader>}>
        <LazyNavbar />
        <Outlet />
        <LazyScrollTop />
        <LazyFooter />
      </Suspense>
    </div>
  );
};
export default Main;
