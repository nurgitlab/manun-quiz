import myQuestions from "../db.json";
import { useDispatch, useSelector } from "react-redux";


export const StartQuiz = () => {
  const obj = myQuestions;
  console.log(obj);

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
  console.log(currentQuestions);
  return (
    <div>
      Start Quiz Page
      <br/>
      <button onClick={addQuestionsToRedux}>SHOW QUESTIONS</button>
      <br/>
      <div>
        <ul>
          {currentQuestions.easyQuestions ? currentQuestions.easyQuestions.map((question, id) => {
            return (
              <li key={id}>
                {question.question}
                <br/>
                <ul>
                  {question.answers.map((answer, id) => {
                    return (
                      <li key={id}>
                        {answer}
                      </li>
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