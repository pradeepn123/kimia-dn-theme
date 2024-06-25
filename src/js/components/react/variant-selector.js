import React, { useEffect, useState } from "react";
import OnetimeOptions from "./onetime-options";
import SubscriptionOptions from "./subscription-options";
import VariantOptions from "./variant-options";
import FrequencyOptions from "./frequency-options";


export default ({data:shopifyData}) => {
    const [purchaseType, setPurchaseType] = useState('onetime');
    const {variants, sellingplan} = shopifyData
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

    return (
        <>
            <OnetimeOptions selectedVariant={selectedVariant} onUpdate={handleSwitch}/>
            <SubscriptionOptions selectedVariant={selectedVariant} selectedSellingPlan={selectedSellingPlan} onUpdate={handleSwitch}/>
            <VariantOptions variants={variants} selectedVariant={selectedVariant} onUpdate={handleVariantChange} />
            {purchaseType == "subscription" && <FrequencyOptions sellingplan={sellingplan} selectedSellingPlan={selectedSellingPlan} onUpdate={updateSellingPlan}/>}
        </>
    );
}
