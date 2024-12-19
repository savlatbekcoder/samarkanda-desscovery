import React from "react";
import image from "../../assests/icon/petit-fute.jpg";
import "./style.css";

export default function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-row">
          <div className="child">
            <a
              href="https://www.petitfute.co.uk/v53147-tachkent/c1122-voyage-transports/c747-tours-operateurs/652321-mansur-bazarbaev.html"
              about="_blank"
            >
              <img src={image} alt="image12" />
            </a>
            <p>
              Discovery crossroads of the Great Silk Road with Samarcanda
              Discovery
            </p>
          </div>
          <div className="child">
            <h3>Contacts</h3>
            <p>
              <i className="fa-solid fa-phone"></i> +998 90 943 09 80
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              silkroadtourisme@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> 2/7, st., Akhmad
              Danish, Tashkent 100180, Uzbekistan
            </p>
            <p>
              <i className="fa-solid fa-clock"></i> We are online 24/7
            </p>
          </div>
          <div className="child">
            <h3>Social Networks</h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/samarcanda_discovery/"
            >
              <i className="social_links fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://x.com/mansur_baz?s=11"
            >
              <i className="social_links fa-brands fa-twitter"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/samarcandadiscovery/"
            >
              <i className="social_links fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/travels_uzbekistan"
            >
              <i className="social_links fa-brands fa-telegram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/998977541680"
            >
              <i className="social_links fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
