import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setMinRaiting,
} from '../../store/filters/filters-slice';
import StarChecbox from '../UI/StarChecbox/StarChecbox';

function Raiting() {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const handleChangeRaiting = (e) => {
		if (+e.target.value === 1 && filters?.min_rating_unused === 1) {
			dispatch(setMinRaiting(0));
			return;
		}
		dispatch(setMinRaiting(+e.target.value));
	};

	return (
		<div style={{ display: 'flex', gap: '8px' }}>
			<StarChecbox
				checked={filters?.min_rating_unused >= 1}
				onChange={handleChangeRaiting}
				value={1}
			/>
			<StarChecbox
				checked={filters?.min_rating_unused >= 2}
				onChange={handleChangeRaiting}
				value={2}
			/>
			<StarChecbox
				checked={filters?.min_rating_unused >= 3}
				onChange={handleChangeRaiting}
				value={3}
			/>
			<StarChecbox
				checked={filters?.min_rating_unused >= 4}
				onChange={handleChangeRaiting}
				value={4}
			/>
			<StarChecbox
				checked={filters?.min_rating_unused >= 5}
				onChange={handleChangeRaiting}
				value={5}
			/>
		</div>
	);
}

export default Raiting;
