// import { useDispatch, useSelector } from 'react-redux';
// import { selectFilters, setWarranty } from '../../store/filters/filters-slice';
import Checkbox from '../UI/Checkbox/Checkbox';
import { declensionWordYear } from '../../utils/helpers';

function Warranty() {
	// const { filters } = useSelector(selectFilters);
	// const dispatch = useDispatch();

	const handleChange = () => {
		// dispatch(setWarranty(e.target.value));
	};

	return (
		<>
			{[2, 3, 5].map((el) => (
				<Checkbox
					key={el}
					onChange={handleChange}
					checked={false}
					value={el}
					label={declensionWordYear(el)}
				/>
			))}
		</>
	);
}

export default Warranty;
