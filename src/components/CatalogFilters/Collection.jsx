import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCollections,
	selectFilters,
	setCollection,
} from '../../store/filters/filters-slice';
import MultiSelect from '../UI/MultiSelect/MultiSelect';

function Collection() {
	const { collections, filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollections());
	}, [dispatch]);

	const handleChange = (choice) => {
		dispatch(
			setCollection(
				choice
					.map((el, i) => (i > 0 ? `collection=${el.value}` : `${el.value}`))
					.join('&'),
			),
		);
	};

	return (
		<MultiSelect
			placeholder="Выберите коллекции..."
			onChange={handleChange}
			reset={!filters.collection}
			options={collections.map(({ slug, name }) => ({
				value: slug,
				label: name,
			}))}
		/>
	);
}

export default Collection;
