import myQuestions from "../../db.json";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./StartQuiz.css";


export const StartQuiz = () => {
  const history = useHistory();
  const obj = myQuestions;

  const dispatch = useDispatch();

  const goToQuestions = () => {
    dispatch({
      type: "IMPORT_RANDOM_QUESTIONS",
      newQuestions: obj,
    });
    history.push('/questions/0');
  };

  return (
    <div
      className={"start-main-block"}
    >
      <div className={"start-intro"}>
        <div>
          Итак, вы всё таки решились пройти этот QUIZ.
        </div>
        <div>
          Проверим на что вы способны!
        </div>
        <div>
          Это простой тест с вариантами ответов.
        </div>
      </div>
      <div
        className={"start-button"}
        onClick={goToQuestions}
      >
        Начать тест!
      </div>
      <div
        className={"start-image-block"}
      >
        <img
          width={"100%"}
          height={"auto"}
          src={"https://resources.sport-fm.gr/supersportFM/images/news/20/04/29/180232.jpg?w=880&f=bicubic"}
        />
      </div>
    </div>
  );
};