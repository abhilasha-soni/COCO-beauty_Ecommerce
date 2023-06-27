import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";

import "./App.css";
import Navbar from "./components/navBar/NavBar";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./components/products/ProductDetails";
import Category from "./components/categories/Category";
import CartIcon from "./components/drawer/CartDrawer";
import Brands from "./components/categories/Brands";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#333" : "#fff",
      },
      text: {
        primary: darkMode ? "#fff" : "#000",
      },
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar onThemeChange={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/productDetails" element={<ProductDetails />}></Route>
          <Route
            path="/product/product_type/:product_type"
            element={<Category />}
          ></Route>
          <Route path="/product/brand/:brand" element={<Brands />}></Route>
        </Routes>
        <CartIcon />
        <Footer darkMode={darkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
