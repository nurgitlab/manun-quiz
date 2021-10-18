import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./QuestionShow.css";

export const QuestionShow = ({questionsId}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const currentQuestions = useSelector(state => state.easyQuestions)
  console.log(currentQuestions)

  const goToNextQuestion = () => {
    history.push(`/questions/${Number(questionsId)+1}`)
    console.log("PUSHED")
  }

  const goToPrevQuestion = () => {
    history.push(`/questions/${Number(questionsId)-1}`)
  }

  const addAnswer = (answer, question, qId) => {
    dispatch({
      type: "ADD_ANSWER",
      usersAnswer: answer,
      questionsId: qId,
      allQuestions: currentQuestions,
    });
  };
  console.log(currentQuestions.easyQuestions[questionsId]);
  const counterOfCorrectAnswers = useSelector(state => state.counter);
  const goToPrevModule = () => {
    history.push(`/questions/`);
  };
  console.log(currentQuestions.easyQuestions.length);
  const goToFinalPage = () => {
    history.push(`/final`)
  };
  return (
    <div>
      {questionsId}
      <br/>
      {counterOfCorrectAnswers}
      <br/>
      {questionsId == 0 ?
        <button onClick={goToPrevModule}>GO BACK</button> :
        <button onClick={goToPrevQuestion}>PREVIOUS QUESTION</button>
      }
      {questionsId == (currentQuestions.easyQuestions.length - 1) ?
        <button onClick={goToFinalPage}>FINISH</button> :
        <button onClick={goToNextQuestion}>NEXT QUESTION</button>
      }
      <br/>
      <span className={"some-class"}>{currentQuestions.easyQuestions[questionsId].question}</span>
      <br/>
      <ul>
        {currentQuestions.easyQuestions[questionsId].answers.map((answer, id) => {
          return (
            <li key={id}>
              <button onClick={() => addAnswer(
                answer,
                currentQuestions.easyQuestions[questionsId],
                questionsId)
              }>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}