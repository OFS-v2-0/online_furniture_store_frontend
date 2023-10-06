import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function InStock() {
	const [checked, setChecked] = useState({
		inStock: false,
		toOrder: false,
	});

	const handleInStock = (e) => {
		setChecked((prev) => ({ ...prev, inStock: e.target.checked }));
	};

	const handleToOrder = (e) => {
		setChecked((prev) => ({ ...prev, toOrder: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleInStock}
				checked={checked.inStock}
				label="В наличии"
			/>
			<Checkbox
				onChange={handleToOrder}
				checked={checked.toOrder}
				label="На заказ"
			/>
		</>
	);
}

export default InStock;
