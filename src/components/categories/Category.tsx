import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import { Item } from "../../types/types";
import ProductCard from "../products/ProductCard";

export default function Category() {
  const [category, setCategory] = useState<Item[]>();
  const result = useParams();
  const url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${result.product_type}`;

  useEffect(() => {
    function getProductDetail() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCategory(data))
        .catch((error) => console.log(error));
    }
    getProductDetail();
  }, [url]);

  return (
    <div>
      Category
      <div className="emptyDiv"></div>
      <Grid container spacing={0} className="cardGrid">
        {category &&
          category.map((item: Item) => {
            return (
              <div>
                <Grid item key={item.id} xs>
                  <ProductCard key={item.id} item={item} />
                </Grid>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}
