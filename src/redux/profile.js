import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    firstName: null,
    lastName: null,
  },
  reducers: {
    firstname: (state, action) => {
      state.firstName = action.payload
    },
    lastname: (state, action) => {
        state.lastName = action.payload
    },
  },
});
