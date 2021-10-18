import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

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

  return (
    <div>
      {questionsId}
      <br/>
      <button onClick={goToPrevQuestion}>PREVIOUS QUESTION</button>
      <button onClick={goToNextQuestion}>NEXT QUESTION</button>
      <br/>
      {currentQuestions.easyQuestions[questionsId].question}
      <br/>



    </div>
  )
}