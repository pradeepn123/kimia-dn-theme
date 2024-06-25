import React, { useState, useEffect } from "react";
import "StyleComponents/subscription-sec.scss";

const SubscriptionOptions = ({ selectedVariant, selectedSellingPlan, onUpdate }) => {
  const {price} = selectedVariant;
  const {priceAdjustments, discount} = selectedSellingPlan;
  const priceWithoutCurrency = parseInt(price.split("$")[1]);
  const discountNum = parseInt(discount);

  const heading = ""
  // let discountedPrice = '';

  const discountedPrice = priceWithoutCurrency - ((discountNum/100) * priceWithoutCurrency)
  // if(priceAdjustments == "percentage") {
    
  // } else if (priceAdjustments === "fixed_amount" ) {
  //   return (discountNum/100)
  // }else{
  //   const discountedPrice = priceWithoutCurrency - ((discountNum/100) * priceWithoutCurrency)
  // }

  return (
    <>
      <div className="subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper" 
            onClick={() => {onUpdate("subscription")}}>    
        <div className="subscriptionOpt-container__subscription-label">Subscribe & save&nbsp;
          {discount}%
        </div>
        <p className="subscriptionOpt-container__subscription-Price">${discountedPrice}</p> 
      </div>
    </>
  );
};

export default SubscriptionOptions;