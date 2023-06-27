import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

import "./Footer.css";
import logo from "../../images/logo2.png";

type Props = {
  darkMode: boolean;
};

export default function Footer({ darkMode }: Props) {
  const footerStyle = {
    backgroundColor: darkMode ? "#fff" : "#333",
    color: darkMode ? "#333" : "#fff",
  };
  return (
    <div className="footer" style={footerStyle}>
      <div className="footer-pages">
        <h4>Pages</h4>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <p className="brand-title"> Home</p>
        </Link>
        <Link
          to="/products"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="brand-title">Products</p>
        </Link>
        <Link
          to="/wishlist"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="brand-title">Wishlist</p>
        </Link>
        <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
          <p className="brand-title">Cart</p>
        </Link>
      </div>{" "}
      <div className="footer-categories">
        <h4>Categories</h4>
        <Link
          to={`/product/product_type/${"lipstick"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="brand-title"> Listicks</p>
        </Link>
        <Link
          to={`/product/product_type/${"lip_liner"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="brand-title">Lip liners</p>
        </Link>
        <Link
          to={`/product/product_type/${"eyeliner"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="brand-title">Eyeliners</p>
        </Link>
        <Link
          to={`/product/product_type/${"eyeshadow"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <p className="brand-title">eyeshadows</p>
        </Link>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
      <div className="footer-contactus">
        <h4>Contact us</h4>
        <p>The Retails therephy</p>
        <p>Aprilvagen 3</p>
        <p> Jarfalla</p>
        <p>Greater Stockholm, 177 61</p>
        <div className="footer-socialmedia-icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
}
