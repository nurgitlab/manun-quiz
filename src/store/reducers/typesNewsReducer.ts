import {IAllQuestions, IFullArticles} from "../../pages/types";


export enum QuestionsActionTypes {
    IMPORT_RANDOM_QUESTIONS = "IMPORT_RANDOM_QUESTIONS",
    ADD_ANSWER = "ADD_ANSWER",
}

export enum NewsActionTypes {
    FETCH_NEWS = "FETCH_NEWS",
    FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
    FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR"
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

interface FetchNewsAction {
    type:NewsActionTypes.FETCH_NEWS
}

interface FetchNewsSuccessAction {
    type:NewsActionTypes.FETCH_NEWS_SUCCESS
    payload: IFullArticles
}

interface FetchNewsSuccessError {
    type:NewsActionTypes.FETCH_NEWS_ERROR
    payload: string | null
}

export type QuestionsAction = AddAnswerAction | ImportRandomQuestionsAction
export type NewsAction = FetchNewsAction | FetchNewsSuccessAction | FetchNewsSuccessError