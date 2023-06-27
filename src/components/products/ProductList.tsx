import React, { useEffect, useState } from "react";
import { fetchData } from "../../redux/thunk/product";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { AppDispatch, RootState } from "../../redux/store";
import { Item } from "../../types/types";
import ProductCard from "./ProductCard";
import "./Products.css";

import Loading from "../loading/Loading";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.product.makeup);
  const isLoading = useSelector((state: RootState) => state.product.isLoading);

  const [userInput, setUserInput] = useState(" ");
  const [sortBy, setSortBy] = useState("name");
  const [productsPage, setProductsPage] = useState(1);

  const dispatch = useDispatch<AppDispatch>();

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }
  const result = products.filter((item) =>
    item.name.toLowerCase().includes(userInput.toLowerCase())
  );

  let sortedList = [...result];
  if (sortBy === "price") {
    sortedList.sort(
      (a: Item, b: Item) => parseInt(a.price) - parseInt(b.price)
    );
  } else if (sortBy === "pricereverse") {
    sortedList.sort(
      (a: Item, b: Item) => parseInt(b.price) - parseInt(a.price)
    );
  } else if (sortBy === "namereverse") {
    sortedList.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="Loading">
        <div className="emptyDiv"></div>
        <Loading />
      </div>
    );
  }

  const itemsPerPage = 40;

  const startIndex = (productsPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productList = sortedList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setProductsPage(newPage);
  };

  return (
    <div>
      <Box>
        <TextField
          id="outlined-basic"
          label="Search products"
          variant="outlined"
          sx={{ width: 500, marginRight: 50 }}
          onChange={onChangeHandler}
        />
        <FormControl
          variant="outlined"
          sx={{ minWidth: 120, marginLeft: "auto" }}
        >
          <InputLabel id="sort-label">Sort By</InputLabel>
          <Select
            labelId="sort-label"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            label="Sort By"
          >
            <MenuItem value="name">A to Z</MenuItem>
            <MenuItem value="price">Lowest to Highest</MenuItem>
            <MenuItem value="namereverse">Z to A</MenuItem>
            <MenuItem value="pricereverse">Highest to lowest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={0} className="cardGrid">
        {productList.map((item: Item) => {
          return (
            <div>
              <Grid item key={item.id} xs>
                <ProductCard key={item.id} item={item} />
              </Grid>
            </div>
          );
        })}
      </Grid>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={productsPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
function parseFloat(price: any) {
  throw new Error("Function not implemented.");
}
