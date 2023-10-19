import { useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { DropdownIndicator, multiSelectStyles } from './selectConfigs';

function MultiSelect({ options, placeholder, onChange, reset }) {
	const selectRef = useRef();
	const clear = () => {
		selectRef.current.clearValue();
	};

	useEffect(() => {
		if (reset) clear();
	}, [reset]);

	return (
		<Select
			ref={selectRef}
			closeMenuOnSelect={false}
			defaultValue=""
			placeholder={placeholder}
			escapeClearsValue
			isMulti
			components={{ DropdownIndicator }}
			onChange={onChange}
			options={options}
			noOptionsMessage={() => 'Нет доступных опций'}
			styles={multiSelectStyles}
		/>
	);
}

MultiSelect.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			label: PropTypes.string.isRequired,
		}),
	).isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	reset: PropTypes.bool,
};

export default memo(MultiSelect);
