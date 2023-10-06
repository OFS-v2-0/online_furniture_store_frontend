import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function SpecialOffers() {
	const [checked, setChecked] = useState({
		discountedItems: false,
		bestSeller: false,
		exclusive: false,
	});

	const handleDiscountedItems = (e) => {
		setChecked((prev) => ({ ...prev, discountedItems: e.target.checked }));
	};

	const handleBestSeller = (e) => {
		setChecked((prev) => ({ ...prev, bestSeller: e.target.checked }));
	};

	const handleExclusive = (e) => {
		setChecked((prev) => ({ ...prev, exclusive: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleDiscountedItems}
				checked={checked.discountedItems}
				label="Товары со скидкой"
			/>
			<Checkbox
				onChange={handleBestSeller}
				checked={checked.bestSeller}
				label="Хит продаж"
			/>
			<Checkbox
				onChange={handleExclusive}
				checked={checked.exclusive}
				label="Эксклюзив"
			/>
		</>
	);
}

export default SpecialOffers;
