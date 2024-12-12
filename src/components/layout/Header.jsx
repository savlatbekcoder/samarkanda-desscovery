import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import open from "../../assests/icon/open.png";
import close from "../../assests/icon/close.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState({});

  const toggleDropdown = (id) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

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
          <li className="dropdown">
            <span
              className="dropdown-title"
              onClick={() => toggleDropdown("destinations")}
            >
              {`Destinations >`}
            </span>
            <ul
              className={`dropdown-menu ${
                dropdownState["destinations"] ? "show" : ""
              }`}
            >
              <div className="nav-row">
                <div className="nav-countries">
                  <h3>Countries</h3>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/tajikistan"}>
                      Tajikistan
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/kyrgyzstan"}>
                      Kyrgyzstan
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to={"/turkmenistan"}
                    >
                      Turkmenistan
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/kazakhstan"}>
                      Kazakhstan
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to={"/great-silk-road"}
                    >
                      The Great Silk Road
                    </Link>
                  </li>
                </div>
                <div className="nav-cities">
                  <h3>Cities</h3>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/tashkent"}>
                      Tashkent
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/samarkand"}>
                      Samarkand
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/bukhara"}>
                      Bukhara
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setMenuOpen(false)} to={"/khiva"}>
                      Khiva
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setMenuOpen(false)}
                      to={"/chakhriqbaz"}
                    >
                      Chakhrisabz
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
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
              width={"50px"}
              height={"50px"}
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
