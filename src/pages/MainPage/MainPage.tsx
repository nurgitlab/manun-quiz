import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";
import axios from "axios";

import {ROOT_API} from "../consts";
import "./MainPage.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IArticle, IFullArticles} from "../types";
import {NewsActionTypes} from "../../store/reducers/todo";


export const MainPage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const storeNews = useTypedSelector(state => state.news.news);

    const goToQuestions = () => {
        history.push("/questions");
    };

    const showNews = () => {
        if (storeNews.articles.length === 0) {
            axios.get<IFullArticles>(ROOT_API)
                .then(response => {
                    dispatch({
                        type: NewsActionTypes.ADD_NEWS,
                        news: response.data,
                    });
                })
                .catch(e => {
                    console.error(e.message);
                });
        }
    };

    React.useEffect(() => {
        showNews();
    }, []);

    return (
        <div>
            <div className={"news-div"}>
                <div
                    className={"article"}
                    onClick={goToQuestions}
                >
                    <div className={"article-image"}>
                        <img
                            src={`https://specializedfortworth.com/wp-content/uploads/2017/02/property-management-Arlington-1500x998.jpg`}
                            width={"100%"}
                        />
                    </div>
                    <div className={"big-title"}>
                        Проверь свои знания о Манчестер Юнайтеде!
                    </div>
                </div>
                {(storeNews.articles.length !== 0) ? (
                    storeNews.articles.map((
                        article: IArticle,
                        id: number
                    ) => {
                        return (
                            <a
                                key={id}
                                className={"article"}
                                href={`${article.url}`}
                            >
                                <div className={"article-image"}>
                                    <img
                                        src={`${article.urlToImage}`}
                                        width={"100%"}
                                    />
                                </div>
                                <div className={"article-title"}>
                                    {article.description}
                                </div>
                            </a>
                        );
                    })
                ) : (
                    <div className={"article"}>
                        <div className={"article-title"}>
                            Loading...
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};