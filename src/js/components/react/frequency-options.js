import React, { useState } from "react";
import 'StyleComponents/variant-options.scss';

const FrequencyOptions = ({ sellingplan, selectedSellingPlan, onUpdate }) => {
    const extractWeeks = (sellingPlan) => {
        const { frequency } = sellingPlan;
        const weeksIndex = frequency.indexOf(" weeks");
        if (weeksIndex !== -1) {            
            const lastSpaceIndex = frequency.lastIndexOf(" ", weeksIndex - 1);        
            if (lastSpaceIndex !== -1) {
                return frequency.substring(lastSpaceIndex + 1, weeksIndex + 6).trim();
            }
        }
        return null;
    };
    
    return (
        <>
        <div className="frequency-container__freq-label variant-container__opt-label">Frequency</div>
            <div className="frequency-container__freq-options variant-container__var-options">
            
            {sellingplan.map((sellplan, index) => (
                <div
                    key={index}
                    className={`frequency-container__freq-wrapper variant-container__var-wrapper ${selectedSellingPlan.id === sellplan.id ? 'active' : ''}`}
                    onClick={() => onUpdate(sellplan)}
                >
                    <h5 className="frequency-container__freq-name variant-container__var-name">
                        {extractWeeks(sellplan)}
                    </h5>
                </div>
            ))}
            
        </div>
        </>
    );
};

export default FrequencyOptions;
