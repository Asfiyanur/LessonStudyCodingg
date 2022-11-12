// create slice ile bir tase in başlangıcı verilir. Slice lar 3 lü yapılar olarak kullanır. actionType'lar + actionCreater'lar + reduce'lar = createSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  //   action typelara göre atate leri değştirir.(reducslar) nested yapı var =>
  //  ( key:value ) olarak yazılır.
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
