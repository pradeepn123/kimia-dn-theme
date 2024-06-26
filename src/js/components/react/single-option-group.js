import React, { useState } from 'react';
import SingleOption from './single-option';

export default ({ option, variants }) => {
	const { name, values:optionValues } = option;
	const [active, setActive] = useState(optionValues[0]);
	const updateSelection = (value)  => {
    const optionInputs = document.querySelectorAll(`[name='${name}']`);
		const selectedInput = [...optionInputs].find(option => option.value == value);
		selectedInput.checked = true;
		selectedInput.dispatchEvent(new Event('change', {bubbles: true}));
		setActive(value);  // Update the active state
	}
	
	return (
		<>
			<div className="variant-container__opt-label">{name}</div>
			<div className="variant-container__var-options">
			{optionValues.map((optionValue, index) => (
				<SingleOption option={optionValue} key={index} variants={variants} active={optionValue == active} onUpdate={updateSelection} />
			))}
			</div>
		</>
	)
}