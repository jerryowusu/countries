import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {
    addCountry: (state, action) => {
      state.push(action.payload);
    },

  },
});

export const { addCountry } = countrySlice.actions;
export default countrySlice.reducer;
