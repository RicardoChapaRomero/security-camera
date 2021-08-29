
// DUCKS pattern
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    amountAdded(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, amountAdded } = homeSlice.actions;
export default homeSlice.reducer;
