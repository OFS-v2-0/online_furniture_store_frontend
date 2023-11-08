import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectFilters,
	setPurpose,
} from '../../../store/filters/filters-slice';
import styles from './Catalog.module.css';
import FiltersPanel from '../../FiltersPanel/FiltersPanel';
import CatalogGrid from '../../CatalogGrid/CatalogGrid';
import Title from '../../UI/Title/Title';
import chairForManager from '../../../assets/img/chairForManager.png';
import chairForMeetingRoom from '../../../assets/img/chairForMeetingRoom.png';
import chairForPersonal from '../../../assets/img/chairForPersonal.png';

function Catalog() {
	const { pathname } = useLocation();
	const { purpose } = useSelector(selectFilters);
	const dispatch = useDispatch();
	const category = pathname.slice(1);
	const titles = {
		chairs: 'Кресла и стулья',
		tables: 'Столы',
		wardrobes: 'Шкафы и системы хранения',
		sofas: 'Диваны',
	};

	const purposes = {
		chairs: [
			{ title: 'Для персонала', image: chairForPersonal },
			{ title: 'Для переговорной', image: chairForMeetingRoom },
			{ title: 'Для руководителя', image: chairForManager },
		],
		tables: [
			// { title: 'Компьютерный', image: categoriesTables },
			// { title: 'Письменный', image: categoriesSofas },
			// { title: 'Для\u00A0переговоров', image: categoriesArmchairs },
		],
		wardrobes: [
			// { title: 'Для\u00A0документов', image: categoriesTables },
			// { title: 'Тумбочка', image: categoriesSofas },
			// { title: 'Стеллаж', image: categoriesArmchairs },
			// { title: 'Для\u00A0одежды', image: categoriesArmchairs },
		],
		sofas: [],
	};

	const handlePurpose = (e) => {
		dispatch(setPurpose(e.target.value));
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<section className={styles.section}>
			<Title titleText={titles[category]} />
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
			<div className={styles.container}>
				<FiltersPanel category={category} />
				<CatalogGrid category={category} purpose={purpose} />
			</div>
		</section>
	);
}

export default Catalog;
