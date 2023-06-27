import React from "react";
import { Link } from "react-router-dom";

import ImageSlider from "../slider/ImageSlider";
import img2 from "../../images/101.png";
import img3 from "../../images/102.png";
import img4 from "../../images/103.png";
import img5 from "../../images/104.png";
import img6 from "../../images/105.png";
import img7 from "../../images/106.png";
import img8 from "../../images/107.png";
import img9 from "../../images/108.png";
import img10 from "../../images/109.png";
import img11 from "../../images/110.png";
import "./Homepage.css";

export default function HomepageDetails() {
  return (
    <div>
      <ImageSlider />
      <div className="homePageImageIconsContainer">
        <h1 className="header">Shop by Categories</h1>
        <div className="homePageImageIcons">
          <Link
            to={`/product/product_type/${"eyeliner"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img2} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"eyeshadow"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img3} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"lipstick"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img4} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"foundation"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img5} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"lip_liner"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img6} alt="logo" />
          </Link>
        </div>
        <div className="homePageImageIcons">
          <Link
            to={`/product/product_type/${"blush"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img7} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"bronzer"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img8} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"mascara"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img9} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"eyebrow"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img11} alt="logo" />
          </Link>
          <Link
            to={`/product/product_type/${"nail_polish"}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img className="homePageImage" src={img10} alt="logo" />
          </Link>
        </div>

      </div>
    </div>
  );
}
