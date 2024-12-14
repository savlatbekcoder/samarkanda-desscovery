import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import open from "../../assests/icon/open.png";
import close from "../../assests/icon/close.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("hiddin");
    } else {
      document.body.classList.remove("hiddin");
    }
  }, [menuOpen]);

  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Link onClick={() => setMenuOpen(false)} to={"/"}>
            <LazyLoadImage
              effect="blur"
              src="/logo.png"
              alt="Samarkand Discovery"
            />
          </Link>
        </div>

        <ul className={`navigation ${menuOpen ? "open" : "hide"}`}>
          <Link onClick={() => setMenuOpen(false)} to={"/"}>
            Home
          </Link>
          <li>
            <Link onClick={() => setMenuOpen(false)} to={"/detinations"}>
              Destinations
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to={"/tours"}>
              Tours
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <div className="action">
              {" "}
              <div id="google_translate_element"></div>
            </div>
          </li>
        </ul>

        <div className={menuOpen ? `open-menu menu` : `menu`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <LazyLoadImage
              width={"30px"}
              height={"30px"}
              src={menuOpen ? close : open}
              effect="blur"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
