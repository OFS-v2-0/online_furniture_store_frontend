import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AboutPage, HomePage } from '../../pages';
import CartPage from '../../pages/CartPage/CartPage';
import ConsentDataProcessing from '../../pages/ConsentDataProcessing/ConsentDataProcessing';
import DataProcessingPolicy from '../../pages/DataProcessingPolicy/DataProcessingPolicy';
import FavoritesPage from '../../pages/FavoritesPage/FavoritesPage';
import OrderPage from '../../pages/OrderPage/OrderPage';
import OrderingForm from '../../pages/OrderingForm/OrderingForm';
import PageInDevelopment from '../../pages/PageInDevelopment/PageInDevelopment';
import ProfileForm from '../../pages/ProfileForm/ProfileForm';
import TradingRules from '../../pages/TradingRules/TradingRules';
import UserAccount from '../../pages/UserAccount/UserAccount';
import { getCart } from '../../store/cart/cart-slice';
import { getFavorites } from '../../store/favorites/favorites-slice';
import { closeModal, selectModal } from '../../store/modal/modal-slice';
import {
	fetchCollections,
	fetchPopularProducts,
	fetchProducts,
} from '../../store/products/products-slice';
import ProtectedRoute from '../Hoc/ProtectedRoute/ProtectedRoute';

import ProductPage from '../../pages/ProductPage/ProductPage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import { updateToken } from '../../store/auth/auth-slice';
import { fetchUser } from '../../store/user/user-slice';
import { modals } from '../../utils/modals';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import Modal from '../Modals/Modal/Modal';
import Footer from '../Sections/Footer/Footer';
import Header from '../Sections/Header/Header';
import { UserOrders } from '../UserOrders/UserOrders';
import styles from './App.module.css';

function App() {
	const dispatch = useDispatch();
	const { modalOpen, currentModal } = useSelector(selectModal);
	useEffect(() => {
		dispatch(fetchProducts());
		dispatch(fetchPopularProducts());
		dispatch(fetchCollections());
		dispatch(getCart());
		dispatch(getFavorites());
		dispatch(updateToken());
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Header />
				<main id="main" className={styles.app__main}>
					<Breadcrumbs />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/chosen" element={<PageInDevelopment />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/product/:id" element={<ProductPage />} />
						<Route path="/arm-chairs" element={<PageInDevelopment />} />
						<Route path="/tables" element={<CatalogPage />} />
						<Route path="/wardrobes" element={<PageInDevelopment />} />
						<Route path="/sofas" element={<PageInDevelopment />} />
						<Route path="/sale" element={<PageInDevelopment />} />
						<Route path="/rules-sale" element={<TradingRules />} />
						<Route path="/under-construction" element={<PageInDevelopment />} />
						<Route path="/rules-consent" element={<ConsentDataProcessing />} />
						<Route path="/rules-data" element={<DataProcessingPolicy />} />
						<Route path="/order-form" element={<OrderingForm />} />
						<Route path="/payment" element={<PageInDevelopment />} />
						<Route path="/user/feedback" element={<PageInDevelopment />} />
						<Route
							path="/user/my_orders"
							element={
								<ProtectedRoute>
									<UserAccount>
										<UserOrders />
									</UserAccount>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/user/my_orders/:id"
							element={
								<ProtectedRoute>
									<UserAccount>
										<OrderPage />
									</UserAccount>
								</ProtectedRoute>
							}
						/>
						<Route path="/favorites" element={<FavoritesPage />} />
						<Route
							path="/user/me"
							element={
								<ProtectedRoute>
									<UserAccount>
										<ProfileForm />
									</UserAccount>
								</ProtectedRoute>
							}
						/>
						<Route path="/product" element={<Navigate to="/" replace />} />
						<Route path="/user" element={<Navigate to="/user/my_orders" replace />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Routes>
				</main>
				<Footer />
				<Modal open={modalOpen} onClose={() => dispatch(closeModal())}>
					{modals[currentModal]}
				</Modal>
			</BrowserRouter>
		</div>
	);
}

export default App;
