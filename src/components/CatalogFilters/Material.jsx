import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function Material() {
	const [checked, setChecked] = useState({
		textile: false,
		ecoLeather: false,
		grid: false,
		genuineLeather: false,
	});

	const handleTextile = (e) => {
		setChecked((prev) => ({ ...prev, textile: e.target.checked }));
	};

	const handleEcoLeather = (e) => {
		setChecked((prev) => ({ ...prev, ecoLeather: e.target.checked }));
	};

	const handleGrid = (e) => {
		setChecked((prev) => ({ ...prev, grid: e.target.checked }));
	};

	const handleGenuineLeather = (e) => {
		setChecked((prev) => ({ ...prev, genuineLeather: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleTextile}
				checked={checked.textile}
				label="Текстиль"
			/>
			<Checkbox
				onChange={handleEcoLeather}
				checked={checked.ecoLeather}
				label="Экокожа"
			/>
			<Checkbox onChange={handleGrid} checked={checked.grid} label="Сетка" />
			<Checkbox
				onChange={handleGenuineLeather}
				checked={checked.genuineLeather}
				label="Натуральная кожа"
			/>
		</>
	);
}

export default Material;
