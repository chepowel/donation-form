import React from 'react';

const Input = (props) => {

	return (
		<form onSubmit={props.handleSubmit}>
			<input type="text" name="donation" />
			<button type="submit">Give Now</button>
		</form>
	)
};

export default Input;
