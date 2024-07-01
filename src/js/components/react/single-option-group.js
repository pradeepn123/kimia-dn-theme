import React, { useState, useEffect } from 'react';
import SingleOption from './single-option';

export default ({ name,options,onUpdate,forceRenderChildren}) => {
	const [active, setActive] = useState(options[0].title);

	const updateSelection = (value)  => {
	  setActive(value);
	}

	useEffect(() => {
		const optionInputs = document.querySelectorAll(`[name='${name}']`);
		const selectedInput = [...optionInputs].find(option => option.value == active);
		selectedInput.checked = true;
		selectedInput.dispatchEvent(new Event('change', {bubbles: true}));
		if(onUpdate) {
			onUpdate(active);
	   }
	},[active])

	useEffect(() => {
		setActive(options[0].title);
	},[forceRenderChildren]);

	return (
		<>
			<div className="variant-container__opt-label">{name}</div>
			<div className="variant-container__var-options">
			{options.map((optionValue, index) => (
				<SingleOption option={optionValue} key={index} active={optionValue.title == active} onUpdate={updateSelection} />
			))}
			</div>
		</>
	)
}