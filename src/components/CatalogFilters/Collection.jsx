import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function Collection() {
	const [checked, setChecked] = useState({
		cozyOffice: false,
		modernOffice: false,
		singleOffice: false,
	});

	const handleCozyOffice = (e) => {
		setChecked((prev) => ({ ...prev, cozyOffice: e.target.checked }));
	};

	const handleModernOffice = (e) => {
		setChecked((prev) => ({ ...prev, modernOffice: e.target.checked }));
	};

	const handleSingleOffice = (e) => {
		setChecked((prev) => ({ ...prev, singleOffice: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleCozyOffice}
				checked={checked.cozyOffice}
				label="Cozy office"
			/>
			<Checkbox
				onChange={handleModernOffice}
				checked={checked.modernOffice}
				label="Modern office"
			/>
			<Checkbox
				onChange={handleSingleOffice}
				checked={checked.singleOffice}
				label="Single office"
			/>
		</>
	);
}

export default Collection;
