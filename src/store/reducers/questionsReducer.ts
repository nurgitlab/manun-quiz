import {IAllQuestions, IArticle, IArticleSource, IFullArticles, ITypesOfQuestions} from "../../pages/types";
import {NewsActionTypes, QAction, QuestionsActionTypes} from "./todo";


interface typedInitialState {
  easyQuestions: IAllQuestions,
  counter: number,
  news: IFullArticles,
}

const initialState: typedInitialState = {
  easyQuestions: {easyQuestions: []},
  counter: 0,
  news: {
    status: "",
    totalResults: 0,
    articles: []
  },
};

export const questionsReducer = (state = initialState, action: QAction): typedInitialState => {
  switch (action.type) {

    case QuestionsActionTypes.IMPORT_RANDOM_QUESTIONS: {
      let randomQuestions = [];
      for (let i = 0; i < 5; i++) {
        let listOfQuestions: any[] = action.newQuestions.easyQuestions;
        let randomNum = Math.floor(Math.random() * (listOfQuestions.length - i)) + i;
        let mem = listOfQuestions[randomNum];
        listOfQuestions[randomNum] = listOfQuestions[i];
        listOfQuestions[i] = mem;
        for (let j = 0; j < 4; j++) {
          let randomAnswer = Math.floor(Math.random() * listOfQuestions[i].answers.length - j) + j;
          let memAnswer = listOfQuestions[i].answers[randomAnswer];
          listOfQuestions[i].answers[randomAnswer] = listOfQuestions[i].answers[j];
          listOfQuestions[i].answers[j] = memAnswer;
        }
        randomQuestions.push(mem);
      }
      return {
        ...state,
        easyQuestions: {easyQuestions: randomQuestions},
        counter: 0
      };
    }

    case QuestionsActionTypes.ADD_ANSWER: {
      action.allQuestions.easyQuestions[action.questionsId].usersAnswer = action.usersAnswer;
      let numberOfCorrectQuestions = 0;
      action.allQuestions.easyQuestions.map((question: ITypesOfQuestions) => {
        if (question.correctAnswer === question.usersAnswer) {
          numberOfCorrectQuestions++;
        }
      });
      return {
        ...state,
        easyQuestions: action.allQuestions,
        counter: numberOfCorrectQuestions
      };
    }

    case NewsActionTypes.ADD_NEWS: {
      return {
        ...state,
        news: action.news
      };
    }

    default: {
      return state
    }
  }
};