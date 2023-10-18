import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import cartReducer from './cart/cart-slice';
import favoritesReducer from './favorites/favorites-slice';
import filtersReducer from './filters/filters-slice';
import furnitureReducer from './furniture/furniture-slice';
import modalReducer from './modal/modal-slice';
import ordersReducer from './orders/orders-slice';
import productsReducer from './products/products-slice';
import userReducer from './user/user-slice';

const store = configureStore({
	reducer: {
		modal: modalReducer,
		products: productsReducer,
		cart: cartReducer,
		favorites: favoritesReducer,
		filters: filtersReducer,
		furniture: furnitureReducer,
		auth: authReducer,
		user: userReducer,
		orders: ordersReducer,
	},
});

export default store;
