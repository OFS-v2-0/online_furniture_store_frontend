import styles from './CatalogGrid.module.css';
import foto from '../../assets/img/blue-chair.png';
import foto1 from '../../assets/img/armchair.png';
import CatalogCard from '../CatalogCard/CatalogCard';

const products = [
	{
		id: '1',
		title: 'Кресло Modern office Gray',
		img: `${foto}`,
		price: '49 990',
	},
	{
		id: '2',
		title: 'Кресло Modern office Gray',
		img: `${foto1}`,
		price: '49 990',
	},
	{
		id: '3',
		title: 'Кресло Modern office Gray',
		img: `${foto}`,
		price: '49 990',
	},
	{
		id: '4',
		title: 'Кресло Modern office Gray',
		img: `${foto1}`,
		price: '49 990',
	},
	{
		id: '5',
		title: 'Кресло Modern office Gray',
		img: `${foto}`,
		price: '49 990',
	},
	{
		id: '6',
		title: 'Кресло Modern office Gray',
		img: `${foto1}`,
		price: '49 990',
	},
	{
		id: '7',
		title: 'Кресло Modern office Gray',
		img: `${foto}`,
		price: '49 990',
	},
	{
		id: '8',
		title: 'Кресло Modern office Gray',
		img: `${foto1}`,
		price: '49 990',
	},
	{
		id: '9',
		title: 'Кресло Modern office Gray',
		img: `${foto1}`,
		price: '49 990',
	},
];

function CatalogGrid() {
	return (
		<div className={styles.catalog}>
			{
				products.map((product) => {
					return <CatalogCard
						key={product.id}
						title={product.title}
						img={product.img}
						price={product.price}
					/>;
				})
			}
		</div>
	);
}
export default CatalogGrid;
