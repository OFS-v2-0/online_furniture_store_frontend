import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function Colors() {
	const [checked, setChecked] = useState({
		beige: false,
		black: false,
		gray: false,
		red: false,
		blue: false,
	});

	const handleBeige = (e) => {
		setChecked((prev) => ({ ...prev, beige: e.target.checked }));
	};

	const handleBlack = (e) => {
		setChecked((prev) => ({ ...prev, black: e.target.checked }));
	};

	const handleGray = (e) => {
		setChecked((prev) => ({ ...prev, gray: e.target.checked }));
	};

	const handleRed = (e) => {
		setChecked((prev) => ({ ...prev, red: e.target.checked }));
	};

	const handleBlue = (e) => {
		setChecked((prev) => ({ ...prev, blue: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleBeige}
				checked={checked.beige}
				label="Бежевый"
			/>
			<Checkbox onChange={handleBlack} checked={checked.black} label="Черный" />
			<Checkbox onChange={handleGray} checked={checked.gray} label="Серый" />
			<Checkbox onChange={handleRed} checked={checked.red} label="Красный" />
			<Checkbox onChange={handleBlue} checked={checked.blue} label="Синий" />
		</>
	);
}

export default Colors;
