import { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';

function Checkbox({ checked, value, onChange, disabled, label }) {
	const id = useId();
	return (
		<div className={styles.checkbox}>
			<input
				type="checkbox"
				id={`checkbox-${id}`}
				onChange={onChange}
				checked={checked}
				value={value}
				disabled={disabled}
			/>
			<label htmlFor={`checkbox-${id}`}>{label}</label>
		</div>
	);
}

Checkbox.propTypes = {
	checked: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Checkbox;
