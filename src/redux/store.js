import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesData';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
