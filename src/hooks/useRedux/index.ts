import type { RootStore, DispatchType } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useReduxSelctor: TypedUseSelectorHook<RootStore> = useSelector;
export const useReduxDispatch = () => useDispatch<DispatchType>();
