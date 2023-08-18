import PropTypes from 'prop-types';
import styles from './Address.module.css';

function Address({
	inputId,
	onChange,
	onBlur,
	value,
	label,
	helperText,
	error,
	onClick,
	placeholder,
}) {
	return (
		<div className={styles.container}>
			<input
				className={
					error
						? `${styles.input} ${styles.input__error}`
						: `${styles.input} ${styles.input__default}`
				}
				id={inputId}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required
				onBlur={onBlur}
			/>
			<label className={styles.naming} htmlFor="address">
				{label}
			</label>
			{error && <span className={styles.errorText}>{helperText}</span>}
			{value && (
				<div type="button" onClick={onClick} className={styles.crossBtn} />
			)}
		</div>
	);
}

Address.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	label: PropTypes.string,
	inputId: PropTypes.string,
	onBlur: PropTypes.func,
	helperText: PropTypes.string,
	error: PropTypes.bool,
	onClick: PropTypes.func,
	placeholder: PropTypes.string,
};

export default Address;
