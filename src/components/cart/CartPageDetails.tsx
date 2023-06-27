import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import cart from "../../images/4_copy.png";
import { RootState } from "../../redux/store";
import "./Cartitems.css";
import CartCard from "./CartCard";
import CartPayment from "./CartPayment";

export default function CartPageDetails() {
  const cartValue = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <div className="emptyDiv"></div>
      <h2 className="header">My cart</h2>
      <br />
      {cartValue.length === 0 ? (
        <div className="empty-cart">
          <img src={cart} alt="cart icon" />
          <div>
            <h2>Cart is empty</h2>
            <Link
              to={`/products`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button
                aria-label="share"
                variant="contained"
                className="cart-btn-addtocart"
                sx={{ backgroundColor: "cadetblue" }}
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-Page">
          <Grid container spacing={0}>
            {cartValue.map((item) => {
              return (
                <div>
                  <Grid item key={item.cartitems.id} xs>
                    <CartCard key={item.cartitems.id} item={item} />
                  </Grid>
                </div>
              );
            })}
          </Grid>
          <CartPayment />
        </div>
      )}
    </div>
  );
}
