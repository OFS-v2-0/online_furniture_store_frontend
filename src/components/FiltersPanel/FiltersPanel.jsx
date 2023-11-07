import { useEffect } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { mainFilters, specialFilters } from '../../utils/catalogFilters';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from './FiltersPanel.module.css';
import BlackButton from '../UI/BlackButton/BlackButton';
import { resetFilters, selectFilters } from '../../store/filters/filters-slice';
import { fetchProductsWithParams } from '../../store/products/products-slice';

function FiltersPanel({ category }) {
	const dispatch = useDispatch();
	const { filters } = useSelector(selectFilters);

	useEffect(() => {
		dispatch(resetFilters());
	}, [dispatch, category]);

	const handleApply = () => {
		dispatch(fetchProductsWithParams({ category, ...filters }));
	};
	const handleReset = () => {
		dispatch(resetFilters());
		dispatch(fetchProductsWithParams({ category }));
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>Фильтр</h2>
			<Accordion
				className={styles.accordion}
				allowMultipleExpanded
				allowZeroExpanded
			>
				{[...mainFilters, ...specialFilters[category]].map((filter) => (
					<AccordionItem key={filter.id} className={styles.accordionItem}>
						<AccordionItemHeading>
							<AccordionItemButton className={styles.accordionItemButton}>
								{filter.heading}
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel className={styles.accordionItemPanel}>
							<div className={styles.accordionItemContent}>
								{filter.content}
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
			<BlackButton type="button" buttonText="Применить" onClick={handleApply} />
			<button className={styles.link} onClick={handleReset} type="button">
				Сбросить фильтр
			</button>
		</div>
	);
}

FiltersPanel.propTypes = {
	category: PropTypes.string.isRequired,
};

export default FiltersPanel;
