import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelect from '../UI/MultiSelect/MultiSelect';
import {
	fetchMaterials,
	selectFilters,
	setMaterial,
} from '../../store/filters/filters-slice';

function Material() {
	const { materials, filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMaterials());
	}, [dispatch]);

	const handleChange = (choice) => {
		dispatch(
			setMaterial(
				choice
					.map((el, i) => (i > 0 ? `material=${el.value}` : `${el.value}`))
					.join('&'),
			),
		);
	};

	return (
		<MultiSelect
			placeholder="Выберите материал..."
			onChange={handleChange}
			reset={!filters.material}
			options={materials.map(({ id, name }) => ({
				value: id,
				label: name,
			}))}
		/>
	);
}

export default Material;
