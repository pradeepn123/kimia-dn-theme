import React from "react";

export default ({ option, variants, onUpdate, active }) => {
  return (
    <>
      <div className={`variant-container__var-wrapper ${active ? 'active' : ''}`} onClick={() => onUpdate(option)}>
        <h5 className="variant-container__var-name">{option}</h5>
        {/* <p className="variant-container__var-price">{variant.price}</p> */}
        {/* {variant.metafield && <p className="variant-container__bestvalue-tag">{variant.metafield}</p>} */}
      </div>

    </>
  )
}