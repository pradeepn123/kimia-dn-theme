import React from "react";
import 'StyleComponents/subscription-sec.scss';

export default (props) => { 
    return(
        <>
            <div className="subscription-container">
                <div className="subscription-container__onetime-wrapper">  
                        <div className="subscription-container__oneTime-text">
                            <input type="radio" id="onetime" name="purchase" value="onetime" onChange={props.handleSwitch} checked={props.inputSwitch === 'onetime'}/>
                            <label htmlFor="onetime">ONE TIME PURCHASE </label><br/>
                        </div>
                         <p className="subscription-container__oneTime-Price">$25.99</p>  
                </div>
            </div>
        </>
    )
}

