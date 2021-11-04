import {combineReducers} from "redux";
import {questionsReducer} from "./questions/questionsReducer";
import {newsReducer} from "./news/newsReducer";


export const rootReducer = combineReducers({
    questions: questionsReducer,
    news: newsReducer,
})

export type RootState = ReturnType<typeof rootReducer>