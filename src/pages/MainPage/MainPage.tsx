import React from "react";
import {useHistory} from "react-router";

import "./MainPage.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IArticle} from "../types";
import {fetchNews} from "../../store/action-creators/news";
import {useActions} from "../../hooks/useActions";


export const MainPage: React.FC = () => {
    const history = useHistory();
    const {fetchNews} = useActions()

    const fullNews = useTypedSelector(state => state.news)
    const storeNews = fullNews.news

    const goToQuestions = () => {
        history.push("/questions");
    };

    React.useEffect(() => {
        fetchNews()
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
                {(!fullNews.loading) ? (
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
                            Идёт загрузка новостей...
                        </div>
                    </div>
                )}

                {
                    (fullNews.error !== null) ? (
                        <div className={"article"}>
                            <div className={"article-title"}>
                                {fullNews.error}
                            </div>
                        </div>
                    ) : (<></>)
                }
            </div>
        </div>
    );
};