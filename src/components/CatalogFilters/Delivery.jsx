import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setDelivery,
	setPickup,
} from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';

function Delivery() {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const handleDelivery = () => {
		dispatch(setDelivery());
	};

	const handlePickup = () => {
		dispatch(setPickup());
	};

	return (
		<>
			<Checkbox
				onChange={handlePickup}
				checked={filters.fast_delivery === 'false'}
				label="Самовывоз"
			/>
			<Checkbox
				onChange={handleDelivery}
				checked={filters.fast_delivery === 'true'}
				label="Доставка"
			/>
		</>
	);
}

export default Delivery;
