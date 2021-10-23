import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./QuestionShow.css";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import React from "react";


export const QuestionShow = ({questionsId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentQuestions = useSelector(state => state.easyQuestions);

  const [usersAnswer, setUsersAnswer] = React.useState("");

  console.log(currentQuestions.length);
  console.log(currentQuestions);
  console.log("HERE");

  const goToNextQuestion = () => {
    history.push(`/questions/${Number(questionsId) + 1}`);
  };

  const goToPrevQuestion = () => {
    history.push(`/questions/${Number(questionsId) - 1}`);
  };

  const addAnswer = (answer, question, qId) => {
    setUsersAnswer(answer);
    dispatch({
      type: "ADD_ANSWER",
      usersAnswer: answer,
      questionsId: qId,
      allQuestions: currentQuestions,
    });
  };

  const goToFinalPage = () => {
    history.push(`/final`);
  };

  return (
    <div>
      {(currentQuestions.length) !== 0 ?
        <div
          className={"question-main-block"}
        >
          <div
            className={"progress"}
          >
            {Number(questionsId) + 1} | {currentQuestions.easyQuestions.length}
          </div>

          {questionsId == 0 ?
            <div
              className={"quiz-navigation"}
            >ЭТО ПЕРВЫЙ ВОПРОС!
            </div> :
            <div
              className={"quiz-navigation"}
              onClick={goToPrevQuestion}
            >
              ПРЕДЫДУЩИЙ ВОПРОС
            </div>
          }
          {questionsId == (currentQuestions.easyQuestions.length - 1) ?
            <div
              className={"quiz-navigation"}
              onClick={goToFinalPage}
            >
              ЗАКОНЧИТЬ ТЕСТ
            </div> :
            <div
              className={"quiz-navigation"}
              onClick={goToNextQuestion}
            >
              СЛЕДУЮЩИЙ ВОПРОС
            </div>
          }

          <div
            className={"question"}
          >
            {currentQuestions.easyQuestions[questionsId].question}
          </div>

          <div
            className={"all-ans-block"}
          >
            {currentQuestions.easyQuestions[questionsId].answers.map((answer, id) => {
              return (
                <div key={id}>
                  <div
                    className={"quiz-answer-button"}
                    onClick={() => addAnswer(
                      answer,
                      currentQuestions.easyQuestions[questionsId],
                      questionsId,
                    )
                    }>
                    {currentQuestions.easyQuestions[questionsId].usersAnswer == answer ?
                      <span>>>>| </span> : <span></span>
                    }
                    {answer}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={"all-ans-block"}
          >
            {currentQuestions.easyQuestions[questionsId].imageUrl !== "" ? (
              <div
                className={"start-image-block"}
              >
                <img
                  width={"100%"}
                  height={"auto"}
                  src={`${currentQuestions.easyQuestions[questionsId].imageUrl}`}
                />
              </div>
            ) : (
              <div>
              </div>
            )}
          </div>
        </div> :
        <div>
          <ErrorPage/>
        </div>
      }
    </div>
  );
};