import myQuestions from "../db.json";


export const StartQuiz = () => {
  const obj = myQuestions;
  console.log(obj);
  // Вот тут в целом вопросы можно вызвать и через AXIOS с сервера, заглушка

  // Тут я должен положить файлы в REDUX!!!
  return (
    <div>
      Start Quiz Page
      <br/>
      <div>
        <ul>
          {obj.easyQuestions.map((question) => {

          })}
        </ul>
      </div>
    </div>
  );
};