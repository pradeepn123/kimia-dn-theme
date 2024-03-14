import React, { useState } from "react";
import { onMounted } from "vue";
import Onetime from "./onetime";
import Subscription from "./subscription";

export default () => {

    const [data, updateData] = useState(false);
    onMounted(() => {
        document.querySelectorAll(("input[data-radio-type='selling_plan']")).forEach((s)=>{
            // console.log(s.dataset,'s data');
            
            const sellingId = s.dataset.sellingPlanId;
            const variantCompareAtPrice = s.dataset.variantCompareAtPrice;
            // const variantPrice = s.dataset.
            const parent = s.closest("label");
            const labelText = parent.textContent.trim();
            console.log('labelText',labelText);
            // console.log('Selling Idddddddddd',sellingId);
         //    return sellingId;
        })
    })
    return(
        <>
    <Subscription data={data} />
    <Onetime />
    </>
    )
}