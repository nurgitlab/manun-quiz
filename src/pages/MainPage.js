import {useHistory} from "react-router";


export const MainPage = () => {
  const history = useHistory()
  const goToQuestions = () => {
    history.push("/questions")
  }

  return (
    <div>
      Main Page Manchester United
      <br/>
      <button onClick={goToQuestions}>Go to questions</button>
    </div>
  );
};