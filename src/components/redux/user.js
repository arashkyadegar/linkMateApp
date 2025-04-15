// src/features/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: {} },
  reducers: {
    fetched: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetched } = userSlice.actions;
export default userSlice.reducer;
