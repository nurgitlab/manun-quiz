import {NewsAction, NewsActionTypes} from "./todo";
import {IFullArticles} from "../../pages/types";


interface typedInitialState {
    news: IFullArticles,
}

const initialState: typedInitialState = {
    news: {
        status: "",
        totalResults: 0,
        articles: []
    },
};

export const newsReducer = (state = initialState, action: NewsAction): typedInitialState => {
    switch (action.type) {
        case NewsActionTypes.ADD_NEWS: {
            return {
                ...state,
                news: action.news
            };
        }

        default: {
            return state
        }
    }
};