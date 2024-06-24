import React, { useState, useEffect } from "react";
import 'StyleComponents/variant-options.scss';
const VariantOptions = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
      };

    return (
      <>
      <div className="variant-container__var-options">
        {data.variants.map((variant, index) => (
          <div key={index} className={`variant-container__var-wrapper ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleToggleActive(index)}>
            <h5 className="variant-container__var-name">{variant.name}</h5>
            <p className="variant-container__var-price">{variant.price}</p>
          </div>
        ))}
    </div>
      </>
    );
  };
  
  export default VariantOptions;
    
