import { createSlice } from "@reduxjs/toolkit";
import type { OrderType } from "../../@types";

interface InitialStateType {
  order: Partial<OrderType>;
}
const initialState: InitialStateType = {
  order: {},
};
const trackOrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder(state, { payload }) {
      state.order = payload;
    },
  },
});

export const { setOrder } = trackOrderSlice.actions;
export default trackOrderSlice.reducer;
