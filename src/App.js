import React, { useState } from "react";
import Input from "./components/Input";
import ProductList from "./components/ProductList";
const initialProducts = [];

const App = () => {
  const [productDetail, setProductDetail] = useState(initialProducts);
  const [foodProductDetail, setFoodProductDetail] = useState(initialProducts);
  const [cosmoticDetail, setCosmoticDetail] = useState(initialProducts);
  const isElectronics = true;
  const isfood = true;
  const isSkinCare = true;
  const eventHandler = (product) => {
    if (product.catagory == "Electronics") {
      setProductDetail((detail) => {
        return [product, ...detail];
      });
    } else if (product.catagory == "food") {
      setFoodProductDetail((detail) => {
        return [product, ...detail];
      });
    } else if (product.catagory == "SkinCare Items") {
      setCosmoticDetail((detail) => {
        return [product, ...detail];
      });
    }
  };

  return (
    <React.Fragment>
      <Input onSubmitHandler={eventHandler} />
      <h1>Products</h1>
      {isElectronics && (
        <ProductList
          catagoryHeader="Electronics Products"
          details={productDetail}
        />
      )}
      {isfood && (
        <ProductList
          catagoryHeader="Food Products"
          details={foodProductDetail}
        />
      )}
      {isSkinCare && (
        <ProductList
          catagoryHeader="SkinCare Products"
          details={cosmoticDetail}
        />
      )}
    </React.Fragment>
  );
};

export default App;
