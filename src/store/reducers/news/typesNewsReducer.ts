import {IFullArticles} from "../../../pages/types";


export enum NewsActionTypes {
    FETCH_NEWS = "FETCH_NEWS",
    FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
    FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR"
}

interface FetchNewsAction {
    type:NewsActionTypes.FETCH_NEWS
}

interface FetchNewsSuccessAction {
    type:NewsActionTypes.FETCH_NEWS_SUCCESS
    payload: IFullArticles
}

interface FetchNewsSuccessError {
    type:NewsActionTypes.FETCH_NEWS_ERROR
    payload: string | null
}


export type NewsAction = FetchNewsAction | FetchNewsSuccessAction | FetchNewsSuccessError