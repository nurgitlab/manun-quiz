import { useHistory } from "react-router";
import axios from "axios";
import { ROOT_API } from "./consts";
import React from "react";


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

      <ul>
        {news.length != 0 ?
          news.articles.map((newsPaper)=>{
            return(
              <div>
                <li>{newsPaper.title}</li>
                <br/>
              </div>
            )
          }) :
          <div>No news</div>
        }
      </ul>
    </div>
  );
};