import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div className="leading-8 tracking-wider">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <div className="z-20">
        <Toaster position="top-right"></Toaster>
      </div>
    </div>
  );
};

export default Main;
