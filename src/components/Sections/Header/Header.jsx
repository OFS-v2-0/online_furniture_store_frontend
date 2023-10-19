import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { openModal } from '../../../store/modal/modal-slice';

import user from '../../../assets/img/person.svg';
import Logo from '../../UI/Logo/Logo';
import SearchField from '../../UI/SearchField/SearchField';
import SingleSelect from '../../UI/Select/SingleSelect';
import Grocery from '../../UI/Grocery/Grocery';
import HeartCounter from '../../UI/HeartCounter/HeartCounter';
import styles from './Header.module.css';
import { selectCart } from '../../../store/cart/cart-slice';
import { selectAuth } from '../../../store/auth/auth-slice';
import { selectFavorites } from '../../../store/favorites/favorites-slice';

function Header() {
	const location = useLocation();
	const dispatch = useDispatch();
	const [contentShown, setContentShown] = useState(false);
	const [linkStateActive, setLinkStateActive] = useState(false);
	const [searchValue, setSearchValue] = useState();
	const [searchInputShown, setSearchInputShow] = useState(false);
	const { cart } = useSelector(selectCart);
	const { favorites } = useSelector(selectFavorites);
	const { isAuth } = useSelector(selectAuth);
	const navigate = useNavigate();

	const handleShowMenu = () => {
		setContentShown(!contentShown);
		setLinkStateActive(!linkStateActive);
	};

	const handleHideMenu = () => {
		setContentShown(false);
	};

	const handleChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	const handleSearchInputShow = () => {
		setSearchInputShow((prev) => !prev);
	};

	const handleHideSearchInput = () => {
		if (searchInputShown) {
			setSearchInputShow(false);
		}
	};

	return (
		<header>
			{location.pathname === '/' ||
			location.pathname === '/favorites' ||
			location.pathname === '/tables' ||
			location.pathname === '/chairs' ||
			location.pathname === '/wardrobes' ||
			location.pathname === '/sofas' ||
			location.pathname.includes('/product/') ||
			location.pathname.includes('/user/') ? (
				<div className={styles.header}>
					<div className={styles.main} onClick={handleHideSearchInput}>
						<div className={styles.main__container}>
							<Logo />
							<ul className={styles.menu}>
								<li className={styles.menu__element}>
									<button
										type="button"
										onClick={handleShowMenu}
										className={
											linkStateActive
												? styles.menu__item_active
												: styles.menu__item
										}
									>
										<p
											className={
												linkStateActive
													? styles.menu__text_active
													: styles.menu__text
											}
										>
											Каталог
										</p>
									</button>
								</li>
								<li className={styles.menu__element}>
									<NavLink
										to="/under-construction"
										className={styles.menu__item}
									>
										<p className={styles.menu__text}>O компании</p>
									</NavLink>
								</li>
								<li className={styles.menu__element}>
									<NavLink to="#" className={styles.menu__item}>
										<button
											type="button"
											onClick={() => dispatch(openModal('backCallModal'))}
											className={styles.menu__text}
										>
											Обратный звонок
										</button>
									</NavLink>
								</li>
							</ul>
							<div
								className={
									searchInputShown ? styles.contacts_inactive : styles.contacts
								}
							>
								<a href="tel: +74955555555" className={styles.phone}>
									+7 (495) 555–55–55
								</a>
								<SingleSelect options={[{ value: 'Москва', label: 'Москва' }]} />
							</div>
							<SearchField
								onChange={handleChange}
								value={searchValue}
								isVisible={searchInputShown}
							/>
							<nav className={styles.nav}>
								<button
									className={
										searchInputShown
											? styles.searchIcon_inactive
											: styles.searchIcon
									}
									type="button"
									onClick={handleSearchInputShow}
								/>
								<button
									className={styles.nav__item}
									type="button"
									onClick={() => {
										return isAuth
											? navigate('/user/my_orders')
											: dispatch(openModal('authModal'));
									}}
								>
									<img
										className={styles.userIcon}
										src={user}
										alt="иконка кабинет пользователя"
									/>
								</button>
								<NavLink className={styles.nav__item} to="/favorites">
									<HeartCounter amount={favorites.products?.length || 0} />
								</NavLink>
								<NavLink className={styles.nav__item} to="/cart">
									<Grocery amount={cart.total_quantity || 0} />
								</NavLink>
							</nav>
						</div>
					</div>
					<div
						onClick={handleHideMenu}
						className={
							contentShown ? styles.categories_visible : styles.categories
						}
					>
						<div className={styles.categories__container}>
							<nav className={styles.categories__list}>
								<NavLink
									to="/chairs"
									className={
										location.pathname === '/chairs'
											? styles.categories__item_active
											: styles.categories__item
									}
								>
									Кресла и стулья
								</NavLink>
								<NavLink
									to="/tables"
									className={
										location.pathname === '/tables'
											? styles.categories__item_active
											: styles.categories__item
									}
								>
									Столы
								</NavLink>
								<NavLink
									to="/wardrobes"
									className={
										location.pathname === '/wardrobes'
											? styles.categories__item_active
											: styles.categories__item
									}
								>
									Шкафы и системы хранения
								</NavLink>
								<NavLink
									to="/sofas"
									className={
										location.pathname === '/sofas'
											? styles.categories__item_active
											: styles.categories__item
									}
								>
									Диваны
								</NavLink>
								{/* <NavLink
									to="/sale"
									className={
										location.pathname === '/sale'
											? styles.categories__item_active
											: styles.categories__item
									}
								>
									Sale
								</NavLink> */}
							</nav>
						</div>
					</div>
				</div>
			) : (
				<header className={styles.header}>
					<div className={styles.main} onClick={handleHideSearchInput}>
						<div className={styles.main__container}>
							<Logo />
							<div className={styles.wrapper}>
								<SearchField
									onChange={handleChange}
									value={searchValue}
									isVisible={searchInputShown}
								/>
								<button
									className={
										searchInputShown
											? styles.searchIcon_inactive
											: styles.searchIcon
									}
									type="button"
									onClick={handleSearchInputShow}
								/>
								<SingleSelect options={[{ value: 'Москва', label: 'Москва' }]} />
							</div>
						</div>
					</div>
				</header>
			)}
		</header>
	);
}

export default Header;
