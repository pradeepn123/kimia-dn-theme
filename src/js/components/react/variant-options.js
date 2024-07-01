import React, {useState, useEffect} from "react";
import 'StyleComponents/variant-options.scss';
import SingleOptionGroup from "./single-option-group";

export default ({ variants, options:variantOptions, selectedVariant }) => {  

 let curatedData = {};
  variants.forEach(variant => {
    const {options:selectedVariantOptions=[], ...restOfVariantData} = variant || {};
    for (let optionIndex = 0; optionIndex < selectedVariantOptions.length; optionIndex++ ) { 
      const firstVariantOptionName = selectedVariantOptions[0];
        let currentOptionName = `option${optionIndex}`
      if(!curatedData[firstVariantOptionName]) {
        curatedData[firstVariantOptionName] = {};
        }
        const currentData =  {
          [selectedVariantOptions[optionIndex]]: restOfVariantData 
        }
        //add the matching option variant data
        if(curatedData[firstVariantOptionName][currentOptionName]) {
          curatedData[firstVariantOptionName][currentOptionName] = [...curatedData[firstVariantOptionName][currentOptionName],currentData]
        }
        else {
          curatedData[firstVariantOptionName][currentOptionName] = [currentData]
        }
    }
  });
  console.log(curatedData, "curatedData")

  const firstSelectedOption = Object.keys(curatedData)[0];
  const [selectedKey, setSelectedKey] = useState(firstSelectedOption);
  const [forceRenderChildren, shouldForceRenderChildren] = useState(false);
  const [options, setOptions ] = useState([]);
  const firstAvailableOptions = Object.keys(curatedData).reduce((acc, current) => {
    if(!acc.values) {
      acc.values = [];
    }
    acc = {
      "name": variantOptions[0].name,
      "values": [...acc.values, {
         "title": current, 
         "values": 
          (curatedData[current]["option0"]).map((item) => {
            return Object.keys(item).map((key) => {
              const curatedData = {
                title: key,
                "variantData": item[key]
              }
              return curatedData
            }) 
          }).flat()
      }]
    }
    return acc;
  },{});

  useEffect(() => {
    shouldForceRenderChildren(!forceRenderChildren);
  },[selectedKey])

  const handleVariantUpdate = (key) => {
    setSelectedKey(key)
  }

  useEffect(() => {
    const options = (curatedData[selectedKey]);
    const option2 = options?.option1 || null;
    let selectedBasedOptions = [];
    const option3 = options?.option2 || null;
    if(option2) {
      const curatedData = {
      "name": variantOptions[1].name,
      "values": option2.map(item => {
          return Object.keys(item).map((key) => {
            const curatedData = {
              title: key,
              "variantData": item[key]
            }
            return curatedData
          }) 
        }).flat()
     }
     selectedBasedOptions.push(curatedData);
    }

    if(option3) {
      const curatedData = {
      "name": variantOptions[2].name,
      "values": option3.map(item => {
          return Object.keys(item).map((key) => {
            const curatedData = {
              title: key,
              variantData: item[key]
            }
            return curatedData
          }) 
        }).flat()
     }
     selectedBasedOptions.push(curatedData);
    }
    setOptions(state => state = [...selectedBasedOptions]);
  },[selectedKey])

  useEffect(() => {
  console.log("options", options);
  }, [options])



  return (
    <>
    <SingleOptionGroup options={firstAvailableOptions.values} name={firstAvailableOptions.name} onUpdate={handleVariantUpdate} />
    {options.map((option, index) => {
       return <SingleOptionGroup options={option.values} name={option.name} key={index} forceRenderChildren={forceRenderChildren} />
    })}
    </>
  );
};

  
    
