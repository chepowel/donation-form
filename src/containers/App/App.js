import React, { useState } from 'react';
import ToGoBanner from '../../components/ToGoBanner/ToGoBanner';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Content from '../../components/Content/Content';
import Input from '../../components/Input/Input';

const App = () => {

	const [state, setState] = useState({
		togo: 5000,
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
		let error = isNaN(currentInput);
		if(error){
			setState({
				...state,
				error: error
			});
			return;
		}
		let updatedCurrentDonations = state.currentDonations + currentInput;
		let updatedTogo = state.goal - updatedCurrentDonations;
		let updatedDonorCount = state.donorCount + 1;
		let updatedProgress = ((state.goal - updatedTogo)/state.goal)*100;
		let updatedSuccess = updatedProgress >= 100;

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
		<main>
			<ToGoBanner togo={state.togo} />
			<ProgressBar progress={state.progress} />
			<Content daysLeft={state.daysLeft} donorCount={state.donorCount} />
			{state.success &&
				<p className="success">Goal Met!</p>
			}
			{state.error &&
				<p className="error">Input Error</p>
			}
			<Input name='currentDonation'
						 value={state.currentInput}
						 handleSubmit={handleSubmit}
			/>
		</main>
	)
};

export default App;