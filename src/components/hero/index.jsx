import React from "react";
import "./style.css";

export default function Hero({ image, text }) {
  console.log(image);

  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="con-bg">
        <div>
          {text ? (
            <h1>{text}</h1>
          ) : (
            <>
              <h1 class="notranslate">Samarcanda Discovery</h1>
              <p>Welcome to Uzbekistan</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
