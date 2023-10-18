import { v4 as uuidv4 } from 'uuid';
import Range from '../components/CatalogFilters/Range';
import InStock from '../components/CatalogFilters/InStock';
// import Raiting from '../components/CatalogFilters/Raiting';
import Delivery from '../components/CatalogFilters/Delivery';
import Collection from '../components/CatalogFilters/Collection';
// import Brand from '../components/CatalogFilters/Brand';
// import Warranty from '../components/CatalogFilters/Warranty';
// import SpecialOffers from '../components/CatalogFilters/SpecialOffers';
// import Colors from '../components/CatalogFilters/Colors';
// import Material from '../components/CatalogFilters/Material';

export const mainFilters = [
	{
		id: uuidv4(),
		heading: 'Цена',
		content: <Range type="price" minValue={0} maxValue={99999} rangeBar labelInput="&#8381;" />,
	},
	{
		id: uuidv4(),
		heading: 'В наличии',
		content: <InStock />,
	},
	// {
	// 	id: uuidv4(),
	// 	heading: 'Рейтинг',
	// 	content: <Raiting />,
	// },
	{
		id: uuidv4(),
		heading: 'Доставка',
		content: <Delivery />,
	},
	{
		id: uuidv4(),
		heading: 'Коллекция',
		content: <Collection />,
	},
	// {
	// 	id: uuidv4(),
	// 	heading: 'Бренд',
	// 	content: <Brand />,
	// },
	{
		id: uuidv4(),
		heading: 'Вес товара',
		content: <Range type="weight" minValue={0} maxValue={99} rangeBar labelInput="кг" />,
	},
	{
		id: uuidv4(),
		heading: 'Гарантия',
		content: <Range type="warranty" minValue={2} maxValue={5} labelInput="лет" />,
	},
	// {
	// 	id: uuidv4(),
	// 	heading: 'Специальные предложения',
	// 	content: <SpecialOffers />,
	// },
	// {
	// 	id: uuidv4(),
	// 	heading: 'Цвет',
	// 	content: <Colors />,
	// },
	// {
	// 	id: uuidv4(),
	// 	heading: 'Материал',
	// 	content: <Material />,
	// },
];
