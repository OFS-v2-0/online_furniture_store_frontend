import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchBrands,
	selectFilters,
	setBrand,
} from '../../store/filters/filters-slice';
import MultiSelect from '../UI/Select/MultiSelect';

function Brand() {
	const { brands, filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBrands());
	}, [dispatch]);

	const handleChange = (choice) => {
		dispatch(
			setBrand(
				choice
					.map((el, i) => (i > 0 ? `brand=${el.value}` : `${el.value}`))
					.join('&'),
			),
		);
	};

	return (
		<MultiSelect
			placeholder="Выберите бренды..."
			onChange={handleChange}
			reset={!filters.collection}
			options={brands.map(({ brand }) => ({
				value: brand,
				label: brand,
			}))}
		/>
	);
}

export default Brand;
