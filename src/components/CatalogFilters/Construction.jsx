import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function Construction() {
	const [checked, setChecked] = useState({
		withWheels: false,
		withoutWheels: false,
	});

	const handleWithWheels = (e) => {
		setChecked((prev) => ({ ...prev, withWheels: e.target.checked }));
	};

	const handleWithoutWheels = (e) => {
		setChecked((prev) => ({ ...prev, withoutWheels: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleWithWheels}
				checked={checked.withWheels}
				label="С колёсиками"
			/>
			<Checkbox
				onChange={handleWithoutWheels}
				checked={checked.withoutWheels}
				label="Без колёсиков"
			/>
		</>
	);
}

export default Construction;
