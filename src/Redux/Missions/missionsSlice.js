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
    leaveMission: (state, action) => {
      const newMissions = state.missions.map((mission) => {
        if (action.payload !== mission.id) {
          return mission;
        }
        return {
          ...mission,
          joined: false,
        };
      });
      return {
        ...state,
        missions: newMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const data = action.payload;
        const newMissions = data.map((mission) => (({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          joined: false,
        })));
        return {
          ...state,
          missions: newMissions,
          isLoading: false,
        };
      })
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
