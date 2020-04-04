import React from 'react';
import Features from '../Features/Features';
const Form = (props) => (
	<form className='main__form'>
		<h2>Customize your laptop</h2>
		<Features
			USCurrencyFormat={props.USCurrencyFormat}
			features={props.features}
			updateFeature={props.updateFeature}
			selected={props.selected}
		/>
	</form>
);

export default Form;
