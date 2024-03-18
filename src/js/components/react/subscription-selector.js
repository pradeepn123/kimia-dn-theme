import React, { useEffect, useState } from "react";
import Onetime from "./onetime";
import Subscription from "./subscription";

export default ({data:shopifyData}) => {
    const [inputSwitch, setInputSwitch] = useState('onetime');
    const [data, updateData] = useState([]);

    const handleSwitch = (event) => {
        setInputSwitch(event.target.value)
    }

    useEffect(() => {
        updateData(prevData => [...prevData, ...shopifyData]);
    }, []);

    return (
        <>
            <Subscription data={data} handleSwitch={handleSwitch} inputSwitch={inputSwitch}/>
            <Onetime handleSwitch={handleSwitch} inputSwitch={inputSwitch}/>
        </>
    );
};
