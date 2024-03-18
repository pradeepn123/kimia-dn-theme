import React, { useState, useEffect } from "react";
import 'StyleComponents/subscription-sec.scss';

const SubscriptionContainer = ({ data = [], handleSwitch = () => {}, inputSwitch = "" }) => {
    console.log('data',data);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        if (data && data.length > 0) {
            const initialOption = data[0];
            setSubscription(initialOption);
        }
    }, [data]);

    useEffect(() => {
        const selectedPlanIdInputs = document.querySelectorAll('.selected-selling-plan-id');
        selectedPlanIdInputs.forEach(input => {
            input.value = inputSwitch === 'subscription' ? subscription.id : '';
        });
    }, [subscription, inputSwitch]);

    const calculateDiscountedPrice = (offerType, price, percentage) => {
        const numericPrice = parseFloat(price.split("$")[1]);
        const flatnum = subscription.offerPercentage;
        const flatRate = (flatnum / 100);
        
        if (offerType == 'percentage') {
            const discountedPrice = numericPrice * (1 - percentage / 100);
            return discountedPrice.toFixed(2);
        }
        if (offerType == 'fixed_amount') {
            const fixedAmt = (numericPrice - flatRate);
            return fixedAmt;
        }
        if (offerType == 'price') {
            console.log('flatRate',flatRate);
            return flatRate.toFixed(2);
            
        }
    };

  
    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        const selectedOptionObject = data.find(item => item.id === selectedOption);
        setSubscription(selectedOptionObject);
    };


    return (
        <div className="subscription-container">
            <div className="subscription-container__value-crossBtn">
                <p className="subscription-container__value-tag">Best value</p>
            </div>
            <div className="subscription-container__subs-one-wrapper">
                <div className="subscription-container__subscription-wrapper">
                    <div className="subscription-container__subs-text">
                        <input type="radio" id="subscribeSave" name="purchase" value="subscription" onChange={handleSwitch} checked={inputSwitch === 'subscription'}/>
                        <label htmlFor="subscribeSave">
                            <span className="subscribeSave__text">SUBSCRIBE & SAVE {subscription?.offerPercentage || ''}%</span>
                            <div className="subscription-container__dropdown">
                                <select name="delivery" id="interval" className="subscription-container__dropbtn" defaultValue="" onChange={handleSelectChange}>
                                    {data && data.map((item, index) => (
                                        <option key={index} value={item.id}>{item.options}</option>
                                    ))}
                                </select>
                            </div>
                        </label>
                    </div>
                    <div className="subscription-container__subs-price">
                        {subscription && (
                            <>
                                <p className="subscription-container__subs-compPrice">
                                    <span style={{color: 'black', textDecoration: 'line-through', textDecorationColor: 'var(--gsc-button-background-color-100)'}}>
                                    {subscription.price[0].variantPrice}
                                    </span>
                                </p>
                                <p className="subscription-container__subs-actualPrice">
                                    ${calculateDiscountedPrice(subscription.priceAdjustments, subscription.price[0].variantPrice, subscription.offerPercentage)}
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
