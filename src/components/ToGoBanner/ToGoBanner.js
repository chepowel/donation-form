import React from 'react';

const ProgressBar = (props) => {

	return (
		<blockquote className="speech-bubble">
			{!props.success &&
				<p><strong><sup>$</sup>{props.togo}</strong> still needed to fund this project</p>
			}
			{props.success &&
				<p><strong>Goal Met!</strong></p>
			}
		</blockquote>
	)
};

export default ProgressBar;
