import React, { useState, useEffect } from "react";
import "StyleComponents/subscription-sec.scss";

const SubscriptionOptions = ({ data, selectedVariantDiscount, selectedVariantPrice }) => {
    const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
    const currentPlan = data.sellingplan[currentPlanIndex];
    const priceAdjustment = data.sellingplan[currentPlanIndex].priceAdjustments
    
    const calculateDiscountedPrice = (offerType, price, percentage) => {
      const numericPrice = parseFloat(price.split("$")[1]);
      const flatRate = (percentage / 100);
      
      if (offerType == 'percentage') {
          const discountedPrice = numericPrice * (1 - percentage / 100);
          return discountedPrice.toFixed(2);
      } else if (offerType == 'fixed_amount') {
          const fixedAmt = (numericPrice - flatRate);
          return fixedAmt;
      } else if (offerType == 'price') {
          return flatRate.toFixed(2);
      }
    };

    return (
      <>
        <div className="subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper">    
          <div className="subscriptionOpt-container__subscription-label">Subscribe & save&nbsp;
          {selectedVariantDiscount || currentPlan.discount}
          { priceAdjustment == 'percentage' ? '%' : '' }
          </div>
          <p className="subscriptionOpt-container__subscription-Price">{selectedVariantPrice}</p>        
        </div>
      </>
    );
  };
  
  export default SubscriptionOptions;