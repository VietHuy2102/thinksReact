import React from "react";
import ProductItem from "./ProductItem";

export default function Product({products}) {
  return (
    <div>
      {products.map((productItem) => (
        <ProductItem
          key={productItem.id}
          name={productItem.name}
          category={productItem.category}
          price={productItem.price}
          stocked={productItem.stocked}
        />
      ))}
    </div>
  );
}
