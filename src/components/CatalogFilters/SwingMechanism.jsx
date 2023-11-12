import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setSwingMechanism,
} from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';

function SwingMechanism() {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const handleSwingMechanism = (e) => {
		dispatch(setSwingMechanism(e.target.value));
	};

	return (
		<>
			<Checkbox
				onChange={handleSwingMechanism}
				checked={filters.swing_mechanism === 'Есть'}
				label="Есть"
				value="Есть"
			/>
			<Checkbox
				onChange={handleSwingMechanism}
				checked={filters.swing_mechanism === 'Нет'}
				label="Нет"
				value="Нет"
			/>
		</>
	);
}

export default SwingMechanism;
