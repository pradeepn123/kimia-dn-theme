import React from "react";
import 'StyleComponents/subscription-sec.scss';

const subscriptionContainer = (props) => {
    const data = props.data;
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
                            <select name="delivery" id="interval" className="subscription-container__dropbtn" defaultValue="DeliveryOne">
                            {data.map((item) => (
                                <option value={item.sellingPlanText}>{item.sellingPlanText}</option>
                            ))};
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
export default subscriptionContainer;

