import {BrowserRouter, Route, Switch} from "react-router-dom"
import { MainPage } from "./pages/MainPage";
import { StartQuiz } from "./pages/StartQuiz";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/"}
          exact={true}
        >
          <div>
            Manchester
            <br/>
            <MainPage />
          </div>
        </Route>

        <Route
          path={"/questions"}
          exact={true}
        >
          <div>
            Manchester
            <br/>
            <StartQuiz />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


