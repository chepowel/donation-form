import React from 'react';

const Input = (props) => {

	return (
		<form onSubmit={props.handleSubmit} className="left-inner-addon">
			<label htmlFor="donation" className="visuallyhidden">Donation: </label>
			<p>$</p>
			<input id="donation" type="number" min="5" name="donation" placeholder="50" title="Donation" />
			<input type="submit" value="Give Now" />
		</form>
	)
};

export default Input;
