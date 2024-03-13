//subscription
import React from "react";
// const ReactComponent = (props) => {
//     const { title, description } = props.data;
  
//     return (
//       <div>
//         <h1>{title}</h1>
//         <p>{description}</p>
//       </div>
//     );
//   };
  
//   export default ReactComponent;

// export function subscriptionInfo(){
    // document.addEventListener('DOMContentLoaded',()  =>{
    //     const subsParent = document.querySelector(".product__info");
    //     //  const subscriptionBtn =  ;
    //     //  console.log(subscriptionBtn); 
    //      document.querySelectorAll(("input[data-radio-type='selling_plan']")).forEach((s)=>{
    //        const sellingId = s.dataset.sellingPlanId;
    //        console.log('Selling Id',sellingId);
    //        return sellingId;
    //       //  console.log('s',s[0].attributes[4].nodeValue);
    //       //  s.addEventListener('click',function(){
        
    //       //  })
    //      })
             
    //     });
// }



export default () => {
    // const reactElements = document.querySelectorAll(elname);
    // reactElements.forEach(el => {
    //     let propsHolderClass = null;
    //     const propsHolder = el.closest('div').querySelector('[data-props]');
    //     if(propsHolder) {
    //       propsHolderClass = `.${propsHolder.className || null}`;
    //     }
    //     reactWrapper(component,elname,propsHolderClass,el);
    // })

    document.addEventListener('DOMContentLoaded',()  =>{
         document.querySelectorAll(("input[data-radio-type='selling_plan']")).forEach((s)=>{
           const sellingId = s.dataset.sellingPlanId;
           console.log('Selling Id',sellingId);
        //    return sellingId;
         })
             
        });
}
