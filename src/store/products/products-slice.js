import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { encodeQueryString } from '../../utils/helpers';
import api from '../../utils/api';

const initialState = {
	allProducts: [],
	loading: true,
	error: null,
	popularProducts: [],
	discountProducts: [],
	fastDeliveryProducts: [],
	productsWithParams: [],
	collections: [],
};

export const sliceName = 'products';

export const fetchProducts = createAsyncThunk(
	`${sliceName}/fetchProducts`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getAllProducts();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchProductsWithParams = createAsyncThunk(
	`${sliceName}/fetchProductsWithParams`,
	async (params, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getProductsWithParams(encodeQueryString(params));
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchPopularProducts = createAsyncThunk(
	`${sliceName}/fetchPopularProducts`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getPopularProducts();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchDiscountProducts = createAsyncThunk(
	`${sliceName}/fetchDiscountProducts`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getDiscountProducts();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchFastDeliveryProducts = createAsyncThunk(
	`${sliceName}/fetchFastDeliveryProducts`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getFastDeliveryProducts();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const fetchCollections = createAsyncThunk(
	`${sliceName}/fetchCollections`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getCollections();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const productSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		clearProductsWithParams: (state) => {
			state.productsWithParams = [];
		},
		sortProductsByPriceAsc: (state) => {
			state.productsWithParams = state.productsWithParams.sort(
				(a, b) => a.total_price - b.total_price,
			);
		},
		sortProductsByPriceDesc: (state) => {
			state.productsWithParams = state.productsWithParams.sort(
				(a, b) => b.total_price - a.total_price,
			);
		},
		sortProductsByDiscountDesc: (state) => {
			state.productsWithParams = state.productsWithParams.sort(
				(a, b) => b.discount - a.discount,
			);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.allProducts = action.payload;
				state.loading = false;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchProductsWithParams.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProductsWithParams.fulfilled, (state, action) => {
				state.productsWithParams = action.payload;
				state.loading = false;
			})
			.addCase(fetchProductsWithParams.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchPopularProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchPopularProducts.fulfilled, (state, action) => {
				state.popularProducts = action.payload;
				state.loading = false;
			})
			.addCase(fetchPopularProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchDiscountProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchDiscountProducts.fulfilled, (state, action) => {
				state.discountProducts = action.payload;
				state.loading = false;
			})
			.addCase(fetchDiscountProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchFastDeliveryProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchFastDeliveryProducts.fulfilled, (state, action) => {
				state.fastDeliveryProducts = action.payload;
				state.loading = false;
			})
			.addCase(fetchFastDeliveryProducts.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(fetchCollections.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCollections.fulfilled, (state, action) => {
				state.collections = action.payload;
				state.loading = false;
			})
			.addCase(fetchCollections.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectProducts = (state) => state[sliceName];
export const {
	clearProductsWithParams,
	sortProductsByPriceAsc,
	sortProductsByPriceDesc,
	sortProductsByDiscountDesc,
} = productSlice.actions;
export default productSlice.reducer;
