import React from "react";
import image from "../../assests/icon/IMG_0188.jpeg";
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
              <img width="100%" height="230px" src={image} alt="image12" />
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
              <i className="fa-solid fa-location-dot"></i> Uzbekistan, Tashkent Yunusabad, Minor-MFY, Markaz-6, 70
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
              href="https://x.com/sam_voyages"
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
              href="https://t.me/samarcanda_discovery"
            >
              <i className="social_links fa-brands fa-telegram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/998909430980"
            >
              <i className="social_links fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="child">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.244630364902!2d69.281747!3d41.3310398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b854a8e73d3%3A0x70b5180b6dab161b!2sDRESS%20UP!%2C%204%20%D1%8D%D1%82%D0%B0%D0%B6%2C%20%D0%B3.%20%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%2C%20%D0%9C%D0%B0%D1%81%D1%81%D0%B8%D0%B2%20%D0%9C%D0%B8%D0%BD%D0%BE%D1%80%2C%20%D0%B4%D0%BE%D0%BC%2070%2C%20100017%2C%20Tashkent%2C%20%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD!5e0!3m2!1sen!2s!4v1731073670000!5m2!1sen!2s"
  width="100%"
  height="200"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
