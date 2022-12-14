//TODO authSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
    },
    isActive: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
  isActive,
} = authSlice.actions;

export default authSlice.reducer;
