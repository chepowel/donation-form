import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ToGoBanner from '../../components/ToGoBanner/ToGoBanner';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Content from '../../components/Content/Content';
import Input from '../../components/Input/Input';

const App = () => {

	const [state, setState] = useState({
		togo: 1500, //state.goal - state.currentDonations,
		progress: 0,
		daysLeft: 4,
		donorCount: 2,
		goal: 5000,
		currentDonations: 350,
		currentInput: '',
		success: false,
		error: false
	});

	return (
		<div>
			<ToGoBanner togo={state.togo} />
			<ProgressBar progress={state.progress} />
			<Content daysLeft={state.daysLeft} donorCount={state.donorCount} />
			<Input value={state.currentInput} />
		</div>
	)
};

export default App;