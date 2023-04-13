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
  reducers: {
    joinMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (action.payload !== mission.id) {
          return mission;
        }
        return {
          ...mission,
          joined: true,
        };
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
    
  }
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
