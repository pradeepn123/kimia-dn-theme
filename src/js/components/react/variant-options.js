import React from "react";
import 'StyleComponents/variant-options.scss';

export default ({ variants, selectedVariant, onUpdate }) => {  
  return (
    <>
      <div className="variant-container__opt-label">Cartons</div>
      <div className="variant-container__var-options">
        {variants.map((variant, index) => (
          <div key={index} className={`variant-container__var-wrapper ${variant.id == selectedVariant.id ? 'active' : ''}`} onClick={() => onUpdate(variant)}>
            <h5 className="variant-container__var-name">{variant.name}</h5>
            <p className="variant-container__var-price">{variant.price}</p>
          </div>
        ))}
    </div>
    </>
  );
};

  
    
