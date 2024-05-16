import React, { useState } from 'react';
import DefferedComponent from './components/DefferedComponent';

function DefferedImp() {
	const [userInput, setUserInput] = useState('');

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<div>
			<label htmlFor="userInput">
				Enter Text:
			</label>
			<input
				type="text"
				id="userInput"
				value={userInput}
				onChange={handleInputChange} />
			<DefferedComponent input={userInput} />
		</div>
	);
}

export default DefferedImp;
