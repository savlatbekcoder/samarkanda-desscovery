import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img404 from "../../assests/bg/404.jpg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <center>
      <br />
      <LazyLoadImage effect="blur" src={img404} width={"70%"} alt="not found" />
      <h1 style={{ color: "red", marginTop: "-50px" }}>Page not found</h1>
      <Link to="/" style={{ textDecoration: "none", fontSize: "19px" }}>
        {"<"} back home
      </Link>
      <br />
      <br />
    </center>
  );
}
