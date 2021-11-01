export interface IBlockQuestions {
    easyQuestions: ITypesOfQuestions[]
    counter: number
    news: IArticle[]
}

export interface ITypesOfQuestions {
    id?: number
    question?: string
    answers?: string[]
    correctAnswer?: string
    usersAnswer?: string
    imageUrl?: string
}

export interface IArticle {
    author: string
    content: string
    description: string
    publishedAt: string
    source: IArticleSource
    title: string
    url: string
    urlToImage: string
}

export interface IArticleSource {
    id: string
    name: string
}