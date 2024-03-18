import React, { useState, useEffect } from "react";
import 'StyleComponents/subscription-sec.scss';

const SubscriptionContainer = (props) => {
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        if (props.data && props.data.length > 0) {
            const initialOption = props.data[0];
            setSubscription(initialOption);
        }
    }, [props.data]);

    const calculateDiscountedPrice = (price, percentage) => {
        const numericPrice = parseFloat(price.split("$")[1]);
        const discountedPrice = numericPrice * (1 - percentage / 100);
        return discountedPrice.toFixed(2);
    };

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        const selectedOptionObject = props.data.find(item => item.id === selectedOption);
        setSubscription(selectedOptionObject);
    };

    return (
        <div className="subscription-container">
            <div className="subscription-container__value-crossBtn">
                <p className="subscription-container__value-tag">Best value</p>
                <div className="subscription-container__crossBtn" id="subscription-container__crossBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="cancel_FILL0_wght400_GRAD0_opsz48" d="M11.5,21.76l4.5-4.5,4.5,4.5,1.26-1.26L17.26,16l4.5-4.5L20.5,10.24,16,14.74l-4.5-4.5L10.24,11.5l4.5,4.5-4.5,4.5ZM16,28a11.611,11.611,0,0,1-4.65-.945,12.09,12.09,0,0,1-6.4-6.4,11.987,11.987,0,0,1,0-9.33,11.993,11.993,0,0,1,2.58-3.81A12.3,12.3,0,0,1,11.35,4.945a11.987,11.987,0,0,1,9.33,0,11.981,11.981,0,0,1,6.375,6.375,11.987,11.987,0,0,1,0,9.33,12.3,12.3,0,0,1-2.565,3.825,11.992,11.992,0,0,1-3.81,2.58A11.685,11.685,0,0,1,16,28Zm0-1.8a9.815,9.815,0,0,0,7.23-2.985A9.855,9.855,0,0,0,26.2,16a9.84,9.84,0,0,0-2.97-7.23A9.84,9.84,0,0,0,16,5.8,9.855,9.855,0,0,0,8.785,8.77,9.815,9.815,0,0,0,5.8,16a9.83,9.83,0,0,0,2.985,7.215A9.829,9.829,0,0,0,16,26.2ZM16,16Z" transform="translate(-4 -4)"></path>
                    </svg>
                </div>
            </div>
            <div className="subscription-container__subs-one-wrapper">
                <div className="subscription-container__subscription-wrapper">
                    <div className="subscription-container__subs-text">
                        <input type="radio" id="subscribeSave" name="purchase" value="sellingIdsubs" />
                        <label htmlFor="subscribeSave">
                            <span className="subscribeSave__text">SUBSCRIBE & SAVE {subscription?.offerPercentage || ''}%</span>
                            <div className="subscription-container__dropdown">
                                <select name="delivery" id="interval" className="subscription-container__dropbtn" defaultValue="" onChange={handleSelectChange}>
                                    {props.data && props.data.map((item, index) => (
                                        <option key={index} value={item.id}>{item.options}</option>
                                    ))}
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="subscription-container__subs-price">
                        {subscription && (
                            <>
                                {/* <p className="subscription-container__subs-compPrice">{subscription.variantCompareAtPrice}</p> */}
                                <p className="subscription-container__subs-compPrice">
                                    <span style={{color: 'black', textDecoration: 'line-through', textDecorationColor: 'var(--gsc-button-background-color-100)'}}>
                                    {subscription.price[0].variantPrice}
                                    </span>
                                </p>
                                <p className="subscription-container__subs-actualPrice">
                                    ${calculateDiscountedPrice(subscription.price[0].variantPrice, subscription.offerPercentage)}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionContainer;
