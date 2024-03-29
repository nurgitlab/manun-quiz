import React from "react";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";

import {ErrorPage} from "../ErrorPage/ErrorPage";
import {ShowMistakes} from "./ShowMistakes";
import "./FinalPage.css";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ITypesOfQuestions} from "../types";


export const FinalPage: React.FC = () => {
    const history = useHistory();

    const goBackToMain = () => {
        history.push("/");
    };

    const dispatch = useDispatch();

    const counterOfCorrectAnswers = useTypedSelector(state => state.questions.counter);
    const allQuestions = useTypedSelector(state => state.questions.easyQuestions.easyQuestions);

    let numberOfQuestions: number;

    try {
        numberOfQuestions = allQuestions.length;
    } catch (e) {
        numberOfQuestions = 0;
    }

    const [usersMistakes, setUsersMistakes] = React.useState<ITypesOfQuestions[]>([]);

    const showMistakes = () => {
        setUsersMistakes([]);
        let memIncorrectArray: ITypesOfQuestions[] = [];
        allQuestions.map((question) => {
            if (question.correctAnswer !== question.usersAnswer) {
                if (question.usersAnswer === "") {
                    question.usersAnswer = "Вы не выбрали вариант ответа!";
                }
                memIncorrectArray.push({
                    id: question.id,
                    question: question.question,
                    correctAnswer: question.correctAnswer,
                    usersAnswer: question.usersAnswer,
                    imageUrl: question.imageUrl,
                    answers: question.answers,
                });
            }
        });
        setUsersMistakes(memIncorrectArray);
    };

    return (
        <div>
            {(numberOfQuestions) > 0 ? (
                <div className={"final-main-block"}>
                    <div className={"final-info"}>
                        Поздравляем!
                    </div>
                    <div className={"final-info"}>
                        Вы прошли U.N.I.T.E.D. тест и набрали
                        <span className={"big-font"}>
                            {" " + counterOfCorrectAnswers + " "}
                        </span>
                        из
                        <span className={"big-font"}>
                            {" " + numberOfQuestions + " "}
                        </span>
                        очков.
                    </div>
                    <div
                        onClick={() => goBackToMain()}
                        className={"start-button"}
                    >
                        Вернуться на главную
                    </div>

                    {(numberOfQuestions - counterOfCorrectAnswers) === 0 ? (
                        <div className={"big-font"}>
                            WOW! Вы знаток Манчестер Юнайтеда!
                        </div>
                    ) : (
                        <div>
                            <div
                                onClick={() => showMistakes()}
                                className={"start-button"}
                            >
                                Показать мои ошибки
                            </div>
                            {usersMistakes.map((item, id) => {
                                return (
                                    <div key={id}>
                                        <ShowMistakes
                                            item={item}
                                            id={id}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            ) : (
                <ErrorPage/>
            )}
        </div>
    );
};