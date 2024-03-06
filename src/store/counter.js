import { createSlice } from "@reduxjs/toolkit";

const initalCounterValue = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initalCounterValue,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      console.log(action);
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;