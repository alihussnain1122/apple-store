import React from "react";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";
import CategoryBrowser from "../components/CatagoryBrowser";
import ProductGrid from "../components/ProductGrid";
import BigSummerSale from "../components/BigSummerSale";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <CategoryBrowser />
      <ProductGrid />
      <BigSummerSale />
    </>
  );
};
export default Home;
