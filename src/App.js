import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StartQuiz } from "./pages/StartQuiz";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { QuestionShow } from "./pages/QuestonShow/QuestionShow";
import { FinalPage } from "./pages/FinalPage";


export const App = () => {
  const defaultState = {
    easyQuestions: [],
    counter: 0,
  };

  const reducer = (state = defaultState, action) => {
    if (action.type === "IMPORT_ALL_QUESTIONS") {
      return {...state, easyQuestions: action.newQuestions};
    } else if (action.type === "IMPORT_RANDOM_QUESTIONS") {
      let randomQuestions = [];
      for (let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * (action.newQuestions.easyQuestions.length - i)) + i;
        let mem = action.newQuestions.easyQuestions[randomNum];
        action.newQuestions.easyQuestions[randomNum] = action.newQuestions.easyQuestions[i];
        action.newQuestions.easyQuestions[i] = mem;
        for (let j = 0; j < 4; j++) {
          let randomAnswer = Math.floor(Math.random() * action.newQuestions.easyQuestions[i].answers.length - j) + j;
          let memAnswer = action.newQuestions.easyQuestions[i].answers[randomAnswer];
          action.newQuestions.easyQuestions[i].answers[randomAnswer] = action.newQuestions.easyQuestions[i].answers[j];
          action.newQuestions.easyQuestions[i].answers[j] = memAnswer;
        }
        randomQuestions.push(mem);
      }
      return {...state, easyQuestions: {easyQuestions: randomQuestions}, counter: 0};
    } else if (action.type === "ADD_ANSWER") {
      action.allQuestions.easyQuestions[action.questionsId].usersAnswer = action.usersAnswer;
      let numberOfCorrectQuestions = 0;
      action.allQuestions.easyQuestions.map((question) => {
        if (question.correctAnswer == question.usersAnswer) {
          numberOfCorrectQuestions++;
        }
      });
      return {...state, easyQuestions: action.allQuestions, counter: numberOfCorrectQuestions};
    } else {
      return state;
    }
  };

  const store = createStore(reducer);

  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path={"/"}
              exact={true}
            >
              <div>
                Manchester
                <br/>
                <MainPage/>
              </div>
            </Route>

            <Route
              path={"/questions"}
              exact={true}
            >
              <div>
                Manchester
                <br/>
                <StartQuiz/>
              </div>
            </Route>

            <Route
              path={"/questions/:questionsId"}
              render={({
                         match: {
                           params: {
                             questionsId
                           }
                         }
                       }) => (
                <QuestionShow questionsId = {questionsId}/>
              )}
            >
            </Route>

            <Route
              path={"/final"}
              exact={true}
            >
              <div>
                <FinalPage />
              </div>
            </Route>

          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}