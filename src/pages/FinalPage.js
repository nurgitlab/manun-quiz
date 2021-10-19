import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React from "react";


export const FinalPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const counterOfCorrectAnswers = useSelector(state => state.counter);
  const numberOfQuestions = useSelector(state => state.easyQuestions.easyQuestions.length);
  const allQuestions = useSelector(state => state.easyQuestions.easyQuestions);
  const [usersMistakes, setUsersMistakes] = React.useState([])

  const goBackToMain = () => {
    history.push("/");
  };

  const showMistakes = () => {
    setUsersMistakes([])
    let memIncorrectArray = []
    allQuestions.map((question) => {
      if (question.correctAnswer != question.usersAnswer) {
        if (question.usersAnswer == "") {
          question.usersAnswer = "Вы не выбрали вариант ответа!"
        }
        memIncorrectArray.push({
          question: question.question,
          correctAns: question.correctAnswer,
          usersAns: question.usersAnswer,
        });
      }
    });
    setUsersMistakes(memIncorrectArray)
  };

  console.log(usersMistakes)

  return (
    <div>
      THIS IS FINAL PAGE!
      <br/>
      YOU FINISHED U.N.I.T.E.D QUIZ AND SOLVED
      <br/>
      <h2>{counterOfCorrectAnswers}/{numberOfQuestions}</h2>
      <br/>
      SCORES
      <br/>
      <button onClick={() => goBackToMain()}>RETURN TO MAIN PAGE</button>
      <br/>
      <button onClick={() => showMistakes()}>SHOW MY MISTAKES</button>
      <ul>
        list
        {usersMistakes.map((item, id) => {
          return (
            <li key={id}>
              ____________
              <br/>
              Вопрос: {item.question}
              <br/>
              Правильный ответ: {item.correctAns}
              <br/>
              Ваш ответ: {item.usersAns}
            </li>
          );
        })}
      </ul>
    </div>
  )
}