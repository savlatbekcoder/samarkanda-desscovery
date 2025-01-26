import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import open from "../../assests/icon/open.png";
import close from "../../assests/icon/close.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

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
      <nav className="container notranslate">
        <div className="logo">
          <Link onClick={() => setMenuOpen(false)} to={"/"}>
            <img src="/logo.png" alt="Samarkand Discovery" />
          </Link>
        </div>

        <ul className={`navigation ${menuOpen ? "open" : "hide"}`}>
          <li>
            <Link onClick={() => setMenuOpen(false)} to={"/"}>
              Home
            </Link>
          </li>
          <li
            className="dropdown-wrapper"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link
              className="desti_link"
              to="#"
              onClick={() => setMenuOpen(false)}
            >
              Destinations <i className="fa-solid fa-angle-right"></i>
            </Link>
            {dropdownOpen && (
              <ul className="dropdown">
                <div onClick={toggleDropdown} className="back_button">
                  <i className="fa-solid fa-angle-left"></i> back
                </div>

                <li className="submenu-item">
                  <Link to="/destinations/uzbekistan">
                    Uzbekistan <i className="fa-solid fa-angle-right"></i>
                  </Link>
                  <div></div>
                  <ul className="submenu">
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/tashkent"
                      >
                        Tashkent
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/samarkand"
                      >
                        Samarkand
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/bukhara"
                      >
                        Bukhara
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/khiva"
                      >
                        Khiva
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/shakhrisabz"
                      >
                        Chakhrisabz
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/nurata"
                      >
                        Nurata
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/ferghanavalley"
                      >
                        Ferghana Valley
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/nukus"
                      >
                        Nukus
                      </Link>
                    </li>
                    <li className="nonBordered">
                      <Link
                        onClick={() => {
                          toggleDropdown();
                          toggleMenu();
                        }}
                        to="/destinations/termiz"
                      >
                        Termiz
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/destinations/tajikistan"
                  >
                    Tajikistan
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/destinations/kyrgyzstan"
                  >
                    Kyrgyzstan
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/destinations/turkmenistan"
                  >
                    Turkmenistan
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/destinations/kazakhstan"
                  >
                    Kazakhstan
                  </Link>
                </li>
                <li className="nonBordered">
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/destinations/thegreatsilkroad"
                  >
                    The Great Silk Road
                  </Link>
                </li>
              </ul>
            )}
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
        <div className="action"></div>
      </nav>
    </header>
  );
}

export default Header;
