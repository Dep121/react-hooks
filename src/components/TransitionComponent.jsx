import React, {
	useState,
	useTransition
} from 'react';

const namesList = [
	'Alice',
	'Bob',
	'Charlie',
	'David',
	'Eva',
	'Frank'
	// ... Add more names as needed
];

function SearchList() {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredNames, setFilteredNames] = useState(namesList);

	const [isPending, setTransition] = useTransition();

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);

		setTransition(() => {
			const filtered =
				namesList.filter(
					name =>
						name.toLowerCase()
							.includes(term)
				);
			setFilteredNames(filtered);
		})
	};

	return (
		<div>
			<label htmlFor="search">
				Search:
			</label>
			<input
				type="text"
				id="search"
				value={searchTerm}
				onChange={handleSearch}
				placeholder="Type to search names" />
			<ul>
				{
					filteredNames.map((name, index) => (
						<li key={index}>
							{name}
						</li>
					))
				}
			</ul>
		</div>
	);
}

export default SearchList;
