import myQuestions from "../db.json";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";


export const StartQuiz = () => {
  const history = useHistory()
  const obj = myQuestions;

  // Вот тут в целом вопросы можно вызвать и через AXIOS с сервера, заглушка
  // Тут я должен положить файлы в REDUX!!!

  const dispatch = useDispatch();

  const addQuestionsToRedux = () => {
    dispatch({
      type: "IMPORT_RANDOM_QUESTIONS",
      newQuestions: obj,
    });
  };

  const currentQuestions = useSelector(state => state.easyQuestions);
  const counterOfCorrectAnswers = useSelector(state => state.counter);

  const addAnswer = (answer, question, qId) => {
    dispatch({
      type: "ADD_ANSWER",
      usersAnswer: answer,
      questionsId: qId,
      allQuestions: currentQuestions,
    });
  };

  const goToQuestions = () => {
    history.push('/questions/0')
  }

  return (
    <div>
      Start Quiz Page
      <br/>
      <h2>Total scores: {counterOfCorrectAnswers}</h2>
      <br/>
      <button onClick={addQuestionsToRedux}>SHOW QUESTIONS</button>
      <button onClick={goToQuestions}>Go to the questions</button>
      <br/>
      <div>
        <ul>
          {currentQuestions.easyQuestions ? currentQuestions.easyQuestions.map((question, qId) => {
            return (
              <li key={qId}>
                {question.question}
                <br/>
                <ul>
                  {
                    question.answers.map((answer, id) => {
                      return (
                        <div key={id}>
                          <li key={id}>
                            <button onClick={() => addAnswer(answer, question, qId)}>{answer}</button>
                          </li>
                        </div>
                      );
                    })}
                </ul>
              </li>
            );
          }) : (<div>No questions</div>)}
        </ul>
      </div>
    </div>
  );
};