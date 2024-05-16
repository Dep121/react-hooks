import React, { useDeferredValue } from 'react';

function DefferedComponent({ input }) {
	const deferredValue =
		useDeferredValue(input);

	const renderInputs = () => {
		const inputs = [];
		for (let i = 0; i < 20000; i++) {
			inputs.push(
				<div key={i}>
					{deferredValue}
				</div>
			);
		}
		return inputs;
	};

	return (
		<div>
			<h2>
				Displaying
				{deferredValue}
			</h2>
			{renderInputs()}
		</div>
	);
}

export default DefferedComponent;
