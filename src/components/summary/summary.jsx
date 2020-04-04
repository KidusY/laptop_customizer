import React from 'react';

/*summary of the current selected features 
it takes it the selected obj and ths US currency and iterate over the 
data and returns an array of the summary 
*/

const Summary = (props) => {
	const Summary = Object.keys(props.selected).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const selectedOption = props.selected[feature];

		return (
			<div className='summary__option' key={featureHash}>
				<div className='summary__option__label'>{feature} </div>
				<div className='summary__option__value'>{selectedOption.name}</div>
				<div className='summary__option__cost'>{props.USCurrencyFormat.format(selectedOption.cost)}</div>
			</div>
		);
	});

	return Summary;
};

export default Summary;
