import React from 'react';

import { Selecter } from '../../ui';

const mapSelectersToValue = (selecters) => {
	return selecters.reduce( (acc, {title}) => {
		return {
			...acc, 
			[title] : []
		};
	}, {});
};

const Random = ({option, setOption}) => {

	return (
		<Form
			selecters={option.selecters}
			setOption={setOption}
		/>
	);
};

const Form = ({selecters, setOption}) => {

	const [formItems, setFormItems] = React.useState(() => mapSelectersToValue(selecters));
	const handleSelectItems = (title, label) => {
		setFormItems((prev) => {
			const prevValue = prev[title];
			let newValue = [];
			if (prevValue.includes(label)) {
				newValue = prevValue.filter((item) => item !== label);
			} else {
				newValue = prevValue.concat(label);
			}

			return {
				...prev,
				[title]: newValue
			};
		});
	};

	React.useEffect(_ => {
		setOption(formItems);
	}, [formItems]);

	return (
		<Menu
			selecters={selecters}
			checkedItems={formItems}
			onSelect={handleSelectItems}
		/>
	);
}

const Menu = ({selecters, checkedItems, onSelect}) => {

	const renderSelecters = selecters.map( ({title, data, devider}) => {
		return (
			<Selecter 
				key={title} 
				title={title} 
				data={data} 
				devider={devider}
				checkedItems={checkedItems[title]}
				onSelect={onSelect}
			/>
		);
	});

	return (
		<div className="interface__menu">
			{renderSelecters}
		</div>
	);
};

export default Random;