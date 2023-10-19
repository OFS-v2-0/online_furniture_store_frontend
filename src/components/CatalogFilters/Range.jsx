import { useCallback } from 'react';
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

	const handleRange = useCallback(
		({ min, max }) => {
			switch (type) {
				case 'price':
					dispatch(setPrice({ min, max }));
					break;
				case 'weight':
					dispatch(setWeight({ min, max }));
					break;
				case 'warranty':
					dispatch(setWarranty({ min, max }));
					break;
				default:
			}
		},
		[dispatch, type],
	);

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
