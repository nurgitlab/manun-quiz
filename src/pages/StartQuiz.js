import myQuestions from "../db.json";
import { useDispatch, useSelector } from "react-redux";


export const StartQuiz = () => {
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
  return (
    <div>
      Start Quiz Page
      <br/>
      <h2>Total scores: {counterOfCorrectAnswers}</h2>
      <br/>
      <button onClick={addQuestionsToRedux}>SHOW QUESTIONS</button>
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
          }) : (<div>SSH</div>)}
        </ul>
      </div>
    </div>
  );
};