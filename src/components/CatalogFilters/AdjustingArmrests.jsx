import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setArmrestAdjustment,
} from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';

function AdjustingArmrests() {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const handleArmrestAdjustment = (e) => {
		dispatch(setArmrestAdjustment(e.target.value));
	};

	return (
		<>
			<Checkbox
				onChange={handleArmrestAdjustment}
				checked={filters.armrest_adjustment === 'Вверх / вниз'}
				label="Вверх – вниз"
				value="Вверх / вниз"
			/>
			<Checkbox
				onChange={handleArmrestAdjustment}
				checked={filters.armrest_adjustment === 'Вверх / вниз / в стороны'}
				label="Вверх – вниз – в стороны"
				value="Вверх / вниз / в стороны"
			/>
			<Checkbox
				onChange={handleArmrestAdjustment}
				checked={filters.armrest_adjustment === 'Нет'}
				label="Нет"
				value="Нет"
			/>
		</>
	);
}

export default AdjustingArmrests;
