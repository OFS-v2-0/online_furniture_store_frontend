import PropTypes from 'prop-types';
import styles from './RadioCircleButton.module.css';

function RadioCircleButton({ text, name, onChange, checked, value }) {
	return (
		<label className={styles.container}>
			<input
				type="radio"
				className={styles.realRadio}
				checked={checked}
				onChange={onChange}
				name={name}
				value={value}
			/>
			<span className={styles.customRadio} />
			<p className={styles.text}>{text}</p>
		</label>
	);
}

RadioCircleButton.propTypes = {
	text: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool,
	value: PropTypes.string,
};
export default RadioCircleButton;
