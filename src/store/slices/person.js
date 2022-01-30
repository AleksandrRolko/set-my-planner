import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    persons: [],
  },
  reducers: {
    personsFetched: (state, action) => {
      state.persons = action.payload;
    },
  }
});

export const {
  personsFetched,
} = personSlice.actions;

export default personSlice.reducer;
