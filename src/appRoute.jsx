import Home from "./pages/Home";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Experiences from "./pages/Experiences";
import Intro from "./pages/Intro";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/experiences" element={<Experiences />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
