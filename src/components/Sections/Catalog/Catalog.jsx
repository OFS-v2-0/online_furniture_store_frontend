import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Catalog.module.css';
import FiltersPanel from '../../FiltersPanel/FiltersPanel';
import CatalogGrid from '../../CatalogGrid/CatalogGrid';
import Title from '../../UI/Title/Title';

function Catalog() {
	const { pathname } = useLocation();
  const category = pathname.slice(1);
	const titles = {
		chairs: 'Кресла и стулья',
		tables: 'Столы',
		wardrobes: 'Шкафы и системы хранения',
		sofas: 'Диваны',
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	return (
		<section className={styles.section}>
			<Title titleText={titles[category]} />
			<div className={styles.container}>
				<FiltersPanel category={category} />
				<CatalogGrid category={category} />
			</div>
		</section>
	);
}

export default Catalog;
