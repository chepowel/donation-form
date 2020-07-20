import React from 'react';

const ProgressBar = (props) => {

	return (
		<blockquote className="speech-bubble">
			{!props.success &&
				<p><strong><sup>$</sup>{props.togo}</strong> still needed to fund this project</p>
			}
			{props.success &&
				<p><strong>Goal Met!</strong> We are <strong><sup>$</sup>{props.over}</strong> our goal.</p>
			}
		</blockquote>
	)
};

export default ProgressBar;
