import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default Mainlayout;
