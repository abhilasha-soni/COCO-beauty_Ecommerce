import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import cart from "../../images/4_copy.png";

export default function FloatingActionButtons() {
  const cartValue = useSelector((state: RootState) => state.cart.items);
  return (
    <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ backgroundColor: "white", width: 100, height: 100 }}
      >
        <div>
          <Badge
            badgeContent={<p>{cartValue.length}</p>}
            color="error"
            overlap="circular"
          >
            <img src={cart} alt="home" className="navbar-icons" />
          </Badge>
        </div>
      </Fab>
    </Box>
  );
}
