import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="leading-8 tracking-wider">
      <div className="max-w-screen-xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
