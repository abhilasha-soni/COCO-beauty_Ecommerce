import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import "./Cartitems.css";
import { Item } from "../../types/types";

export default function CartPayment() {
  const item = useSelector((state: RootState) => state.cart);

  const itemTotal = () => {
    let totalQty = 0;
    let totalPrice = 0;
    item.items.forEach((price) => {
      totalQty += price.quantity;
      totalPrice += parseInt(price.cartitems.price) * price.quantity;
    });
    return { totalPrice, totalQty };
  };

  return (
    <div>
      <h2 className="header">Order Summary</h2> <br />
      <div className="payment-container">
        <img src={logo} alt="logo" className="payment-logo" />

        <div className="payment-total-details">
          <Card className="cart-item-payment" sx={{ width: 800 }}>
            <div>
              <h4>Total No. of products: {itemTotal().totalQty} </h4>

              <h4>Total: $ {itemTotal().totalPrice} </h4>
              <br />
              <Button
                aria-label="share"
                variant="contained"
                className="cart-btn-addtocart"
                sx={{ backgroundColor: "cadetblue" }}
              >
                Proceed to Checkout
              </Button>
            </div>
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

            <p>Tracked shipping on all orders</p>
            <p>14 days return</p>

            <p>
              By clicking the checkout button above, you agree to the terms and
              conditions and privacy policy.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
