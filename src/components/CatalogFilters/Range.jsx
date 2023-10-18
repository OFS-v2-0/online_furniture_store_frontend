import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import MultiRangeSlider from '../UI/MultiRangeSlider/MultiRangeSlider';
import {
	selectFilters,
	setPrice,
	setWarranty,
	setWeight,
} from '../../store/filters/filters-slice';

function Range({ type, minValue, maxValue, rangeBar, labelInput }) {
	const dispatch = useDispatch();
	const { filters } = useSelector(selectFilters);

	const handleRange = ({ min, max }) => {
		if (type === 'price') {
			dispatch(setPrice({ min, max }));
		} else if (type === 'weight') {
			dispatch(setWeight({ min, max }));
		} else if (type === 'warranty') {
			dispatch(setWarranty({ min, max }));
		}
	};

	return (
		<MultiRangeSlider
			min={minValue}
			max={maxValue}
			onChange={handleRange}
			labelInput={labelInput}
			rangeBar={rangeBar}
			reset={!Object.keys(filters).length}
		/>
	);
}

Range.propTypes = {
	type: PropTypes.string.isRequired,
	minValue: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired,
	rangeBar: PropTypes.bool,
	labelInput: PropTypes.string,
};

export default Range;
