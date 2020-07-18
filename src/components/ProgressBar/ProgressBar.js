import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ProgressBar = (props) => {

	return (
		<div className="progress-bar-border">
			<div className="progress-bar" style={{height: "24px", width: props.progress+"%"}}></div>
		</div>
	)
};

export default ProgressBar;