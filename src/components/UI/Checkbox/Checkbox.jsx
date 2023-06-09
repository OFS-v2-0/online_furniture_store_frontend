import PropTypes from 'prop-types';
import CheckboxStyles from './Checkbox.module.css';

function Checkbox({ checked, onChange, disabled, label }) {
	return (
		<div className={CheckboxStyles.checkbox}>
			<input
				type="checkbox"
				id="checkbox-id"
				onChange={onChange}
				checked={checked}
				disabled={disabled}
			/>
			<label htmlFor="checkbox-id">{label}</label>
		</div>
	);
}

Checkbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Checkbox;
