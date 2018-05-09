import React from "react";
import NavBar from "components/NavBar";
import styled from "styled-components";
import Hero from "components/hero";
import FeaturedProduct from "components/featured-product";
import Newsletter from "components/newsletter";
import RecentPosts from "components/recent-posts";
import Footer from "components/footer";

const Home = () => (
  <div>
    <NavBar />
    <Hero title="Seeing for Ourselves" text="lorem ipsum" />
    <FeaturedProduct topHeadline="" title="" text="" />
    <Newsletter />
    <RecentPosts />
    <Footer />
  </div>
);

export default Home;
