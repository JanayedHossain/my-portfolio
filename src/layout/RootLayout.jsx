import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";

const RootLayout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
