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
