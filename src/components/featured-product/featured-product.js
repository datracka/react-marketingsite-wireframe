import React from "react";
import "./featured-product.css";

const FeaturedProduct = props => (
  <section className="flex justify-center align-center w-full h-48 bg-grey-light">
    <img src="#" alt="" />
    <p>{props.topHeadline}</p>
    <p>{props.title}</p>
    <p>{props.text}</p>
  </section>
);

export default FeaturedProduct;
