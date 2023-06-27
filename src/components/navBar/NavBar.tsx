import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Switch } from "@mui/material";

import { RootState } from "../../redux/store";
import logo from "../../images/logo.png";
import home from "../../images/1.png";
import products from "../../images/2.png";
import wish from "../../images/3.png";
import cart from "../../images/4.png";
import "./NavBar.css";
import AllCategories from "../categories/AllCategories";

type Props = {
  onThemeChange: () => void;
  darkMode: boolean;
};

export default function Navbar({ onThemeChange, darkMode }: Props) {
  const navBarStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
  };

  const wishlistValue = useSelector(
    (state: RootState) => state.product.wishlist
  );

  const cartValue = useSelector((state: RootState) => state.cart.items);

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar className="navbar-toolbar" style={navBarStyle}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="toolbar-logo">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" className="navbar-logo" />
              </IconButton>
            </div>
          </Link>
          <div className="toggle-button">
            <p>Light</p>
            <Switch onClick={onThemeChange} />
            <p>Dark</p>
          </div>

          <div className="iconsBar">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <IconButton
                className="navBar-cart"
                size="large"
                aria-label="home"
                color="inherit"
              >
                <img src={home} alt="home" className="navbar-icons" />
              </IconButton>
            </Link>
            <Link
              to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                className="navBar-cart"
                size="large"
                aria-label="home"
                color="inherit"
              >
                <img src={products} alt="home" className="navbar-icons" />
              </IconButton>
            </Link>
            <Link
              to="/wishlist"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                className="navBar-cart"
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <div>
                  <Badge
                    badgeContent={<p>{wishlistValue.length}</p>}
                    color="error"
                  >
                    <img src={wish} alt="home" className="navbar-icons" />
                  </Badge>
                </div>
              </IconButton>
            </Link>

            <Link
              to="/cart"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <IconButton
                className="navBar-cart"
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <div>
                  <Badge badgeContent={<p>{cartValue.length}</p>} color="error">
                    <img src={cart} alt="home" className="navbar-icons" />
                  </Badge>
                </div>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
        <Toolbar className="navBar-bottom-toolbar" style={navBarStyle}>
          <AllCategories />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
