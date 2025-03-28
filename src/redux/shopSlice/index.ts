import { createSlice } from "@reduxjs/toolkit";
import { getStore, setStore } from "../../generic/store";
import { CartTypeData } from "../../@types";

interface InitialStateType {
  data: CartTypeData[];
  coupon: number;
}

const initialState: InitialStateType = {
  data: getStore("data") || [],
  coupon: 0,
};
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addData(state, { payload }) {
      if (state.data.find((value) => value._id === payload._id)) {
        state.data = state.data.map((value) => {
          if (value._id === payload._id) {
            console.log(value.userPrice);
            return {
              ...value,
              counter: (value.counter += 1),
              userPrice: value.counter * value.price,
            };
          }
          return value;
        });
        console.log("ifdan keyin");
        setStore("data", state.data);
        return;
      }
      console.log("ok");
      state.data = [
        ...state.data,
        { ...payload, counter: 1, userPrice: payload.price },
      ];
      console.log("ok");
      setStore("data", state.data);
    },
    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      setStore("data", state.data);
    },
    counterEdited(state, { payload }) {
      state.data = state.data.map((value) => {
        if (value._id === payload.id) {
          return {
            ...value,
            counter:
              payload.type === "increment"
                ? (value.counter += 1)
                : (value.counter -= 1),
            userPrice: value.counter * value.price,
          };
        }
        return value;
      });
      setStore("data", state.data);
    },
    getCoupon(state, { payload }) {
      state.coupon = payload;
    },
    order(state) {
      localStorage.removeItem("data");
      state.coupon = 0;
      state.data = [];
    },
  },
});

export const { addData, deleteData, counterEdited, getCoupon, order } =
  shopSlice.actions;
export default shopSlice.reducer;
