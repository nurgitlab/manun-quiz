import React from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router";

import myQuestions from "../../db.json";
import "./StartQuiz.css";
import {IAllQuestions} from "../types";
import {QuestionsActionTypes} from "../../store/reducers/questions/typesQuestionsReducer";


export const StartQuiz: React.FC = () => {
    const history = useHistory();

    const obj: IAllQuestions = myQuestions;

    const dispatch = useDispatch();

    const goToQuestions = () => {
        dispatch({
            type: QuestionsActionTypes.IMPORT_RANDOM_QUESTIONS,
            newQuestions: obj,
        });

        history.push('/questions/0');
    };

    return (
        <div className={"start-main-block"}>
            <div className={"start-intro"}>
                <div>
                    Итак, вы всё таки решились пройти этот QUIZ.
                </div>
                <div>
                    Проверим на что вы способны!
                </div>
                <div>
                    Это простой тест с вариантами ответов.
                </div>
            </div>
            <div
                className={"start-button"}
                onClick={goToQuestions}
            >
                Начать тест!
            </div>
            <div className={"start-picture-block"}>
                <img
                    width={"100%"}
                    height={"auto"}
                    src={"https://resources.sport-fm.gr/supersportFM/images/news/20/04/29/180232.jpg?w=880&f=bicubic"}
                />
            </div>
        </div>
    );
};