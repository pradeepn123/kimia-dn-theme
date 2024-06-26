import React from "react";
import 'StyleComponents/variant-options.scss';
import SingleOptionGroup from "./single-option-group";

export default ({ variants, selectedVariant, onUpdate, options }) => {  
  return (
    <>
    {options.map((option) =>  <SingleOptionGroup option={option} variants={variants} />)}
    </>
  );
};

  
    
