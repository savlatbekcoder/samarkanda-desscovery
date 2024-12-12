import React from "react";
import "./style.css";

export default function Hero({ image }) {
  console.log(image);

  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="con-bg">
        <div>
          <h1>Samarcanda Discovery</h1>
          <p>Welcome to Uzbekistan</p>
        </div>
      </div>
    </section>
  );
}
