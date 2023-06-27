import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button, CardMedia } from "@mui/material";

import { RootState } from "../../redux/store";
import { Item } from "../../types/types";
import { cartActions } from "../../redux/slices/cart";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const details = useSelector(
    (state: RootState) => state.product.productDetails
  );
  const dispatch = useDispatch();

  function cartItems(cartItem: Item) {
    dispatch(cartActions.addToCart(cartItem));
  }

  return (
    <div>
      <div className="emptyDiv"></div>

      <div className="product-details-card">
        <div>
          <CardMedia
            component="img"
            image={details.api_featured_image}
            alt={details.name}
            sx={{ width: 400, height: 400 }}
            className="product-details-card-img"
          />
        </div>

        <div className="product-details-card-text">
          <h4>{details.name}</h4>
          <br />
          <h3>{details.brand}</h3>
          <p>{details.description}</p>
          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart-details"
            sx={{ backgroundColor: "cadetblue" }}
            onClick={() => cartItems(details)}
          >
            <ShoppingCartOutlinedIcon />
            <p className="cart-text">Add to Cart</p>
          </Button>
          <Link
            to="/products"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button
              aria-label="share"
              variant="contained"
              className="cart-btn-addtocart-details"
              sx={{ backgroundColor: "cadetblue" }}
            >
              Continue shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
