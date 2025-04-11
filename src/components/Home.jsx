import React from "react";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";
import CategoryBrowser from "../components/CatagoryBrowser";
import ProductGrid from "../components/ProductGrid";
import BigSummerSale from "../components/BigSummerSale";

const Home = () => {
  return (
    <main className="flex flex-col gap-16 md:gap-24 px-4 md:px-10 lg:px-20 overflow-x-hidden">
      <HeroSection />
      <ProductShowcase />
      <CategoryBrowser />
      <ProductGrid />
      <BigSummerSale />
    </main>
  );
};

export default Home;
