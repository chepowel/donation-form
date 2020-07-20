import React from 'react';

const Input = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<input type="number" min="5" name="donation" title="Donation" />
			<input type="submit" value="Give Now" />
		</form>
	)
};

export default Input;
