import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Item } from "../../types/types";
import "./Wishlist.css";
import { cartActions } from "../../redux/slices/cart";

import { Link } from "react-router-dom";

type Prop = {
  item: Item;
};

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch();

  function cartItems(cartItem: Item) {
    dispatch(cartActions.addToCart(cartItem));
  }


  return (
    <div>
      <Card className="card" sx={{ width: 345, maxHeight: 550 }}>
        <CardMedia
          component="img"
          image={item.api_featured_image}
          alt={item.name}
          sx={{ width: 200, height: 200 }}
        />

        <CardContent>
          <Typography>{item.name}</Typography>
          <Typography>{item.product_type}</Typography>
          <Typography>
            Price: {item.price_sign}
            {item.price}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart-details"
            sx={{ backgroundColor: "cadetblue" }}
            onClick={() => cartItems(item)}
          >
            <ShoppingCartOutlinedIcon />
            <p className="cart-text">Add To Cart</p>
          </Button>
          <Link
            to="/products"
            style={{ color: "inherit", textDecoration: "none" }}
            className="cart-btn-addtocart-details"
          >
            <Button
              aria-label="share"
              variant="contained"
              className="cart-btn-addtocart-details"
              sx={{ backgroundColor: "cadetblue", fontSize: 18 }}
            >
              Continue shopping
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
