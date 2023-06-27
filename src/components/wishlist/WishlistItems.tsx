import React from "react";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { Item } from "../../types/types";
import Wishlistcard from "./Wishlistcard";
import wish from "../../images/3_copy.png";

export default function WishlistItems() {
  const wishlistValue = useSelector(
    (state: RootState) => state.product.wishlist
  );

  return (
    <div>
      <div className="emptyDiv"></div>
      <h2>My Wishlist</h2>
      {wishlistValue.length === 0 ? (
        <div className="empty-cart">
          <img src={wish} alt="cart icon" />
          <div>
            <h2>Wishlist is empty</h2>
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
        <Grid container spacing={0} className="cardGrid">
          {wishlistValue.map((item: Item) => {
            return (
              <div>
                <Grid item key={item.id} xs>
                  <Wishlistcard key={item.id} item={item} />
                </Grid>
              </div>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
