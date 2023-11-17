import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { DynamicBreadcrumb } from '../DynamicBreadcrumb/DynamicBreadcrumb';
import styles from './Breadcrumbs.module.css';

const routes = [
	{ path: '/', breadcrumb: 'Главная' },
	{ path: '/about', breadcrumb: 'О компании' },
	{ path: '/user', breadcrumb: 'Личный кабинет' },
	{ path: '/cart', breadcrumb: 'Корзина' },
	{ path: '/chosen', breadcrumb: 'Избранное' },
	{ path: '/chairs', breadcrumb: 'Кресла и стулья' },
	{ path: '/tables', breadcrumb: 'Столы' },
	{ path: '/wardrobes', breadcrumb: 'Шкафы и системы хранения' },
	{ path: '/sofas', breadcrumb: 'Диваны' },
	{ path: '/sale', breadcrumb: 'Распродажа' },
	{ path: '/rules-sale', breadcrumb: 'Условия заказа' },
	{ path: '/under-construction', breadcrumb: 'Страница в разработке' },
	{ path: '/rules-consent', breadcrumb: 'Условия конфиденциальности' },
	{ path: '/rules-data', breadcrumb: 'Политика обработки персональных данных' },
	{ path: '/order-form', breadcrumb: 'Форма заказа' },
	{ path: '/user/my_orders', breadcrumb: 'Мои заказы' },
	{ path: '/user/feedback', breadcrumb: 'Отзывы' },
	{ path: '/user/me', breadcrumb: 'Личные данные' },
	{ path: '/favorites', breadcrumb: 'Избранное' },
	{ path: '/order', breadcrumb: 'Заказ' },
	{ path: '/payment', breadcrumb: 'Страница оплаты' },
	{ path: '/product', breadcrumb: 'Карточка товара' },
	{ path: '/product/:pageId', breadcrumb: DynamicBreadcrumb },
	{
		path: '/user/my_orders/:pageId',
		breadcrumb: DynamicBreadcrumb,
	},
];

function Breadcrumbs() {
	const location = useLocation();
	const breadcrumbs = useBreadcrumbs(routes);

	if (location.pathname === '/') {
		return null;
	}
	return (
		<ul className={styles.list}>
			{breadcrumbs.map(({ match, breadcrumb }, index) => (
				<li className={styles.crumb} key={match.pathname}>
					<NavLink className={styles.link} to={match.pathname}>
						{breadcrumb}
					</NavLink>
					{breadcrumbs.length === index + 1 ? null : (
						<div className={styles.arrow} />
					)}
				</li>
			))}
		</ul>
	);
}

export { Breadcrumbs };
