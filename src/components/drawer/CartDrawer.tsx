import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import Icon from "./Icon";
import { cartActions } from "../../redux/slices/cart";
import { Item } from "../../types/types";

type Anchor = "right";

export default function CartIcon() {
  const [state, setState] = React.useState({
    right: false,
  });
  const cartValue = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  function increment(item: Item) {
    dispatch(cartActions.increment(item));
  }

  function decrement(item: Item) {
    dispatch(cartActions.decrement(item));
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250, maxHeight: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Icon />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              style: {
                minWidth: 200,
                maxHeight: 500,
              },
            }}
          >
            <p>My Cart</p>
            {cartValue.map((item) => {
              return (
                <div>
                  <img
                    src={item.cartitems.api_featured_image}
                    alt=""
                    style={{ width: 150, height: 150 }}
                  />
                  <p>{item.cartitems.name}</p>
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
                </div>
              );
            })}
            <br />
            <Link
              to={`/cart`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button
                aria-label="share"
                variant="contained"
                className="cart-btn-addtocart"
                sx={{ backgroundColor: "cadetblue" }}
              >
                Go to Cart
              </Button>
            </Link>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
