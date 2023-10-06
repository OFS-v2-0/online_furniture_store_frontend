import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function Warranty() {
	const [checked, setChecked] = useState({
		twoYears: false,
		threeYears: false,
		fiveYears: false,
	});

	const handleTwoYears = (e) => {
		setChecked((prev) => ({ ...prev, twoYears: e.target.checked }));
	};

	const handleThreeYears = (e) => {
		setChecked((prev) => ({ ...prev, threeYears: e.target.checked }));
	};

	const handleFiveYears = (e) => {
		setChecked((prev) => ({ ...prev, fiveYears: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleTwoYears}
				checked={checked.twoYears}
				label="2 года"
			/>
			<Checkbox
				onChange={handleThreeYears}
				checked={checked.threeYears}
				label="3 года"
			/>
			<Checkbox
				onChange={handleFiveYears}
				checked={checked.fiveYears}
				label="5 лет"
			/>
		</>
	);
}

export default Warranty;
