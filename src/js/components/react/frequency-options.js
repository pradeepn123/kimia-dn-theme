import React, { useState } from "react";
import 'StyleComponents/variant-options.scss';

const FrequencyOptions = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const extractWeeks = (sellingPlan) => {
        const { frequency } = sellingPlan;
        const weeksIndex = frequency.indexOf(" weeks");
        if (weeksIndex !== -1) {
            // Find the last space before " weeks"
            const lastSpaceIndex = frequency.lastIndexOf(" ", weeksIndex - 1);
            // Extract the substring starting from the last space up to " weeks"
            if (lastSpaceIndex !== -1) {
                return frequency.substring(lastSpaceIndex + 1, weeksIndex + 6).trim();
            }
        }
        return null;
    };
    
    return (
        <div className="frequency-container__freq-options variant-container__var-options">
            {data.sellingplan.map((sellingPlan, index) => (
                <div
                    key={index}
                    className={`frequency-container__freq-wrapper variant-container__var-wrapper ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleToggleActive(index)}
                >
                    <h5 className="frequency-container__freq-name variant-container__var-name">
                        {extractWeeks(sellingPlan)}
                    </h5>
                </div>
            ))}
        </div>
    );
};

export default FrequencyOptions;
