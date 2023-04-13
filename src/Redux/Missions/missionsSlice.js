/* eslint-disable */
/* stylelint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};
const url = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async (_, { rejectWithValue }) => {
  try {
    const response = await axios(url);
    console.log('data', response.data);
    return response.data;
  } catch (err) {
    return rejectWithValue('Unable to fetch data');
  }
});
const missionsSlice = createSlice({
  name: 'missions',
  initialState,

});

export default missionsSlice.reducer;
