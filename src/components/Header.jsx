import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isMenuOpen) {
      rootElement.setAttribute("menu-open", "");
    } else {
      rootElement.removeAttribute("menu-open");
    }
  }, [isMenuOpen]);
  return (
    <div>
      <div className="relative z-[100] flex items-center justify-center text-center mt-2">
        <div id="flex flex-1 justify-start">
          <div id="menu-button">
            <button
              className="button"
              id="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div id="menu-container">
        <ul className="unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/intro">Introduction</Link>
          </li>
          <li>
            <Link to="/Tour">Experiences</Link>
          </li>
          <li>
            <Link to="/Travel">Resume</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
