import React, { useEffect } from "react";
import Products from "./Products";
const ProductList = (props) => {
  
  return (
    <React.Fragment>
      <h2>{props.catagoryHeader}</h2>
      {props.details.map((item) => (
        <Products
          id={item.id}
          price={item.price}
          name={item.name}
          catagory={item.catagory}
          
        />
      ))}
    </React.Fragment>
  );
};
export default ProductList;
