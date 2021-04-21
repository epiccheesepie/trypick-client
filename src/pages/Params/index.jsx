import React from 'react';

import { Selecter, Slider } from '../../ui';

const mapSelectersToValue = (selecters) => {
	return selecters.reduce( (acc, {title}) => {
		return {
			...acc, 
			[title] : []
		};
	}, {});
};
const mapSlidersToValue = (sliders) => {
	return sliders.reduce( (acc, {title, left, right}) => {
		return {
			...acc, 
			[title] : [left, right]
		};
	}, {});
};

const Params = ({option, setOption}) => {
    
    return (
        <Form 
            selecters={option.selecters}
            sliders={option.sliders}
            setOption={setOption}
        />
    );
};

const Form = ({selecters, sliders, setOption}) => {

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
    
    const [rangeItems, setRangeItems] = React.useState(() => mapSlidersToValue(sliders));
    const handlerRangedItems = (title, [left, right]) => {
        setRangeItems(prev => {
            return {
                ...prev,
                [title]: [left, right]
            };
        });
    };
    
    React.useEffect(_ => {
        setOption({
            sliders: rangeItems,
            selecters: formItems
        });
    }, [rangeItems, formItems]);

    return (
        <Menu
            selecters={selecters}
            checkedItems={formItems}
            onSelect={handleSelectItems}
            sliders={sliders}
            rangeItems={rangeItems}
            onRanged={handlerRangedItems}
        />
    );
}

const Menu = ({selecters, checkedItems, onSelect, sliders, rangeItems, onRanged}) => {

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

    const renderSliders = sliders.map( ({title, left, right, step, desc}) => {
        return (
            <Slider
                key={title}
                title={title}
                left={left}
                right={right}
                step={step}
                desc={desc}
                onRanged={onRanged}
                sliderRange={rangeItems[title]}
            />
        );
    });

    return (
        <div className="interface__menu">
			{renderSelecters}
            {renderSliders}
		</div>
    );
};

export default Params;