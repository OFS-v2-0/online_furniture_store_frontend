import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import { filters } from '../../utils/catalogFilters';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from './FiltersPanel.module.css';
import BlackButton from '../UI/BlackButton/BlackButton';

function FiltersPanel() {
	const handleApply = () => {};
	const handleReset = () => {};

	return (
		<div className={styles.container}>
			<h2 className={styles.heading}>Фильтр</h2>
			<Accordion
				className={styles.accordion}
				allowMultipleExpanded
				allowZeroExpanded
			>
				{filters.map((filter) => (
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

export default FiltersPanel;
