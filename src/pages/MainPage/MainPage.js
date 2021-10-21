import { useHistory } from "react-router";
import axios from "axios";
import { ROOT_API } from "../consts";
import React from "react";
import "./MainPage.css"


export const MainPage = () => {
  const history = useHistory();
  const goToQuestions = () => {
    history.push("/questions");
  };

  const [news, setNews] = React.useState([])

  const showNews = () => {
    axios.get(ROOT_API)
      .then(response => {
        setNews(response.data)
      })
      .catch(e => {
        console.error(e.message);
      });
    console.log(news)
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
        {news.length != 0 ?
          news.articles.map((article, id)=>{
            return(
              <div
                key={id}
                className={"article"}
              >
                {/*<div*/}
                {/*  className={"article-image"}*/}
                {/*>*/}

                {/*</div>*/}
                <img
                  src={`${article.urlToImage}`}
                  height={"200px"}
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