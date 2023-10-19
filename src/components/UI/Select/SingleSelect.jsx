import { memo } from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import {
	DropdownIndicator,
	IconOption,
	singleSelectStyles,
} from './selectConfigs';

function Option({ children, ...props }) {
	return (
		<components.Option {...props}>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<IconOption active={props.isSelected} />

				<span style={{ marginLeft: 5, alignSelf: 'right' }}>{children}</span>
			</div>
		</components.Option>
	);
}

function SingleSelect({ options, placeholder, onChange }) {
	return (
		<Select
			closeMenuOnSelect={false}
			defaultValue={options[0]}
			isSearchable={false}
			placeholder={placeholder}
			components={{ DropdownIndicator, Option }}
			onChange={onChange}
			options={options}
			styles={singleSelectStyles}
		/>
	);
}

SingleSelect.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			label: PropTypes.string.isRequired,
		}),
	).isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};

Option.propTypes = {
	children: PropTypes.string,
	isSelected: PropTypes.bool,
};

export default memo(SingleSelect);
