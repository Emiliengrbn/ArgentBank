import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    firstName: null,
    lastName: null,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.firstName = null;
      state.lastName = null;
    },
  },
});
