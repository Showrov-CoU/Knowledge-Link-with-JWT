import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <div className="leading-8 tracking-wider">
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar></Navbar>
      </div>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;
