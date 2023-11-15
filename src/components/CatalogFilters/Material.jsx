import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MultiSelect from '../UI/Select/MultiSelect';
import {
	fetchMaterials,
	selectFilters,
	setMaterial,
} from '../../store/filters/filters-slice';

function Material() {
	const { pathname } = useLocation();
	const category = pathname.slice(1);
	const { materials, filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMaterials());
	}, [dispatch]);

	const handleChange = (choice) => {
		dispatch(
			setMaterial(
				choice
					.map((el, i) => (i > 0 ? `material=${el.label}` : `${el.label}`))
					.join('&'),
			),
		);
	};

	return (
		<MultiSelect
			placeholder="Выберите материал..."
			onChange={handleChange}
			reset={!filters.material}
			options={materials[category].map(({ id, name }) => ({
				value: id,
				label: name,
			}))}
		/>
	);
}

export default Material;
