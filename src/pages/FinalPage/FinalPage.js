import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { ErrorPage } from "../ErrorPage/ErrorPage";
import { ShowMistakes } from "./ShowMistakes";
import "./FinalPage.css";


export const FinalPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const counterOfCorrectAnswers = useSelector(state => state.counter);
  const allQuestions = useSelector(state => state.easyQuestions.easyQuestions);

  let numberOfQuestions;

  try {
    numberOfQuestions = allQuestions.length;
  } catch (e) {
    numberOfQuestions = -1;
  }

  const [usersMistakes, setUsersMistakes] = React.useState([]);

  const goBackToMain = () => {
    history.push("/");
  };

  const showMistakes = () => {
    setUsersMistakes([]);
    let memIncorrectArray = [];
    allQuestions.map((question) => {
      if (question.correctAnswer != question.usersAnswer) {
        if (question.usersAnswer == "") {
          question.usersAnswer = "Вы не выбрали вариант ответа!";
        }
        memIncorrectArray.push({
          question: question.question,
          correctAns: question.correctAnswer,
          usersAns: question.usersAnswer,
        });
      }
    });
    setUsersMistakes(memIncorrectArray);
  };

  return (
    <div>
      {(numberOfQuestions) > 0 ? (
        <div
          className={"final-main-block"}
        >
          <div
            className={"final-info"}
          >
            Поздравляем!
          </div>
          <div
            className={"final-info"}
          >
            Вы прошли U.N.I.T.E.D. тест и набрали
            <span
              className={"big-font"}
            >
              {" " + counterOfCorrectAnswers + " "}
            </span>
            из
            <span
              className={"big-font"}
            >
              {" " + numberOfQuestions + " "}
             </span>
            очков.
          </div>

          <div
            onClick={() => goBackToMain()}
            className={"start-button"}
          >
            Вернуться на главную
          </div>

          {(numberOfQuestions - counterOfCorrectAnswers) === 0 ? (
            <div
              className={"big-font"}
            >
              WOW! Вы знаток Манчестер Юнайтеда!
            </div>
          ) : (
            <div>
              <div
                onClick={() => showMistakes()}
                className={"start-button"}
              >
                Показать мои ошибки
              </div>
              {usersMistakes.map((item, id) => {
                return (
                  <ShowMistakes
                    item={item}
                    id={id}
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div>
          <ErrorPage/>
        </div>
      )}
    </div>
  );
};