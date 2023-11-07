import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchColors,
	selectFilters,
	setColor,
} from '../../store/filters/filters-slice';
import MultiSelect from '../UI/Select/MultiSelect';

function Colors() {
	const { colors } = useSelector(selectFilters);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchColors());
	}, [dispatch]);

	const handleChange = (choice) => {
		dispatch(
			setColor(
				choice
					.map((el, i) => (i > 0 ? `color=${el.label}` : `${el.label}`))
					.join('&'),
			),
		);
	};

	return (
		<MultiSelect
			placeholder="Выберите цвета..."
			onChange={handleChange}
			options={colors.map(({ id, name }) => ({ value: id, label: name }))}
		/>
	);
}

export default Colors;
