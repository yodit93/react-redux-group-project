/* eslint-disable */
/* stylelint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};
const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return rejectWithValue('Unable to fetch data');
  }
});
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRockets: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (action.payload !== rocket.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: true,
        };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
    cancelReservation: (state, action) => {
      const newRockets = state.rockets.map((rocket) => {
        if (action.payload !== rocket.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: false,
        };
      });
      return {
        ...state,
        rockets: newRockets,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const data = action.payload;
        const newRockets = data.map((rocket) => (({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          image: rocket.flickr_images[0],
          reserved: false,
        })));
        return {
          ...state,
          rockets: newRockets,
          isLoading: false,
        };
      })
      .addCase(fetchRockets.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { bookRockets, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
