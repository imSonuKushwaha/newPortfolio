import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
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
            <Link
              to="/"
              style={{
                color: location.pathname === "/" ? "#e76a10" : "inherit",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/intro"
              style={{
                color: location.pathname === "/intro" ? "#e76a10" : "inherit",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="/experiences"
              style={{
                color:
                  location.pathname === "/experiences" ? "#e76a10" : "inherit",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/11lWX4ELR2-d9rZvdWHJPv9WNfszi9zdN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
