import { useHistory } from "react-router";
import axios from "axios";
import { ROOT_API } from "../consts";
import React from "react";
import "./MainPage.css";
import { useDispatch, useSelector } from "react-redux";


export const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const storeNews = useSelector(state => state.news);

  const goToQuestions = () => {
    history.push("/questions");
  };

  console.log(storeNews)

  const showNews = () => {
    if (storeNews.length === 0) {
      axios.get(ROOT_API)
        .then(response => {
          dispatch({
            type: "ADD_NEWS",
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

        {storeNews.length != 0 ?
          storeNews.articles.map((article, id) => {
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
                <div
                  className={"article-title"}
                >
                  {article.description}
                </div>
              </a>
            );
          }) :
          <div
            className={"article"}
          >
            <div
              className={"article-title"}
            >
              Loading...
            </div>
          </div>
        }
      </div>
    </div>
  );
};