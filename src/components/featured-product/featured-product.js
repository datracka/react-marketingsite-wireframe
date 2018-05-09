import React from "react";
import "./featured-product.css";

const FeaturedProduct = props => (
  <section className="featuredProduct">
    <img src="#" alt="" />
    <p>{props.topHeadline}</p>
    <p>{props.title}</p>
    <p>{props.text}</p>
  </section>
);

export default FeaturedProduct;
