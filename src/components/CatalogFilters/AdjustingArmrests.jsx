import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function AdjustingArmrests() {
	const [checked, setChecked] = useState({
		upDown: false,
		upDownSideways: false,
		no: false,
	});

	const handleUpDown = (e) => {
		setChecked((prev) => ({ ...prev, upDown: e.target.checked }));
	};

	const handleUpDownSideways = (e) => {
		setChecked((prev) => ({ ...prev, upDownSideways: e.target.checked }));
	};

	const handleNo = (e) => {
		setChecked((prev) => ({ ...prev, no: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleUpDown}
				checked={checked.upDown}
				label="Вверх – вниз"
			/>
			<Checkbox
				onChange={handleUpDownSideways}
				checked={checked.upDownSideways}
				label="Вверх – вниз – в стороны"
			/>
			<Checkbox onChange={handleNo} checked={checked.no} label="Нет" />
		</>
	);
}

export default AdjustingArmrests;
