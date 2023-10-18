import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	filters: {},
	loading: true,
	error: null,
	colors: [],
	collections: [],
	materials: [],
};

export const sliceName = 'filters';

export const fetchColors = createAsyncThunk(
	`${sliceName}/fetchColors`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getColors();
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

export const fetchMaterials = createAsyncThunk(
	`${sliceName}/fetchMaterials`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getMaterials();
			return fulfillWithValue([...data]);
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const filtersSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {
		setMinPrice: (state, action) => {
			state.filters.min_total_price = action.payload;
		},

		setMaxPrice: (state, action) => {
			state.filters.max_total_price = action.payload;
		},

		setMinWeight: (state, action) => {
			state.filters.weight_min = action.payload;
		},

		setMaxWeight: (state, action) => {
			state.filters.weight_max = action.payload;
		},

		setMinRaiting: (state, action) => {
			state.filters.min_rating_unused = action.payload;
		},
		setWarranty: (state, action) => {
			if (state.filters.warranty_min === action.payload) {
				state.filters.warranty_min = 0;
				state.filters.warranty_max = 0;
			} else {
				state.filters.warranty_min = action.payload;
				state.filters.warranty_max = action.payload;
			}
		},
		setInStock: (state) => {
			if (state.filters.in_stock === 'true') {
				state.filters.in_stock = '';
			} else state.filters.in_stock = 'true';
		},
		setToOrder: (state) => {
			if (state.filters.in_stock === 'false') {
				state.filters.in_stock = '';
			} else state.filters.in_stock = 'false';
		},
		setDelivery: (state) => {
			if (state.filters.fast_delivery === 'true') {
				state.filters.fast_delivery = '';
			} else state.filters.fast_delivery = 'true';
		},
		setPickup: (state) => {
			if (state.filters.fast_delivery === 'false') {
				state.filters.fast_delivery = '';
			} else state.filters.fast_delivery = 'false';
		},
		setColor: (state, action) => {
			state.filters.color = action.payload;
		},
		setCollection: (state, action) => {
			state.filters.collection = action.payload;
		},
		setMaterial: (state, action) => {
			state.filters.material = action.payload;
		},

		resetFilters: (state) => {
			state.filters = {};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchColors.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchColors.fulfilled, (state, action) => {
				state.colors = action.payload;
				state.loading = false;
			})
			.addCase(fetchColors.rejected, (state, action) => {
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
			})

			.addCase(fetchMaterials.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMaterials.fulfilled, (state, action) => {
				state.materials = action.payload;
				state.loading = false;
			})
			.addCase(fetchMaterials.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export const selectFilters = (state) => state[sliceName];
export const {
	setMinPrice,
	setMaxPrice,
	setMinRaiting,
	setMinWeight,
	setMaxWeight,
	setWarranty,
	setInStock,
	setToOrder,
	setDelivery,
	setPickup,
	setColor,
	setCollection,
	setMaterial,

	resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
