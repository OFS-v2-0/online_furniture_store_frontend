import PropTypes from 'prop-types';
import styles from './SingleSelect.module.css';

function SingleSelect({ options }) {
	return (
		<select className={styles.container}>
			{options.map((el) => (
				<option key={el} value={el} className={styles.option}>
					{el}
				</option>
			))}
		</select>
	);
}

SingleSelect.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SingleSelect;
