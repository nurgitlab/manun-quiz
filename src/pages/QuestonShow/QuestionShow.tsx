import React from "react";
import {useDispatch} from "react-redux";
import {useHistory, useParams} from "react-router";

import {ErrorPage} from "../ErrorPage/ErrorPage";
import "./QuestionShow.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {QuestionsActionTypes} from "../../reducer/todo";


interface QuestionShowProps {
  questionsId: string
}

export const QuestionShow: React.FC = () => {
  const history = useHistory();
  const params = useParams<QuestionShowProps>()

  const dispatch = useDispatch();

  const currentQuestions: any = useTypedSelector(state => state.easyQuestions)

  const [usersAnswer, setUsersAnswer] = React.useState("");

  const goToNextQuestion = () => {
    history.push(`/questions/${Number(params.questionsId) + 1}`);
  };

  const goToPrevQuestion = () => {
    history.push(`/questions/${Number(params.questionsId)  - 1}`);
  };

  const addAnswer = (
      answer: string,
      question: string,
      qId: number,
  ) => {
    setUsersAnswer(answer);
    dispatch({
      type: QuestionsActionTypes.ADD_ANSWER,
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
      {(currentQuestions.length) !== 0 ? (
        <div
          className={"question-main-block"}
        >
          <div
            className={"progress"}
          >
            {Number(params.questionsId)  + 1} | {currentQuestions.easyQuestions.length}
          </div>

          {Number(params.questionsId) === 0 ?
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
          {Number(params.questionsId) === (currentQuestions.easyQuestions.length - 1) ? (
            <div
              className={"quiz-navigation"}
              onClick={goToFinalPage}
            >
              ЗАКОНЧИТЬ ТЕСТ
            </div>
          ) : (
            <div
              className={"quiz-navigation"}
              onClick={goToNextQuestion}
            >
              СЛЕДУЮЩИЙ ВОПРОС
            </div>
          )
          }

          <div
            className={"question"}
          >
            {currentQuestions.easyQuestions[Number(params.questionsId)].question}
          </div>

          <div
              className={"all-ans-block"}
          >
            {currentQuestions.easyQuestions[Number(params.questionsId)].answers.map((
                answer: string,
                id: number,
            ) => {
              return (
                  <div
                      key={id}
                  >
                    <div
                        className={"quiz-answer-button"}
                        onClick={() => addAnswer(
                            answer,
                            currentQuestions.easyQuestions[Number(params.questionsId)],
                            Number(params.questionsId),
                        )
                        }>
                      {currentQuestions.easyQuestions[Number(params.questionsId)].usersAnswer === answer ?
                          (<span>* | </span>) : (<></>)
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
            {currentQuestions.easyQuestions[Number(params.questionsId)].imageUrl !== "" ? (
              <div
                className={"question-image-block"}
              >
                <img
                  width={"100%"}
                  height={"auto"}
                  src={`${currentQuestions.easyQuestions[Number(params.questionsId)].imageUrl}`}
                />
              </div>
            ) : (
                <>
                </>
            )}
          </div>
        </div>
      ) : (
        <div>
          <ErrorPage/>
        </div>
      )
      }
    </div>
  );
};