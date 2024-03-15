import React from "react";
import 'StyleComponents/subscription-sec.scss';
import {subscriptionInfo} from "JsComponents/subscriptionData"


export default () => { 
    return(
        <>
            <div className="subscription-container">
                <div className="subscription-container__onetime-wrapper">  
                        <div className="subscription-container__oneTime-text">
                            <input type="radio" id="onetime" name="purchase" value="sellingIdonetime" defaultChecked/>
                            <label htmlFor="onetime">ONE TIME PURCHASE </label><br/>
                        </div>
                         <p className="subscription-container__oneTime-Price">$25.99</p>  
                </div>
            </div>
        </>
    )
}

