import React from "react";
import {createStore} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import {reducer} from "./reducer/reducer";
import {MainPage} from "./pages/MainPage/MainPage";
import {StartQuiz} from "./pages/StartQuiz/StartQuiz";
import {QuestionShow} from "./pages/QuestonShow/QuestionShow";
import {FinalPage} from "./pages/FinalPage/FinalPage";
import {NavBar} from "./pages/NavBar/NavBar";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {AboutProject} from "./pages/AboutProject/AboutProject";
import {Contacts} from "./pages/Contacts/Contacts";
import "./App.css";


export const App: React.FC = () => {
  const store = createStore(reducer);

  return (
      <div>
        <div className={"main-background"}>
          <Provider store={store}>
            <BrowserRouter>
              <NavBar/>
              <Switch>
                <Route
                    path={"/"}
                    exact={true}
                >
                  <div className={"central-div"}>
                    <MainPage/>
                  </div>
                </Route>

                <Route
                    path={"/questions"}
                    exact={true}
                >
                  <div className={"central-div"}>
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
                        <div className={"central-div"}>
                          <QuestionShow
                              questionsId={questionsId}
                          />
                        </div>
                    )}
                >
                </Route>

                <Route
                    path={"/final"}
                    exact={true}
                >
                  <div className={"central-div"}>
                    <FinalPage/>
                  </div>
                </Route>

                <Route
                    path={"/about"}
                    exact={true}
                >
                  <div className={"central-div"}>
                    <AboutProject/>
                  </div>
                </Route>

                <Route
                    path={"/contacts"}
                    exact={true}
                >
                  <div className={"central-div"}>
                    <Contacts/>
                  </div>
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>
      </div>
  );
};