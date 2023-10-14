import React from "react";
import Products from "./Products";
const ProductList=(props)=>
{
return (
    <React.Fragment>
        {console.log(props.details)}
    {props.details.map((item)=>{
     <Products id={item.id} price={item.price} name={item.name} catagory={item.catagory}/>
    })}
    </React.Fragment>
)
}
export default ProductList;