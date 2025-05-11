import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative w-full h-[calc(100vh-40px)] overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
