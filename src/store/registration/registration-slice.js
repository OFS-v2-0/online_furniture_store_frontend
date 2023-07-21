import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
	user: {},
	loading: true,
	error: null,
};

export const sliceName = 'registration';

export const fetchUser = createAsyncThunk(
	`${sliceName}/fetchUser`,
	async (_, { fulfillWithValue, rejectWithValue }) => {
		try {
			const user = await api.getUser();
			return fulfillWithValue({ ...user });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const registration = createAsyncThunk(
	`${sliceName}/registration`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			const user = await api.createUser(data);
			return fulfillWithValue({ ...user });
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

export const forgotPassword = createAsyncThunk(
	`${sliceName}/forgotPassword`,
	async (data, { fulfillWithValue, rejectWithValue }) => {
		try {
			await api.resetPassword(data);
			return fulfillWithValue();
		} catch (err) {
			return rejectWithValue(err);
		}
	},
);

const authSlice = createSlice({
	name: sliceName,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

		.addCase(fetchUser.pending, (state) => {
			state.loading = true;
			state.error = null;
		})
		.addCase(fetchUser.fulfilled, (state, action) => {
			state.user = action.payload;
			state.loading = false;
		})
		.addCase(fetchUser.rejected, (state, action) => {
			state.error = action.payload;
			state.loading = false;
		})

			.addCase(registration.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(registration.fulfilled, (state, action) => {
				state.user = action.payload;
				state.loading = false;
			})
			.addCase(registration.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			})

			.addCase(forgotPassword.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(forgotPassword.fulfilled, (state) => {
				state.loading = false;
			})
			.addCase(forgotPassword.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export default authSlice.reducer;
