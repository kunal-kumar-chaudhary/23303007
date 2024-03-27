import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  //  i'll search the product on the basis of name
  // considering name is "unique"

  // we are storing in the redux store all the products so as to minimize the number
  // of api calls to the server

  const { name } = useParams();
  const product = useSelector((state) =>
    state.product.products.find((product) => product.productName === name)
  );
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default Product;
