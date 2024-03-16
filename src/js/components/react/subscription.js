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
            <p className="subscription-container__value-tag">Best value</p>
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
