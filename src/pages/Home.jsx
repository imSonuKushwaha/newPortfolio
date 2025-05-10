import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center">
          <svg viewBox="0 0 400 160">
            <text
              x="50%"
              y="50%"
              dy="0.32em"
              textAnchor="middle"
              className="text-body"
            >
              SONU
            </text>
          </svg>
        </div>

        <Header />
      </div>
    </>
  );
};

export default Home;
