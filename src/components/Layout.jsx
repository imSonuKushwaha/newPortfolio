import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative w-full h-dvh overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
