import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    Rockets: rocketReducer,
  },
});

export default store;
