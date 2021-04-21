import React from 'react';

import { Text } from '../../ui';

const Similar = ({setOption}) => {

	return (
		<Form
			setOption={setOption}
		/>
	);
};

const Form = ({setOption}) => {

	const [query, setQuery] = React.useState('');
	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	React.useEffect(_ => {
		setOption(query);
	}, [query]);

	const handleAjaxSearch = (e) => {
		const query = e.target.value;
		if (query.length > 2) {
			console.log(query);
		}
	};

	const searchRef = React.useRef();
	React.useEffect( _ => {
		const pointerSearch = searchRef.current;
		pointerSearch.addEventListener('click', handleAjaxSearch);
		pointerSearch.addEventListener('input', handleAjaxSearch);
	}, []);

	return (
		<Menu
			onChange={handleChange}
			query={query}
			searchRef={searchRef}
		/>
	);
}

const Menu = ({onChange, query, searchRef}) => {

	return (
		<div className="interface__menu">
			<Text 
				onChange={onChange}
				query={query}
				searchRef={searchRef}
			/>
		</div>
	);
};

export default Similar;

//https://code.visualstudio.com/docs/setup/linux#_visual-studio-code-is-unable-to-watch-for-file-changes-in-this-large-workspace-error-enospc