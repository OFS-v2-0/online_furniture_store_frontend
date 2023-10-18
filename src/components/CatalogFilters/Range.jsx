import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MultiRangeSlider from '../UI/MultiRangeSlider/MultiRangeSlider';
import {
	selectFilters,
	setMaxPrice,
	setMaxWeight,
	setMinPrice,
	setMinWeight,
} from '../../store/filters/filters-slice';

function Range({ type, minValue, maxValue }) {
	const dispatch = useDispatch();
	const { filters } = useSelector(selectFilters);

	const handleRange = ({ min, max }) => {
		if (type === 'price') {
			dispatch(setMinPrice(min));
			dispatch(setMaxPrice(max));
		} else if (type === 'weight') {
			dispatch(setMinWeight(min));
			dispatch(setMaxWeight(max));
		}
	};

	return (
		<MultiRangeSlider
			min={minValue}
			max={maxValue}
			onChange={handleRange}
			reset={!filters.max_total_price}
		/>
	);
}

Range.propTypes = {
	type: PropTypes.string.isRequired,
	minValue: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired,
};

export default Range;
