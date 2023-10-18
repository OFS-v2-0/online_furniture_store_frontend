import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setInStock,
	setToOrder,
} from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';

function InStock() {
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const handleInStock = () => {
		dispatch(setInStock());
	};

	const handleToOrder = () => {
		dispatch(setToOrder());
	};

	return (
		<>
			<Checkbox
				onChange={handleInStock}
				checked={filters.in_stock === 'true'}
				label="В наличии"
			/>
			<Checkbox
				onChange={handleToOrder}
				checked={filters.in_stock === 'false'}
				label="На заказ"
			/>
		</>
	);
}

export default InStock;
