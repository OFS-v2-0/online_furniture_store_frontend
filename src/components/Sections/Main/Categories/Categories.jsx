import React from 'react';
import { NavLink } from 'react-router-dom';
import armchairs from '../../../../assets/img/categoriesArmchairs.png';
import sofas from '../../../../assets/img/categoriesSofas.png';
import tables from '../../../../assets/img/categoriesTables.png';
import wardrobes from '../../../../assets/img/categoriesWardrobes.png';
import CategoriesLinkCard from '../../../CategoriesLinkCard/CategoriesLinkCard';
import styles from './Categories.module.css';

function Categories() {
	return (
		<section className={styles.categories}>
			<nav className={styles.container}>
				<NavLink className={styles.link} to="/tables">
					<CategoriesLinkCard title="Столы" img={tables} />
				</NavLink>
				<NavLink className={styles.link} to="/chairs">
					<CategoriesLinkCard title="Стулья" cardRound img={armchairs} />
				</NavLink>
				<NavLink className={styles.link} to="/wardrobes">
					<CategoriesLinkCard title="Шкафы и хранение" img={wardrobes} />
				</NavLink>
				<NavLink className={styles.link} to="/sofas">
					<CategoriesLinkCard title="Диваны" cardRound img={sofas} />
				</NavLink>
			</nav>
		</section>
	);
}

export default Categories;
