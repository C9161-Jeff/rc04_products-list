import ProductCard from "./ProductCard";
import "./Products.scss";

import React from "react";

const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="products-list">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;