import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { getLocalData } from '../../utils/localStorage';

const initialState = {
	favorites: {},
	loading: true,
	error: null,
};

export const sliceName = 'favorites';

export const getFavorites = createAsyncThunk(
	`${sliceName}/getFavorites`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const favorites = getLocalData('access')
				? await api.getFavoritesWithAuth()
				: await api.getFavorites();
			return fulfillWithValue({ ...favorites });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const addToFavorites = createAsyncThunk(
	`${sliceName}/addToFavorites`,
	async ({ product }, { fulfillWithValue, rejectWithValue }) => {
		try {
			const favorites = getLocalData('access')
				? await api.addToFavoritesWithAuth(product)
				: await api.addToFavorites(product);
			return fulfillWithValue({ ...favorites });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const deleteFromFavorites = createAsyncThunk(
	`${sliceName}/deleteFromFavorites`,
	async (id, { fulfillWithValue, rejectWithValue }) => {
		try {
			const favorites = getLocalData('access')
				? await api.deleteFromFavoritesWithAuth(id)
				: await api.deleteFromFavorites(id);
			return fulfillWithValue({ ...favorites });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const favoritesSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFavorites.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getFavorites.fulfilled, (state, action) => {
				state.favorites = action.payload.products
					? action.payload
					: { products: Object.values(action.payload) };
				state.loading = false;
			})
			.addCase(getFavorites.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(addToFavorites.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(addToFavorites.fulfilled, (state, action) => {
				state.favorites = action.payload.products
					? action.payload
					: { products: Object.values(action.payload) };
				state.loading = false;
			})
			.addCase(addToFavorites.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(deleteFromFavorites.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(deleteFromFavorites.fulfilled, (state, action) => {
				state.favorites = action.payload.products
					? action.payload
					: { products: Object.values(action.payload) };
				state.loading = false;
			})
			.addCase(deleteFromFavorites.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectFavorites = (state) => state[sliceName];
export default favoritesSlice.reducer;
