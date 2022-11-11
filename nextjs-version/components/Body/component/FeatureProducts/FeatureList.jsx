import React from "react";
import FeatureItem from "./FeatureItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function FeatureList() {
  return (
    <div className="block-products-carousel__carousel">
      <div className="block-products-carousel__carousel-loader" />
      <OwlCarousel className="owl-theme" items="5">
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
        <FeatureItem></FeatureItem>
      </OwlCarousel>
    </div>
  );
}
