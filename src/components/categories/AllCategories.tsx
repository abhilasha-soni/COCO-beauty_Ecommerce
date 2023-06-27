import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import { AppDispatch, RootState } from "../../redux/store";
import { fetchData } from "../../redux/thunk/product";
import "./Categories.css";

const itemHeight = 48;

export default function AllCategories() {
  const makeup = useSelector((state: RootState) => state.product.makeup);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const uniqueArr = [...new Set(makeup.map((item) => item.product_type))];
  const uniqueArr1 = [...new Set(makeup.map((item) => item.brand))];

  console.log(uniqueArr, "array");
  console.log(uniqueArr1, "brand");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="container">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
          <p className="appBar-toolbar-brands">Brands</p>
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: itemHeight * 10,
                width: "20ch",
              },
            },
          }}
        >
          {uniqueArr1?.map((option) => {
            return (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                <Link
                  to={`/product/brand/${option}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {option}
                </Link>
              </MenuItem>
            );
          })}
        </Menu>

        {uniqueArr.map((item) => {
          const name = item
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
          return (
            <div className="item">
              <Link
                to={`/product/product_type/${item}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <p className="appBar-toolbar">{name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
