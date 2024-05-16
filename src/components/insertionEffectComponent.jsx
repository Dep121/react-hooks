import { useInsertionEffect, useState } from "react";

export default function UseInsertionEffect() {
	const [theme, setTheme] = useState('dark')

	useInsertionEffect(() => {
		const styleRule = getStyleRule(theme);

		document.head.appendChild(styleRule);

		return () => document.head.removeChild(styleRule)
	}, [theme])

	return <button
		onClick={
			() =>
				setTheme(theme === 'dark' ?
					'white' : 'dark')}>
		Change theme
	</button>
}

const getStyleRule = (theme) => {
	const tag = document.createElement('style')
	tag.innerHTML = `
	button {
	color: ${theme === 'dark' ? 'white' : 'black'};
	background-color : 
	${theme === 'dark' ? 'black' : 'white'};
	}
`
	return tag
}
