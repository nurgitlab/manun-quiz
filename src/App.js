import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { StartQuiz } from "./pages/StartQuiz";
import { createStore } from "redux";
import { Provider } from "react-redux";


export const App = () => {
  const defaultState = {
    easyQuestions: []
  };

  const reducer = (state = defaultState, action) => {
    if (action.type === "IMPORT_ALL_QUESTIONS") {
      return {...state, easyQuestions: action.newQuestions};
    } else if (action.type === "IMPORT_RANDOM_QUESTIONS") {
      let randomQuestions = [];
      for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * (action.newQuestions.easyQuestions.length - i)) + i;
        let mem = action.newQuestions.easyQuestions[randomNum];
        action.newQuestions.easyQuestions[randomNum] = action.newQuestions.easyQuestions[i];
        action.newQuestions.easyQuestions[i] = mem;
        randomQuestions.push(mem);
      }
      return {...state, easyQuestions: {easyQuestions: randomQuestions}};
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
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}


