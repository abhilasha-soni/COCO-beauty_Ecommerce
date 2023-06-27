import React from "react";
import HomepageDetails from "../components/homePage/HomepageDetails";
import AllCategories from "../components/categories/AllCategories";

export default function HomePage() {
  return (
    <div>
     <AllCategories/>
      <HomepageDetails />
    </div>
  );
}
