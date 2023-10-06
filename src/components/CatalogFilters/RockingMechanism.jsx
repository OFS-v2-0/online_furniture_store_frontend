import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function RockingMechanism() {
	const [checked, setChecked] = useState({
		yes: false,
		no: false,
	});

	const handleYes = (e) => {
		setChecked((prev) => ({ ...prev, yes: e.target.checked }));
	};

	const handleNo = (e) => {
		setChecked((prev) => ({ ...prev, no: e.target.checked }));
	};

	return (
		<>
			<Checkbox onChange={handleYes} checked={checked.yes} label="Есть" />
			<Checkbox onChange={handleNo} checked={checked.no} label="Нет" />
		</>
	);
}

export default RockingMechanism;
