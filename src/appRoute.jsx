import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
