
import React, { useEffect, useState } from "react";
import OnetimeOptions from "./onetime-options";
import SubscriptionOptions from "./subscription-options";
import VariantOptions from "./variant-options";
import FrequencyOptions from "./frequency-options";


export default ({data:shopifyData}) => {
      console.log(shopifyData,'dataaaa');
        const [inputSwitch, setInputSwitch] = useState('onetime');
        const [data, updateData] = useState([]);
        const [selectedVariantPrice, setSelectedVariantPrice] = useState(null);
        const [selectedVariantDiscount, setSelectedVariantDiscount] = useState(null);
 
        const handleSwitch = (event) => {
            const value = event.target.value;
            setInputSwitch(value);
            const inputs = document.querySelectorAll('input[type="radio"][name="purchase"]');
            inputs.forEach(input => {
                if (input.value === value) {
                    input.classList.add('active');
                } else {
                    input.classList.remove('active');
                }
            });
        }
        
        const handleSelectedVariant = (price) => {
            setSelectedVariantPrice(price);
            
        }
        const handleSelectedFreq = (discount) => {
            setSelectedVariantDiscount(discount);
        }
       
        useEffect(() => {
            // updateData(prevData => [...prevData, ...shopifyData]);
        }, []);
    
        return (
            <>
                {/* <Subscription data={data} handleSwitch={handleSwitch} inputSwitch={inputSwitch}/>
                <Onetime data={data} handleSwitch={handleSwitch} inputSwitch={inputSwitch}/> */}
                <OnetimeOptions data={shopifyData} selectedVariantPrice={selectedVariantPrice}/>
                <SubscriptionOptions data={shopifyData} selectedVariantPrice={selectedVariantPrice} selectedVariantDiscount={selectedVariantDiscount}/>
                <VariantOptions data={shopifyData} onSelectVariant={handleSelectedVariant}/>
                <FrequencyOptions data={shopifyData} onSelectFrequency={handleSelectedFreq}/>
            </>
        );
 
}


