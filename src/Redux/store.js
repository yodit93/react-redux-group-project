/* eslint-disable */
/* stylelint-disable */
import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/missionsSlice';
import rocketsReducer from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
