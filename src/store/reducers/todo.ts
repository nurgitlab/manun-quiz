import {IAllQuestions, IArticle, IFullArticles} from "../../pages/types";

export enum QuestionsActionTypes {
    IMPORT_RANDOM_QUESTIONS = "IMPORT_RANDOM_QUESTIONS",
    ADD_ANSWER = "ADD_ANSWER",
}

export enum NewsActionTypes {
    ADD_NEWS = "ADD_NEWS",
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

interface AddNewsAction {
    type: NewsActionTypes.ADD_NEWS
    news: IFullArticles
}

export type QuestionsAction = AddAnswerAction | ImportRandomQuestionsAction
export type NewsAction = AddNewsAction