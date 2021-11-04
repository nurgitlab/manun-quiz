import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";

import {MainPage} from "./pages/MainPage/MainPage";
import {StartQuiz} from "./pages/StartQuiz/StartQuiz";
import {QuestionShow} from "./pages/QuestonShow/QuestionShow";
import {FinalPage} from "./pages/FinalPage/FinalPage";
import {NavBar} from "./pages/NavBar/NavBar";
import {AboutProject} from "./pages/AboutProject/AboutProject";
import {Contacts} from "./pages/Contacts/Contacts";
import {store} from "./store";
import "./App.css";


export const App = () => {
    return (
        <div>
            <div className={"main-background"}>
                <Provider store={store}>
                    <BrowserRouter>
                        <NavBar/>
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

                        <Route path={"/questions/:questionsId"}>
                            <div className={"central-div"}>
                                <QuestionShow/>
                            </div>
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
                    </BrowserRouter>
                </Provider>
            </div>
        </div>
    );
};