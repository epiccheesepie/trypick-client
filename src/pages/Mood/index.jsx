import React from 'react';

import { MoodBlock } from '../../ui';

const Mood = ({option, setOption}) => {

	return (
		<Form
			moodBlocks={option.moodBlocks}
			setOption={setOption}
		/>
	);
};

const Form = ({moodBlocks, setOption}) => {

	const [moodActiveItems, setMoodItems] = React.useState([]);
	const handleClickMood = (title) => {
		setMoodItems( (prev) => {
			if (prev.includes(title)) {
				return prev.filter(item => item !== title);
			} else {
				return prev.concat(title);
			}
		});
	};

	React.useEffect(_ => {
		setOption(moodActiveItems);
	}, [moodActiveItems]);

	return (
		<Menu
			moodBlocks={moodBlocks}
			onClickMood={handleClickMood}
			moodActiveItems={moodActiveItems}
		/>
	);
}

const Menu = ({moodBlocks, onClickMood, moodActiveItems}) => {

	const renderMoodBlocks = moodBlocks.map((checkboxes,index) => {
		return (
			<MoodBlock
				key={index}
				data={checkboxes}
				onClickMood={onClickMood}
				moodActiveItems={moodActiveItems}
			/>
		);
	});

	return (
		<div className="interface__menu">
			{renderMoodBlocks}
		</div>
	);
};

export default Mood;