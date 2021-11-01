import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import axios from "axios";

import {ROOT_API} from "../consts";
import "./MainPage.css";
import {ADD_NEWS} from "../../reducer/actions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IArticle} from "../types";


export const MainPage: React.FC = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const storeNews = useTypedSelector(state => state.news);

    const goToQuestions = () => {
        history.push("/questions");
    };

    const showNews = () => {
        if (storeNews.length === 0) {
            axios.get(ROOT_API)
                .then(response => {
                    dispatch({
                        type: ADD_NEWS,
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
            <div
                className={"news-div"}
            >
                <div
                    className={"article"}
                    onClick={goToQuestions}
                >
                    <div
                        className={"article-image"}
                    >
                        <img
                            src={`https://specializedfortworth.com/wp-content/uploads/2017/02/property-management-Arlington-1500x998.jpg`}
                            width={"100%"}
                        />
                    </div>
                    <div
                        className={"big-title"}
                    >
                        Проверь свои знания о Манчестер Юнайтеде!
                    </div>
                </div>
                {storeNews.length !== 0 ? (
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
                                {console.log(article)}
                                <div className={"article-image"}>
                                    <img
                                        src={`${article.urlToImage}`}
                                        width={"100%"}
                                    />
                                </div>
                                <div
                                    className={"article-title"}
                                >
                                    {article.description}
                                </div>
                            </a>
                        );
                    })
                ) : (
                    <div
                        className={"article"}
                    >
                        <div
                            className={"article-title"}
                        >
                            Loading...
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    );
};