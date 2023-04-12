import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/Missions';
import rocketsReducer from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    Missions: missionReducer,
    Rockets: rocketsReducer,
  },
});

export default store;
