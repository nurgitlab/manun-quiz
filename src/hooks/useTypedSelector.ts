import {TypedUseSelectorHook, useSelector} from "react-redux";
import {ReducerTypes} from "../reducer/reducer";


export const useTypedSelector: TypedUseSelectorHook<ReducerTypes> = useSelector