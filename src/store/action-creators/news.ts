import {NewsAction, NewsActionTypes} from "../reducers/news/typesNewsReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {ROOT_API} from "../../pages/consts";
import {IFullArticles} from "../../pages/types";


export const fetchNews = () => {
    return async (dispatch: Dispatch<NewsAction>) => {
        try {
            dispatch({type: NewsActionTypes.FETCH_NEWS})
            const response = await axios.get<IFullArticles>(ROOT_API)
            setTimeout(() => {
                dispatch({
                    type: NewsActionTypes.FETCH_NEWS_SUCCESS,
                    payload: response.data
                })
            }, 1000)
        } catch (e) {
            dispatch({
                type: NewsActionTypes.FETCH_NEWS_ERROR,
                payload: "Произошла ошибка!"
            })
        }
    }
}