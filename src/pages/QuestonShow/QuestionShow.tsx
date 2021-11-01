import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";

import {ErrorPage} from "../ErrorPage/ErrorPage";
import "./QuestionShow.css";
import {ADD_ANSWER} from "../../reducer/actions";
import {IBlockQuestions, ITypesOfAnswers} from "../types";
import {useTypedSelector} from "../../hooks/useTypedSelector";


interface QuestionShowProps {
  questionsId: number
}

export const QuestionShow: React.FC<QuestionShowProps> = ({questionsId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentQuestions = useTypedSelector(state => state.easyQuestions)

  // const currentQuestions = useSelector<IBlockQuestions>(
  //     state => state.easyQuestions
  // );
  const [usersAnswer, setUsersAnswer] = React.useState("");

  const goToNextQuestion = () => {
    history.push(`/questions/${Number(questionsId) + 1}`);
  };

  const goToPrevQuestion = () => {
    history.push(`/questions/${Number(questionsId) - 1}`);
  };

  const addAnswer = (
      answer: string,
      question: string,
      qId: number,
  ) => {
    setUsersAnswer(answer);
    dispatch({
      type: ADD_ANSWER,
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
          {questionsId == (currentQuestions.easyQuestions.length - 1) ? (
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
            {currentQuestions.easyQuestions[questionsId].question}
          </div>

          <div
              className={"all-ans-block"}
          >
            {currentQuestions.easyQuestions[questionsId].answers.map((
                answer: any,
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
                            currentQuestions.easyQuestions[questionsId],
                            questionsId,
                    )
                    }>
                    {currentQuestions.easyQuestions[questionsId].usersAnswer == answer ?
                      (<span>HERE</span>) : (<></>)
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
                className={"question-image-block"}
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