import React from "react";

import "./FinalPage.css"
import {ITypesOfQuestions} from "../types";


interface ShowMistakesProps {
    item: ITypesOfQuestions
    id: number
}

export const ShowMistakes: React.FC<ShowMistakesProps> =
    ({item, id}) => {
        return (
            <div
                key={id}
                className={"all-mistakes"}
            >
                <div className={"show-question"}>
                    {item.question}
                </div>
                <div className={"show-mistake"}>
                    {item.usersAnswer}
                </div>
                <div className={"show-answer"}>
                    {item.correctAnswer}
                </div>
            </div>
        )
    }