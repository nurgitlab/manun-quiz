import {combineReducers} from "redux";
import {questionsReducer} from "./questionsReducer";
import {newsReducer} from "./newsReducer";

export const rootReducer = combineReducers({
    questions: questionsReducer,
    news: newsReducer,
})

export type RootState = ReturnType<typeof rootReducer>