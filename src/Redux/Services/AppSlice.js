import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModelOpen: false,
  profileDetails: {},
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openProfileModel(state) {
      state.isModelOpen = !state.isModelOpen;
    },
    addProfileDetailsModel(state, action) {
      state.profileDetails = action.payload;
    },
  },
});
export const { openProfileModel, addProfileDetailsModel } = appSlice.actions;
export default appSlice.reducer;
