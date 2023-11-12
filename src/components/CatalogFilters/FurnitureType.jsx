import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setFurnitureType,
} from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';

function FurnitureType() {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const handleFurnitureType = (e) => {
		dispatch(setFurnitureType(e.target.value));
	};

	return (
		<>
			<Checkbox
				onChange={handleFurnitureType}
				checked={filters.furniture_type === 'Прямой'}
				label="Прямые"
				value="Прямой"
			/>
			<Checkbox
				onChange={handleFurnitureType}
				checked={filters.furniture_type === 'Угловой'}
				label="Угловые"
				value="Угловой"
			/>
			<Checkbox
				onChange={handleFurnitureType}
				checked={filters.furniture_type === 'Составной'}
				label="Составные"
				value="Составной"
			/>
		</>
	);
}

export default FurnitureType;
