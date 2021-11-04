export interface IAllQuestions {
    easyQuestions: ITypesOfQuestions[]
}

export interface ITypesOfQuestions {
    id: number
    question: string
    answers: string[]
    correctAnswer: string
    usersAnswer: string
    imageUrl: string
}

export interface IFullArticles {
    status: string,
    totalResults: number,
    articles: IArticle[]
}

export interface IArticle {
    source: IArticleSource
    author: string | null
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface IArticleSource {
    id: string | null | number
    name: string
}