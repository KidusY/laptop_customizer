import React from 'react';

const FieldSet = (props) => (
	<fieldset className='feature' key={props.featureHash}>
		<legend className='feature__name'>
			<h3>{props.feature}</h3>
		</legend>
		{props.options}
	</fieldset>
);

export default FieldSet;
