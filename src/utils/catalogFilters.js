import { v4 as uuidv4 } from 'uuid';
import Price from '../components/CatalogFilters/Price';
import InStock from '../components/CatalogFilters/InStock';
import Raiting from '../components/CatalogFilters/Raiting';
import Delivery from '../components/CatalogFilters/Delivery';
import Collection from '../components/CatalogFilters/Collection';
import Warranty from '../components/CatalogFilters/Warranty';
import SpecialOffers from '../components/CatalogFilters/SpecialOffers';
import Construction from '../components/CatalogFilters/Construction';
import Colors from '../components/CatalogFilters/Colors';
import Material from '../components/CatalogFilters/Material';
import RockingMechanism from '../components/CatalogFilters/RockingMechanism';
import AdjustingArmrests from '../components/CatalogFilters/AdjustingArmrests';

export const filters = [
	{
		id: uuidv4(),
		heading: 'Цена',
		content: <Price />,
	},
	{
		id: uuidv4(),
		heading: 'В наличии',
		content: <InStock />,
	},
	{
		id: uuidv4(),
		heading: 'Рейтинг',
		content: <Raiting />,
	},
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
	{
		id: uuidv4(),
		heading: 'Гарантия',
		content: <Warranty />,
	},
	{
		id: uuidv4(),
		heading: 'Специальные предложения',
		content: <SpecialOffers />,
	},
	{
		id: uuidv4(),
		heading: 'Конструкция',
		content: <Construction />,
	},
	{
		id: uuidv4(),
		heading: 'Цвет',
		content: <Colors />,
	},
	{
		id: uuidv4(),
		heading: 'Материал',
		content: <Material />,
	},
	{
		id: uuidv4(),
		heading: 'Механизм качания',
		content: <RockingMechanism />,
	},
	{
		id: uuidv4(),
		heading: 'Регулировка подлокотников',
		content: <AdjustingArmrests />,
	},
];
