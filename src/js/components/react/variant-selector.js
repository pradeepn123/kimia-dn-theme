
import React, { useEffect, useState } from "react";
import Onetime from "./onetime";
import Subscription from "./subscription";
import VariantOptions from "./variant-options";
import FrequencyOptions from "./frequency-options";


export default ({data:shopifyData}) => {
      console.log(shopifyData,'dataaaa');
        const [inputSwitch, setInputSwitch] = useState('onetime');
        const [data, updateData] = useState([]);
    
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
    
        useEffect(() => {
            // updateData(prevData => [...prevData, ...shopifyData]);
        }, []);
    
        return (
            <>
                {/* <Subscription data={data} handleSwitch={handleSwitch} inputSwitch={inputSwitch}/>
                <Onetime data={data} handleSwitch={handleSwitch} inputSwitch={inputSwitch}/> */}
                <VariantOptions data={shopifyData}/>
                <FrequencyOptions data={shopifyData}/>
            </>
        );
 
}


