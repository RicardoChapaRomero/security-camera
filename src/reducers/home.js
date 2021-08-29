
// DUCKS pattern
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  timestampFilter: undefined,
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
    updateTimestampFilter(state, action){
      state.timestampFilter = action.payload;
    }
  },
});

export const { increment, amountAdded, updateTimestampFilter } = homeSlice.actions;
export default homeSlice.reducer;
