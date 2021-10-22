import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./QuestionShow.css";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import React from "react";


export const QuestionShow = ({questionsId}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const currentQuestions = useSelector(state => state.easyQuestions);

  const [usersAnswer,setUsersAnswer] = React.useState("")

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
    setUsersAnswer(answer)
    dispatch({
      type: "ADD_ANSWER",
      usersAnswer: answer,
      questionsId: qId,
      allQuestions: currentQuestions,
    });
  };

  const counterOfCorrectAnswers = useSelector(state => state.counter);

  const goToPrevModule = () => {
    history.push(`/questions/`);
  };

  const goToFinalPage = () => {
    history.push(`/final`);
  };

  console.log(currentQuestions)

  return (
    <div>
      {(currentQuestions.length) !== 0 ?
        <div
          className={"question-main-block"}
        >
          {questionsId}
          <br/>
          {counterOfCorrectAnswers}
          <br/>
          {questionsId == 0 ?
            <div onClick={goToPrevModule}>GO BACK</div> :
            <div onClick={goToPrevQuestion}>PREVIOUS QUESTION</div>
          }
          {questionsId == (currentQuestions.easyQuestions.length - 1) ?
            <div onClick={goToFinalPage}>FINISH</div> :
            <div onClick={goToNextQuestion}>NEXT QUESTION</div>
          }
          <br/>

          <span className={"some-class"}>{currentQuestions.easyQuestions[questionsId].question}</span>
          <br/>
          <ul>
            {currentQuestions.easyQuestions[questionsId].answers.map((answer, id) => {
              return (
                <div key={id}>
                  {currentQuestions.easyQuestions[questionsId].usersAnswer == answer ?
                    <span>*</span> : <span></span>
                  }
                  <div
                    className={"quiz-answer-button"}
                    onClick={() => addAnswer(
                      answer,
                      currentQuestions.easyQuestions[questionsId],
                      questionsId,
                    )
                  }>
                    {answer}
                  </div>
                </div>
              );
            })}
          </ul>
        </div> :
        <div>
          <ErrorPage />
        </div>
      }
    </div>
  );
};