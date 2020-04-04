import React from 'react';
import slugify from 'slugify';
import Input from '../input/Input';
import FieldSet from '../Fieldset/Fieldset';
const Features = (props) => {
	const Features = Object.keys(props.features).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const options = props.features[feature].map((item) => {
			const itemHash = slugify(JSON.stringify(item));
			return (
				<div key={itemHash} className='feature__item'>
					<Input
						itemHash={itemHash}
						feature={feature}
						item={item}
						selected={props.selected}
						updateFeature={props.updateFeature}
						USCurrencyFormat={props.USCurrencyFormat}
						key={idx}
					/>
				</div>
			);
		});

		return <FieldSet featureHash={featureHash} feature={feature} options={options} key={idx} />;
	});
	return Features;
};

export default Features;
