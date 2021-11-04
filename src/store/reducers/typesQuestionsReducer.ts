import {IAllQuestions} from "../../pages/types";


export enum QuestionsActionTypes {
    IMPORT_RANDOM_QUESTIONS = "IMPORT_RANDOM_QUESTIONS",
    ADD_ANSWER = "ADD_ANSWER",
}

interface ImportRandomQuestionsAction {
    type: QuestionsActionTypes.IMPORT_RANDOM_QUESTIONS
    newQuestions: IAllQuestions
}

interface AddAnswerAction {
    type: QuestionsActionTypes.ADD_ANSWER
    usersAnswer: string
    questionsId: number
    allQuestions: IAllQuestions
}

export type QuestionsAction = AddAnswerAction | ImportRandomQuestionsAction