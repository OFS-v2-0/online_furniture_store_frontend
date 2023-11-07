import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	filters: {},
	loading: true,
	error: null,
	colors: [],
	collections: [],
	brands: [],
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

export const fetchBrands = createAsyncThunk(
	`${sliceName}/fetchBrands`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const data = await api.getBrands();
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
		setPrice: (state, action) => {
			state.filters.min_total_price = action.payload.min;
			state.filters.max_total_price = action.payload.max;
		},

		setWeight: (state, action) => {
			state.filters.weight_min = action.payload.min;
			state.filters.weight_max = action.payload.max;
		},

		setMinRaiting: (state, action) => {
			state.filters.min_rating_unused = action.payload;
		},
		setWarranty: (state, action) => {
			state.filters.warranty_min = action.payload.min;
			state.filters.warranty_max = action.payload.max;
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
		setBrand: (state, action) => {
			state.filters.brand = action.payload;
		},
		setMaterial: (state, action) => {
			state.filters.material = action.payload;
		},
		setSwingMechanism: (state, action) => {
			if (state.filters.swing_mechanism === action.payload) {
				state.filters.swing_mechanism = '';
			} else state.filters.swing_mechanism = action.payload;
		},
		setArmrestAdjustment: (state, action) => {
			if (state.filters.armrest_adjustment === action.payload) {
				state.filters.armrest_adjustment = '';
			} else state.filters.armrest_adjustment = action.payload;
		},
		setConstruction: (state, action) => {
			if (state.filters.construction === action.payload) {
				state.filters.construction = '';
			} else state.filters.construction = action.payload;
		},
		setFurnitureType: (state, action) => {
			if (state.filters.furniture_type === action.payload) {
				state.filters.furniture_type = '';
			} else state.filters.furniture_type = action.payload;
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

			.addCase(fetchBrands.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchBrands.fulfilled, (state, action) => {
				state.brands = action.payload;
				state.loading = false;
			})
			.addCase(fetchBrands.rejected, (state, action) => {
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
	setPrice,
	setMinRaiting,
	setWeight,
	setWarranty,
	setInStock,
	setToOrder,
	setDelivery,
	setPickup,
	setColor,
	setCollection,
	setBrand,
	setMaterial,
	setSwingMechanism,
	setArmrestAdjustment,
	setConstruction,
	setFurnitureType,

	resetFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
