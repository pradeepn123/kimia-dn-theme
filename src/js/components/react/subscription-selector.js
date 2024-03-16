import React, { useEffect, useState } from "react";
import Onetime from "./onetime";
import Subscription from "./subscription";

// const fetchData = (props) => {
//     const sellingPlans = document.querySelectorAll("input[data-radio-type='selling_plan']");
//     return Array.from(sellingPlans).map(sellingPlan => {
//         const sellingPlansInput = sellingPlan.dataset;
//         const sellingId = sellingPlansInput.sellingPlanId;
//         const variantCAP = sellingPlansInput.variantCompareAtPrice.split(" ");
//         const variantCompareAtPrice = variantCAP[0];
//         const variantP = sellingPlansInput.variantPrice.split(" ");
//         const variantPrice = variantP[0];
//         const parent = sellingPlan.closest("label");
//         const labelText = parent.textContent.split(", ");
//         const labelDeliveryText = labelText[0];
//         const labelDeliveryOffer = labelText[1].split(" ");
//         const sellingPlanOffer = labelDeliveryOffer[0];
//         return {
//             sellingId,
//             variantCompareAtPrice,
//             variantPrice,
//             sellingPlanText: labelDeliveryText,
//             sellingPlanOffer
//         };
//     });
// };

export default ({data:shopifyData}) => {

    console.log(shopifyData);
    const [data, updateData] = useState([]);

    useEffect(() => {
        updateData(prevData => [...prevData, ...shopifyData]);
    }, []);

    return (
        <>
            <Subscription data={data} />
            <Onetime />
        </>
    );
};
