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
              <i class="fa-solid fa-phone"></i> +998 90 943 09 80
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> silkroadtourisme@gmail.com
            </p>
            <p>
              <i class="fa-solid fa-location-dot"></i> 2/7, st., Akhmad Danish,
              Tashkent 100180, Uzbekistan
            </p>
            <p>
              <i class="fa-solid fa-clock"></i> We are online 24/7
            </p>
          </div>
          <div className="child">
            <h3>Social Networks</h3>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
