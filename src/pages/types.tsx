export interface IBlockQuestions {
    easyQuestions: ITypesOfQuestions[]
    counter: number
    news: any[]
}

export interface ITypesOfQuestions {
    id?: number
    question?: string
    answers?: ITypesOfAnswers[]
    correctAnswer?: string
    usersAnswer?: string
    imageUrl?: string
}

export interface ITypesOfAnswers {
    answer: string
}