import { useHistory } from "react-router";
import axios from "axios";
import { ROOT_API } from "../consts";
import React from "react";
import "./MainPage.css"
import { useDispatch, useSelector } from "react-redux";


export const MainPage = () => {
  const history = useHistory();
  const dispatch = useDispatch()

  const storeNews = useSelector(state => state.news)
  console.log(storeNews)

  const goToQuestions = () => {
    history.push("/questions");
  };

  const showNews = () => {
    if (storeNews.length === 0) {
      axios.get(ROOT_API)
        .then(response => {
          dispatch({
            type: "ADD_NEWS",
            news: response.data,
          })
        })
        .catch(e => {
          console.error(e.message);
        });
    }

  };

  React.useEffect(() => {
    showNews();
  }, []);

  // console.log(news.articles)
  // (news.articles).map(article=>{
  //   console.log(article)
  // })

  return (
    <div>
      <button onClick={goToQuestions}><h2>Go to questions</h2></button>
      <br/>
      <div
        className={"news-div"}
      >
        {storeNews.length != 0 ?
          storeNews.articles.map((article, id)=>{
            return(
              <div
                key={id}
                className={"article"}
              >
                <img
                  src={`${article.urlToImage}`}
                  width={"100%"}
                />
                <div
                  className={"article-title"}>
                  {article.title}
                </div>
              </div>
            )
          }) :
          <div>No news</div>
        }
      </div>

    </div>
  );
};