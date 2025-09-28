import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const {name,price,description,features}=pricing
  return (
    <div className="flex flex-col border bg-amber-600 rounded-2xl p-4">
      {/* Card Header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-4xl">{price}</h4>
      </div>

      {/* Card body  & here feature is a array*/}

      <div className="flex-1 bg-amber-400 p-4 rounded-2xl mt-5">
     <p className="">{description}</p>
  {
      features.map((feature,index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
  }

      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;
