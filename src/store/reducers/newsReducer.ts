import {NewsAction, NewsActionTypes} from "./typesNewsReducer";
import {IFullArticles} from "../../pages/types";


interface typedInitialState {
    news: IFullArticles,
    loading: boolean,
    error: null | string
}

const initialState: typedInitialState = {
    news: {
        status: "",
        totalResults: 0,
        articles: []
    },
    loading: false,
    error: null
};

export const newsReducer = (state = initialState, action: NewsAction): typedInitialState => {
    switch (action.type) {
        case NewsActionTypes.FETCH_NEWS: {
            return {
                ...state,
                loading: true,
            };
        }

        case NewsActionTypes.FETCH_NEWS_SUCCESS: {
            return {
                ...state,
                loading: false,
                news: action.payload
            };
        }

        case NewsActionTypes.FETCH_NEWS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        default: {
            return state
        }
    }
};