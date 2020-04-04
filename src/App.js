import React, { Component } from 'react';

import Summary from './components/summary/summary';
import SummaryTotal from './components/SummaryTotal/SummaryTotal';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Form from './components/Form/Form';
import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
	style    : 'currency',
	currency : 'USD'
});
const FEATURES = {
	Processor          : [
		{
			name : '17th Generation Intel Core HB (7 Core with donut spare)',
			cost : 700
		},
		{
			name : 'Professor X AMD Fire Breather with sidewinder technology',
			cost : 1200
		}
	],
	'Operating System' : [
		{
			name : 'Ubuntu Linux 16.04',
			cost : 200
		},
		{
			name : 'Bodhi Linux',
			cost : 300
		}
	],
	'Video Card'       : [
		{
			name : 'Toyota Corolla 1.5v',
			cost : 1150.98
		},
		{
			name : 'Mind mild breeze 2000',
			cost : 1345
		}
	],
	Display            : [
		{
			name : '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
			cost : 1500
		},
		{
			name : '15.3" HGTV (3840 x 2160) Home makeover edition',
			cost : 1400
		}
	]
};

class App extends Component {
	constructor () {
		super();
		this.state = {
			selected : {
				Processor          : {
					name : '17th Generation Intel Core HB (7 Core with donut spare)',
					cost : 700
				},
				'Operating System' : {
					name : 'Ubuntu Linux 16.04',
					cost : 200
				},
				'Video Card'       : {
					name : 'Toyota Corolla 1.5v',
					cost : 1150.98
				},
				Display            : {
					name : '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
					cost : 1500
				}
			}
		};
	}

	//updates the selected so that it displays the current selected feature
	updateFeature = (feature, newValue) => {
		const selected = Object.assign({}, this.state.selected);
		selected[feature] = newValue;
		this.setState({
			selected
		});
	};

	render () {
		const total = Object.keys(this.state.selected).reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);

		return (
			<div className='App'>
				<header>
					<h1>ELF Computing | Laptops</h1>
				</header>
				<main>
					<Form
						USCurrencyFormat={USCurrencyFormat}
						features={FEATURES}
						updateFeature={this.updateFeature}
						selected={this.state.selected}
					/>

					<section className='main__summary'>
						<h2>Your cart</h2>
						<Summary selected={this.state.selected} USCurrencyFormat={USCurrencyFormat} />

						<SummaryTotal USCurrencyFormat={USCurrencyFormat} total={total} />
					</section>
				</main>
			</div>
		);
	}
}

export default App;
