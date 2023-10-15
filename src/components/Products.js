import React, { useRef } from "react";
const Products = (props) => {
  const parentRef = useRef(props);
  const deleteHandler = () => {
    const child = parentRef.current.firstChild;
    parentRef.current.removeChild(child);
    localStorage.removeItem(props.id);
  };

  return (
    <ul ref={parentRef}>
      <li>
        {`Rs ${props.price}-${
          props.catagory.charAt(0).toUpperCase() + props.catagory.slice(1)
        }-${props.name.charAt(0).toUpperCase() + props.name.slice(1)}`}
        <button onClick={deleteHandler}>DeleteProduct</button>
      </li>
    </ul>
  );
};
export default Products;
