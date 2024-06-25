import React, { useState, useEffect } from "react";
import 'StyleComponents/variant-options.scss';

const OnetimeOptions = ({ data, selectedVariantPrice }) => {
   console.log('data....', data)
 
    return (
      <>
      <div className="onetime-container__onetime-wrapper variant-container__var-wrapper">
            <div className="onetime-container__onetime-label">One-time Purchase</div>
            <p className="onetime-container__oneTime-Price">{selectedVariantPrice || data.variants[0].price}</p>
        </div>
      </>
    );
  };
  
  export default OnetimeOptions;
    