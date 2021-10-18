import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";


export const FinalPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const counterOfCorrectAnswers = useSelector(state => state.counter);
  const numberOfQuestions = useSelector(state => state.easyQuestions.easyQuestions.length)
  return(
    <div>
      THIS IS FINAL PAGE!
      <br/>
      YOU FINISHED U.N.I.T.E.D QUIZ AND SOLVED
      <br/>
      <h2>{counterOfCorrectAnswers}/{numberOfQuestions}</h2>
      <br/>
      SCORES
    </div>
  )
}