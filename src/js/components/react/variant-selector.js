import React, { useEffect, useState } from "react";
import OnetimeOptions from "./onetime-options";
import SubscriptionOptions from "./subscription-options";
import VariantOptions from "./variant-options";
import FrequencyOptions from "./frequency-options";
import 'StyleComponents/variant-options.scss';

export default ({data:shopifyData}) => {
    const [purchaseType, setPurchaseType] = useState('onetime');
    const {variants, sellingplan, options} = shopifyData
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);
    const [selectedSellingPlan, setselectedSellingPlan] = useState(sellingplan[0]);

    
    const handleSwitch = (purchaseType) => {
        setPurchaseType(purchaseType);
    }

    const handleVariantChange = (obj) => {
        setSelectedVariant({...obj});
    }

    const updateSellingPlan = (sellingPlanObj) => {
        setselectedSellingPlan({...sellingPlanObj})
    } 

    const updateInputValues = (inputs, value) => {
        inputs.forEach(input => {
            input.value = value;
        })
    }

    useEffect(() => {
        //since product-form custom element code is compiled and is not set to initialise on connected callback
        //we are simply updating the input values in the existing product form
        const variantInputs = document.querySelectorAll('input[name="id"]');
        const sellingPlanInputs = document.querySelectorAll('input[name="selling_plan"]');
        updateInputValues(variantInputs, selectedVariant.id);
        //update sellingplan id forsubscription purchase
        if(purchaseType != "onetime"){
            updateInputValues(sellingPlanInputs, selectedSellingPlan.id);
        }
    }, [selectedVariant, purchaseType, selectedSellingPlan])

    return (
        <>            
            <div className="variant-container__purchaseType-wrapper">
                <OnetimeOptions selectedVariant={selectedVariant} purchaseType={purchaseType} onUpdate={handleSwitch}/>
                <SubscriptionOptions selectedVariant={selectedVariant} purchaseType={purchaseType} selectedSellingPlan={selectedSellingPlan} onUpdate={handleSwitch}/>
            </div>
            {variants.length > 1 && <VariantOptions variants={variants} selectedVariant={selectedVariant} onUpdate={handleVariantChange} options={options} /> }
            {purchaseType != "onetime" && <FrequencyOptions sellingplan={sellingplan} selectedSellingPlan={selectedSellingPlan} onUpdate={updateSellingPlan}/>}                
        </>
    );
}
