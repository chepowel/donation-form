import React from 'react';

const ProgressBar = (props) => {

	return (
		<div className="progress-bar-bg">
			<div className="progress-bar" style={{width: `${ props.progress }%`}}></div>
		</div>
	)
};

export default ProgressBar;
