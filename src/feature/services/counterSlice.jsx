import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increments: (state,{payload}) => {
    //   state.value += 1;
      state.value += payload;
    },
  },
});

export const {increments}= counterSlice.actions
export default counterSlice.reducer