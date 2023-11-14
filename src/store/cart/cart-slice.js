import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { getLocalData } from '../../utils/localStorage';

const initialState = {
	cart: {},
	loading: true,
	error: null,
};

export const sliceName = 'cart';

export const getCart = createAsyncThunk(
	`${sliceName}/getCart`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const cart = getLocalData('access')
				? await api.getCartWithAuth()
				: await api.getCart();
			return fulfillWithValue({ ...cart });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const addToCart = createAsyncThunk(
	`${sliceName}/addToCart`,
	async ({ product, quantity }, { fulfillWithValue, rejectWithValue }) => {
		try {
			const cart = getLocalData('access')
				? await api.addToCartWithAuth(product, quantity)
				: await api.addToCart(product, quantity);
			return fulfillWithValue({ ...cart });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const deleteFromCart = createAsyncThunk(
	`${sliceName}/deleteFromCart`,
	async (id, { fulfillWithValue, rejectWithValue }) => {
		try {
			const cart = getLocalData('access')
				? await api.deleteFromCartWithAuth(id)
				: await api.deleteFromCart(id);
			return fulfillWithValue({ ...cart });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const cartSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getCart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getCart.fulfilled, (state, action) => {
				state.cart = action.payload;
				state.loading = false;
			})
			.addCase(getCart.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(addToCart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addToCart.fulfilled, (state, action) => {
				state.cart = action.payload;
				state.loading = false;
			})
			.addCase(addToCart.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(deleteFromCart.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteFromCart.fulfilled, (state, action) => {
				state.cart = action.payload;
				state.loading = false;
			})
			.addCase(deleteFromCart.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectCart = (state) => state[sliceName];
export default cartSlice.reducer;
