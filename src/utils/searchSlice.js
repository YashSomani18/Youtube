import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachedResults: (state, actions) => {
      // return {...actions.payload, ...state};
      Object.assign(state, actions.payload);
    },
  },
});

export const { cachedResults } = searchSlice.actions;

export default searchSlice.reducer;
