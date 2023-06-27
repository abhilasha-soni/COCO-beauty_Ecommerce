import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

import { Item } from "../../types/types";
import { actions } from "../../redux/slices/product";
import { cartActions } from "../../redux/slices/cart";
import "../navBar/NavBar.css";
import { RootState } from "../../redux/store";
import Alert from "./Alert";

type Prop = {
  item: Item;
};

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch();

  function wishlistItem(wishlist: Item) {
    dispatch(actions.addToWishlist(wishlist));
  }
  function cartItems(cartItem: Item) {
    dispatch(cartActions.addToCart(cartItem));
  }

  function productDetails(item: Item) {
    dispatch(actions.productDetails(item));
  }

  const wishlist = useSelector((state: RootState) => state.product.wishlist);

  const inWishList = wishlist.find((wish: Item) => wish.id === item.id);

  return (
    <div>
      <Card className="card" sx={{ width: 345, maxHeight: 550 }}>
        <div className="card-top">
          {inWishList ? <Alert /> : null}
          <FavoriteIcon
            className="fav-icon"
            onClick={() => wishlistItem(item)}
            color={inWishList ? "error" : "action"}
          />
          <Link
            to="/productDetails"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <CardMedia
              component="img"
              image={item.api_featured_image}
              alt={item.name}
              sx={{ width: 200, height: 200 }}
              onClick={() => productDetails(item)}
            />
          </Link>
        </div>

        <CardContent sx={{ height: 100 }}>
          <Typography>{item.name}</Typography>
          <Typography>{item.product_type}</Typography>
          <Typography>{item.brand}</Typography>
          <Typography>
            Price: {item.price_sign}
            {item.price}
          </Typography>
        </CardContent>
        <CardActions className="card-btn">
          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart"
            sx={{ backgroundColor: "cadetblue" }}
            onClick={() => cartItems(item)}
          >
            <ShoppingCartOutlinedIcon />
            <p className="cart-text">Add to Cart</p>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
