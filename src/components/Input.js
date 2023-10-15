import React, { useState } from "react";
const Input = (props) => {
  const [enteredProductId, setenteredProductId] = useState("");
  const [enteredSellingPrice, setenteredSellingPrice] = useState("");
  const [enteredProductName, setenteredProductName] = useState("");
  const [enteredcatagory, setenteredcatagory] = useState("");
  const productChageHandler = (e) => {
    e.preventDefault();
    setenteredProductId(e.target.value);
  };
  const priceChangeHandler = (e) => {
    e.preventDefault();
    setenteredSellingPrice(e.target.value);
  };
  const productNameHandler = (e) => {
    e.preventDefault();
    setenteredProductName(e.target.value);
  };
  const filteredcatagoryhandler = (e) => {
    e.preventDefault();
    setenteredcatagory(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: enteredProductId,
      price: enteredSellingPrice,
      name: enteredProductName,
      catagory: enteredcatagory,
    };
    localStorage.setItem(enteredProductId,JSON.stringify(obj))
    props.onSubmitHandler(obj);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Product Id:</label>
      <input type="number" onChange={productChageHandler} />
      <label>SellingPrice:</label>
      <input type="number" onChange={priceChangeHandler} />
      <label>Product Name:</label>
      <input type="text" onChange={productNameHandler} />
      <label>ChooseCatagory</label>
      <select onChange={filteredcatagoryhandler}>
        <option></option>
        <option>Electronics</option>
        <option>food</option>
        <option>SkinCare Items</option>
      </select>
      <button>Add Product</button>
    </form>
  );
};
export default Input;
