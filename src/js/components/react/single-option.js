import React from "react";

export default ({ option, onUpdate, active }) => {
  const {title,variantData} = option;
  return (
    <>
      <div className={`variant-container__var-wrapper ${active ? 'active' : ''}`} onClick={() => onUpdate(title)}>
        <h5 className="variant-container__var-name">{title}</h5>
        {variantData?.price &&  <p className="variant-container__var-price">${variantData?.price / 100}</p>}
        {variantData?.metafield && <p className="variant-container__bestvalue-tag">{variantData?.metafield}</p>}
      </div>
    </>
  )
}