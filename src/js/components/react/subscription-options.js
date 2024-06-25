import React, { useState, useEffect } from "react";
import "StyleComponents/subscription-sec.scss";

const SubscriptionOptions = ({ data, selectedVariantDiscount }) => {
  
    return (
      <>
      <div className="subscriptionOpt-container__subscription-wrapper variant-container__var-wrapper">
      {data.sellingplan.map((plan) => (
            <div className="subscriptionOpt-container__subscription-label">Subscribe & save{selectedVariantDiscount || data.sellingplan[0].discount}</div>
            ))}
            <p className="subscriptionOpt-container__subscription-Price">$8.99</p>
        
        </div>
      </>
    );
  };
  
  export default SubscriptionOptions;