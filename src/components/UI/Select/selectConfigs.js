import PropTypes from 'prop-types';

export function DropdownIndicator() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M19.293 7.28906L20.7072 8.70328L12.0001 17.4104L3.29297 8.70328L4.70718 7.28906L12.0001 14.582L19.293 7.28906Z"
				fill="black"
			/>
		</svg>
	);
}

export function IconOption({ active }) {
	return (
		<svg
			style={{ visibility: active ? 'visible' : 'hidden' }}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M19.6282 6.38738C19.1332 5.87071 18.3293 5.87104 17.8336 6.38738L9.75659 14.8063L6.1667 11.0646C5.671 10.548 4.86748 10.548 4.37178 11.0646C3.87607 11.5813 3.87607 12.4188 4.37178 12.9355L8.85894 17.6124C9.10663 17.8706 9.43143 18 9.75625 18C10.0811 18 10.4062 17.8709 10.6539 17.6124L19.6282 8.25819C20.1239 7.74188 20.1239 6.90401 19.6282 6.38738Z"
				fill="black"
			/>
		</svg>
	);
}

IconOption.propTypes = {
	active: PropTypes.bool,
};

export const multiSelectStyles = {
	control: (baseStyles, state) => ({
		...baseStyles,
		borderRadius: '10px',
		boxShadow: 'none',
		border: state.selectProps.menuIsOpen
			? '1px solid #202020'
			: '1px solid #eee',
		'&:hover': {
			border: state.selectProps.menuIsOpen
				? '1px solid #202020'
				: '1px solid #999',
		},
	}),
	menu: (baseStyles) => ({
		...baseStyles,
		zIndex: '1000',
	}),
	menuList: (baseStyles) => ({
		...baseStyles,
		maxHeight: '200px',
		padding: '13px 4px 6px',
		borderRadius: '10px',
		background: '#fff',
		boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.20)',

		'::-webkit-scrollbar': {
			width: '4px',
			height: '0px',
		},
		'::-webkit-scrollbar-track': {
			background: 'transparent',
		},
		'::-webkit-scrollbar-thumb': {
			background: '#000',
			borderRadius: '3px',
		},
	}),
	indicatorSeparator: (baseStyles) => ({
		...baseStyles,
		display: 'none',
	}),
	indicatorsContainer: (baseStyles, state) => ({
		...baseStyles,
		padding: '0 5px',
		'& svg': {
			transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
		},
	}),
	option: (baseStyles, state) => ({
		...baseStyles,
		color: '#000',
		fontFamily: 'Open Sans',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 'normal',
		backgroundColor: state.isFocused ? '#edeff3' : '#fff',
	}),
	multiValueRemove: (baseStyles) => ({
		...baseStyles,
		'&:hover': {
			backgroundColor: '#999',
		},
		'&:hover svg': {
			color: '#000',
		},
	}),
};

export const singleSelectStyles = {
	...multiSelectStyles,
	control: (baseStyles) => ({
		...baseStyles,
		color: '#000',
		fontFamily: 'Open Sans',
		fontSize: '18px',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: '27.5px',
		boxShadow: 'none',
		width: 'fit-content',
		alignItems: 'center',
		border: 'none',
		'&:hover': {
			border: 'none',
		},
	}),
	valueContainer: (baseStyles) => ({
		...baseStyles,
		padding: '2px 0px',
	}),
	menu: (baseStyles) => ({
		...baseStyles,
		zIndex: '1000',
		width: 'fit-content',
	}),
	option: (baseStyles, state) => ({
		...baseStyles,
		color: '#000',
		padding: '8px 12px 8px 0px',
		fontFamily: 'Open Sans',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: '400',
		lineHeight: 'normal',
		backgroundColor: state.isFocused ? '#edeff3' : '#fff',
		'&:active': {
			backgroundColor: '#edeff3',
		},
	}),
};
