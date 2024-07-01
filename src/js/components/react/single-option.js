import React from "react";

export default ({ option, onUpdate, active }) => {
  const {title,variantData} = option;
  // const [firstEl] = option1;
  return (
    <>
      <div className={`variant-container__var-wrapper ${active ? 'active' : ''}`} onClick={() => onUpdate(title)}>
        <h5 className="variant-container__var-name">{title}</h5>
        {/* <p className="variant-container__var-price">{firstEl?.price}</p>
        {firstEl?.metafield && <p className="variant-container__bestvalue-tag">{firstEl?.metafield}</p>} */}
      </div>

    </>
  )
}