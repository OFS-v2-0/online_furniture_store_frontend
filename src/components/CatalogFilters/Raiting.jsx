import { useState } from 'react';
import StarChecbox from '../UI/StarChecbox/StarChecbox';

function Raiting() {
	const [raiting, setRaiting] = useState(0);

	const handleChangeRaiting = (e) => {
		if (+e.target.value === 1 && raiting === 1) {
			setRaiting(0);
			return;
		}
		setRaiting(+e.target.value);
	};

	return (
		<div style={{ display: 'flex', gap: '8px' }}>
			<StarChecbox
				checked={raiting >= 1}
				onChange={handleChangeRaiting}
				value={1}
			/>
			<StarChecbox
				checked={raiting >= 2}
				onChange={handleChangeRaiting}
				value={2}
			/>
			<StarChecbox
				checked={raiting >= 3}
				onChange={handleChangeRaiting}
				value={3}
			/>
			<StarChecbox
				checked={raiting >= 4}
				onChange={handleChangeRaiting}
				value={4}
			/>
			<StarChecbox
				checked={raiting >= 5}
				onChange={handleChangeRaiting}
				value={5}
			/>
		</div>
	);
}

export default Raiting;
