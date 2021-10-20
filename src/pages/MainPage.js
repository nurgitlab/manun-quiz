import {useHistory} from "react-router";


export const MainPage = () => {
  const history = useHistory()
  const goToQuestions = () => {
    history.push("/questions")
  }

  return (
    <div>

      <br/>
      <button onClick={goToQuestions}><h2>Go to questions</h2></button>
    </div>
  );
};