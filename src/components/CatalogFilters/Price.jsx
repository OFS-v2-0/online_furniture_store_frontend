import { useState } from 'react';
import MultiRangeSlider from '../UI/MultiRangeSlider/MultiRangeSlider';

function Price() {
	const [, setMinPrice] = useState(0);
	const [, setMaxPrice] = useState(1000);

	const handleRange = ({ min, max }) => {
		setMinPrice(min);
		setMaxPrice(max);
	};

	return <MultiRangeSlider min={0} max={99999} onChange={handleRange} />;
}

export default Price;
