import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setPurpose } from '../../store/filters/filters-slice';
import styles from './CatalogPurposes.module.css';
import chairForManager from '../../assets/img/chairForManager.png';
import chairForMeetingRoom from '../../assets/img/chairForMeetingRoom.png';
import chairForPersonal from '../../assets/img/chairForPersonal.png';
import computerTable from '../../assets/img/computerTable.png';
import conferenceTable from '../../assets/img/conferenceTable.png';
import writingTable from '../../assets/img/writingTable.png';
import wardrobe from '../../assets/img/wardrobe.png';
import shelving from '../../assets/img/shelving.png';
import nightstand from '../../assets/img/nightstand.png';
import documentCabinet from '../../assets/img/documentCabinet.png';
import sofaForManager from '../../assets/img/sofaForManager.png';
import sofaForMeetingRoom from '../../assets/img/sofaForMeetingRoom.png';
import sofaOfficeInterior from '../../assets/img/sofaOfficeInterior.png';

function CatalogPurposes({ category, purpose }) {
	const dispatch = useDispatch();

	const purposes = {
		chairs: [
			{ title: 'Для персонала', image: chairForPersonal },
			{ title: 'Для переговорной', image: chairForMeetingRoom },
			{ title: 'Для руководителя', image: chairForManager },
		],
		tables: [
			{ title: 'Компьютерный', image: computerTable },
			{ title: 'Письменный', image: writingTable },
			{ title: 'Для переговоров', image: conferenceTable },
		],
		wardrobes: [
			{ title: 'Для документов', image: documentCabinet },
			{ title: 'Тумбочка', image: nightstand },
			{ title: 'Стеллаж', image: shelving },
			{ title: 'Для одежды', image: wardrobe },
		],
		sofas: [
			{ title: 'Офисный интерьер', image: sofaOfficeInterior },
			{ title: 'Для переговорной', image: sofaForMeetingRoom },
			{ title: 'Для руководителя', image: sofaForManager },
		],
	};

	const handlePurpose = (e) => {
		dispatch(setPurpose(e.target.value));
	};

	return (
		<div className={styles.purposes}>
			{purposes[category].map(({ title, image }, idx) => (
				<input
					className={styles.purpose}
					style={{
						backgroundImage: `url(${image})`,
						borderRadius: idx % 2 ? '150px' : '10px',
					}}
					data-title={title}
					key={title}
					type="checkbox"
					onChange={handlePurpose}
					checked={purpose === title}
					value={title}
				/>
			))}
		</div>
	);
}

CatalogPurposes.propTypes = {
	category: PropTypes.string.isRequired,
	purpose: PropTypes.string.isRequired,
};

export default CatalogPurposes;
