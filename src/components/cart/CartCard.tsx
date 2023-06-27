import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import "./Cartitems.css";
import { Item } from "../../types/types";
import { cartActions } from "../../redux/slices/cart";

type cart = {
  cartitems: Item;
  quantity: number;
};

type Prop = {
  item: cart;
};

export default function CartCard({ item }: Prop) {
  const dispatch = useDispatch();

  function increment(item: Item) {
    dispatch(cartActions.increment(item));
  }

  function decrement(item: Item) {
    dispatch(cartActions.decrement(item));
  }

  function deleteItem(item: Item) {
    dispatch(cartActions.deleteItem(item));
  }

  function itemValue(qty: number, price: string): number {
    return qty * parseFloat(price);
  }

  return (
    <div>
      <Card className="cart-item" sx={{ width: 1500, height: 150 }}>
        <CardMedia
          component="img"
          image={item.cartitems.api_featured_image}
          alt={item.cartitems.name}
          sx={{ width: 150, height: 150 }}
        />
        <CardContent className="cart-content">
          <Typography>{item.cartitems.name}</Typography>
          <Typography>Price: $ {item.cartitems.price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart-add"
            sx={{ backgroundColor: "cadetblue" }}
            onClick={() => increment(item.cartitems)}
          >
            <AddIcon />
          </Button>

          <p className="cart-text-add">{item.quantity}</p>

          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart-add"
            sx={{ backgroundColor: "cadetblue" }}
            onClick={() => decrement(item.cartitems)}
          >
            <RemoveIcon />
          </Button>
        </CardActions>
        <Typography>
          Total Amt: $ {itemValue(item.quantity, item.cartitems.price)}
        </Typography>

        <Button
          aria-label="share"
          variant="contained"
          className="cart-btn-addtocart-add"
          sx={{ backgroundColor: "cadetblue" }}
          onClick={() => {
            deleteItem(item.cartitems);
          }}
        >
          <DeleteIcon />
        </Button>
      </Card>
    </div>
  );
}
