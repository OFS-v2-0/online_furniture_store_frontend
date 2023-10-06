import { useState } from 'react';
import Checkbox from '../UI/Checkbox/Checkbox';

function Delivery() {
	const [checked, setChecked] = useState({
		delivery: false,
		pickup: false,
	});

	const handleDelivery = (e) => {
		setChecked((prev) => ({ ...prev, delivery: e.target.checked }));
	};

	const handlePickup = (e) => {
		setChecked((prev) => ({ ...prev, pickup: e.target.checked }));
	};

	return (
		<>
			<Checkbox
				onChange={handleDelivery}
				checked={checked.delivery}
				label="Самовывоз"
			/>
			<Checkbox
				onChange={handlePickup}
				checked={checked.pickup}
				label="Доставка"
			/>
		</>
	);
}

export default Delivery;
