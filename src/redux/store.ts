import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import shopSlice from "./shopSlice";
import trackOrderSlice from "./trackOrderSlice";
export const store = configureStore({
  reducer: {
    modalSlice,
    shopSlice,
    trackOrderSlice,
  },
});

export type DispatchType = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
