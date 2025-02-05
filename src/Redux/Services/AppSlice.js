import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isModelOpen: false,
  profileDetails: {},
  isLogin: Boolean(localStorage.getItem("user")),
  user: JSON.parse(localStorage.getItem("user")) || null,
};
const appSlice = createSlice({
  name: "app",
  initialState,
  user: null,
  reducers: {
    openProfileModel(state) {
      state.isModelOpen = !state.isModelOpen;
    },
    addProfileDetailsModel(state, action) {
      state.profileDetails = action.payload;
    },
    saveUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.isLogin = true;
    },
    logoutUser(state) {
      state.user = null;
      state.isLogin = false;
      localStorage.removeItem("user");
    },
  },
});
export const { openProfileModel, addProfileDetailsModel, saveUser, logoutUser } = appSlice.actions;
export default appSlice.reducer;
