import React, { useState } from 'react';

import ToGoBanner from '../../components/ToGoBanner/ToGoBanner';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Content from '../../components/Content/Content';
import Input from '../../components/Input/Input';

import numberWithCommas from '../../utils/helpers'

const App = () => {

	const [state, setState] = useState({
		togo: '5,000',
		progress: 0,
		daysLeft: 'four',
		donorCount: 0,
		goal: 5000,
		currentDonations: 0,
		success: false,
		error: false
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		let currentInput = Number(event.target.donation.value);
		let error = currentInput === 0;
		if(error){
			setState({
				...state,
				error: error
			});
			return;
		}
		let updatedCurrentDonations = state.currentDonations + currentInput;
		let updatedTogo = state.goal - updatedCurrentDonations;
		let updatedProgress = ((state.goal - updatedTogo)/state.goal)*100;
		updatedProgress = updatedProgress >= 100 ? 100 : updatedProgress;
		updatedTogo = updatedTogo <= 0 ? 0 : numberWithCommas(updatedTogo);
		let updatedDonorCount = state.donorCount + 1;
		let updatedSuccess = updatedProgress === 100;

    setState({
      ...state,
			currentDonations: updatedCurrentDonations,
			togo: updatedTogo,
			donorCount: updatedDonorCount,
			progress: updatedProgress,
			success: updatedSuccess,
			error: false
    });
	};

	return (
		<main className="container">
			<ToGoBanner success={state.success} togo={state.togo} />
			<div className="container-inner">
				<ProgressBar progress={state.progress} />
					<div className="content">
					<Content daysLeft={state.daysLeft} donorCount={state.donorCount} />
					{state.error &&
						<p className="error">Input Error</p>
					}
					<Input name='currentDonation' handleSubmit={handleSubmit} />
				</div>
			</div>
		</main>
	)
};

export default App;