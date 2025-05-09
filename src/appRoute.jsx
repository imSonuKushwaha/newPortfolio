import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<About />} />
    </Routes>
  );
};

export default AppRoute;
