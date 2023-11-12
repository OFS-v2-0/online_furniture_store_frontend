import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setConstruction,
} from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';

function Construction({ type }) {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const constructionTypes = {
		tables: ['С тумбой', 'Без тумбы'],
		chairs: ['С колесиками', 'Без колесиков'],
	};

	const handleChairsConstruction = (e) => {
		dispatch(setConstruction(e.target.value));
	};

	return (
		<>
			<Checkbox
				onChange={handleChairsConstruction}
				checked={filters.construction === constructionTypes[type][0]}
				label={constructionTypes[type][0]}
				value={constructionTypes[type][0]}
			/>
			<Checkbox
				onChange={handleChairsConstruction}
				checked={filters.construction === constructionTypes[type][1]}
				label={constructionTypes[type][1]}
				value={constructionTypes[type][1]}
			/>
		</>
	);
}

Construction.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Construction;
