import React from "react";
import Toolbar from "./Toolbar";
import FeatureList from "./FeatureList";
export default function FeatureProducts() {
  return (
    <div className="block block-products-carousel" data-layout="grid-5">
      <div className="container">
        <Toolbar></Toolbar>
        <FeatureList></FeatureList>
      </div>
    </div>
  );
}
