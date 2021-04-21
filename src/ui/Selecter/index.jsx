import React from 'react';
import './Selecter.css';

const Selecter = ({title, data, devider, checkedItems, onSelect}) => {
	const [isOpen, setPopupOpen] = React.useState(false);

	const selecterRef = React.useRef();
	const rippleRef = React.useRef();

	React.useEffect(_ => {
		document.body.addEventListener('click', (e) => {
			const selecterPointer = selecterRef.current;
			const path = e.path || (e.composedPath && e.composedPath())
			if (!path.includes(selecterPointer)) {
				setPopupOpen(false);
			}
		});
	}, []);

	const handleClickLabel = (label) => {
		onSelect(title, label);
	};

	const handleClickSelect = (e) => {
		const ripplePointer = rippleRef.current;

		setPopupOpen( (prev) => !prev);
		const target = e.currentTarget;
		const left = e.clientX - target.getBoundingClientRect().left + 'px';
		const top = e.clientY - target.getBoundingClientRect().top + 'px';

		[ripplePointer.style.left, ripplePointer.style.top] = [left, top];
	};

	return (
		<div ref={selecterRef} className={`item-checkboxes ${isOpen ? 'active' : ''}`}>
			<div className="item-checkboxes__form" onClick={(e) => handleClickSelect(e)}>
				<span className="item-checkboxes__title">
					{title}
				</span>
				<img className="item-checkboxes__icon-up" src="/img/icon_up.png" alt="icon_up" />
				<div ref={rippleRef} className="ripple"></div>
			</div>


			{isOpen && (
				<Popup
					list={data}
					onClick={handleClickLabel}
					checkedItems={checkedItems}
				/>
			)}
			<div className="item-checkboxes__result">
				<span className="result__title">Вы выбрали: </span>
				<span className="result__arr">
					{checkedItems.join(' '+devider+' ')}
				</span>
			</div>
		</div>
	);	
};

const Popup = ({list, checkedItems, onClick}) => {
	const renderLabels = list.map( (title) => {
		return (
			<Label
				key={title}
				title={title}
				checked={checkedItems.includes(title)}
				onClick={onClick}
			/>
		);
	});

	return (
		<div className="item-checkboxes__popup">
			<div className="popup__wrap">
				{renderLabels}
			</div>
		</div>
	);
};

const Label = ({title, checked, onClick}) => {

	return (
		<label className="popup__item" >
			<input className="popup__checkbox" type="checkbox" onClick={_ => onClick(title)} defaultChecked={checked} />
			<span className="popup__text">{title}</span>	
		</label>
	);
};

export default Selecter;


//immutable (не хотим ничего мутировать) прочитать
//декомпозиция компонентов