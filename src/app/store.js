/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
