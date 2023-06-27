import { useParams } from "react-router-dom";
import { actions } from "../slices/product";
import { AppDispatch } from "../store";
import { Item } from "../../types/types";


const url1 = "https://makeup-api.herokuapp.com/api/v1/products.json";

export function fetchData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url1);
    const productData = await response.json();
    dispatch(actions.productData(productData));
  };
}


