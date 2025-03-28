import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  modalAuthorizationVisiblty: boolean;
  orderModalVisiblity: boolean;
  trackModalVisiblty: boolean;
}

const initialState: InitialStateType = {
  modalAuthorizationVisiblty: false,
  orderModalVisiblity: false,
  trackModalVisiblty: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalAuthorizationModalVisiblty(state) {
      state.modalAuthorizationVisiblty = !state.modalAuthorizationVisiblty;
    },
    setOrderModalVisiblty(state) {
      state.orderModalVisiblity = !state.orderModalVisiblity;
    },
    setTrackModalVisiblty(state) {
      state.trackModalVisiblty = !state.trackModalVisiblty;
    },
  },
});

export const {
  setModalAuthorizationModalVisiblty,
  setOrderModalVisiblty,
  setTrackModalVisiblty,
} = modalSlice.actions;
export default modalSlice.reducer;
