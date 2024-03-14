import React from "react";
import 'StyleComponents/subscription-sec.scss';
// import {subscriptionInfo} from "JsComponents/subscriptionData"



export default () => { 

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

    // console.log("data",subscriptionInfo);

    return(
        <>
            <div className="subscription-container">
                <p className="subscription-container__value-tag">Best value</p>
                <div className="subscription-container__subs-one-wrapper">
                    <div className="subscription-container__subscription-wrapper">
                        <div className="subscription-container__subs-text">
                        <input type="radio" id="subscribeSave" name="purchase" value="sellingIdsubs"/>
                        <label htmlFor="subscribeSave">SUBSCRIBE & SAVE 10%</label><br/>
                        <div className="subscription-container__dropdown">
                            {/* <button onClick={myFunction} className="subscription-container__dropbtn">
                                <div className="subscription-container__dropdown-text">Delivery options</div>
                                <svg class="accordeon-plus__icon" width="20" height="10" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12L11 2L21 12" stroke-width="2"></path></svg>
                            </button>
                            <div id="myDropdown" className="subscription-container__dropdown-content" >
                                <a href="#">Delivered every 1 month</a>
                                <a href="#">Delivered every 2 months</a>
                                <a href="#">Delivered every 3 months</a>
                            </div> */}
                            {/* <label for="language">Select a Programming Language:</label> */}
                            <select name="delivery" id="interval" className="subscription-container__dropbtn" defaultValue="DeliveryOne">
                                <option value="DeliveryOne">Delivered every 1 month</option>
                                <option value="DeliveryTwo">Delivered every 2 months</option>
                                <option value="DeliveryThree">Delivered every 3 months</option>
                                <option value="DeliveryFour">Delivered every 4 months</option>
                            </select>
                        </div>
                        </div>
                        <div className="subscription-container__subs-price">
                        <p className="subscription-container__subs-compPrice">$35.00</p>
                        <p className="subscription-container__subs-actualPrice">$30.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

