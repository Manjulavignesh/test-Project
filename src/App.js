import React,{useState} from "react";
import Input from "./components/Input";
import ProductsCatagory from "./components/ProductsCatagory";
import ProductList from "./components/ProductList";
const initialProducts=[];
const App=()=> {
  const [productDetail,setProductDetail]=useState(initialProducts);
  const eventHandler=(product)=>
  {
    setProductDetail((detail)=>{
      return [product, ...detail];
    })
  }
  return (
    <React.Fragment>
    <Input onSubmitHandler={eventHandler}/>
    <ProductList details={productDetail}/>
    </React.Fragment>
  );
}

export default App;
