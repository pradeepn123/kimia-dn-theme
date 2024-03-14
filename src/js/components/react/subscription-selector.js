import React, { useEffect, useState } from "react";
import { onMounted } from "vue";
import Onetime from "./onetime";
import Subscription from "./subscription";

export default () => {
    const [data, updateData] = useState([]);
    useEffect(() => {
        let data = [];
        document.querySelectorAll(("input[data-radio-type='selling_plan']")).forEach((sellingPlan)=>{
            
            const sellingPlansInput = sellingPlan.dataset;
            // console.log(sellingPlansInput);
            const sellingId = sellingPlansInput.sellingPlanId;
            const variantCompareAtPrice = sellingPlansInput.variantCompareAtPrice;
            const variantPrice = sellingPlansInput.variantPrice;
            const parent = sellingPlan.closest("label");
            const labelText = parent.textContent.split(", ");
            // console.log(labelText, "-----labelText");
            const labelDeliveryText = labelText[0];
            const labelDeliveryOffer = labelText[1].split(" ");
            const sellingPlanOffer = labelDeliveryOffer[0];
            console.log(labelDeliveryText, "-----labelDeliveryText");
            console.log(sellingPlanOffer, "-----sellingPlanOffer");

            const dataObj = {
                sellingId: sellingId,
                variantCompareAtPrice: variantCompareAtPrice,
                variantPrice: variantPrice,
                sellingPlanText: labelDeliveryText,
                sellingPlanOffer: sellingPlanOffer
            };

            data.push(dataObj);
        });

        updateData(data);
        console.log(data, "JSON data");
    },[])
    return(
        <>
            <Subscription data={data} />
            <Onetime />
        </>
    )
}