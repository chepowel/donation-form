import React from 'react';

const Content = (props) => {

	return (
		<div>
			<h1>Only {props.daysLeft} days left to fund this project</h1>
			<p>Join the {props.donorCount} other donors who have already supported this project.</p>
		</div>
	)
};

export default Content;
