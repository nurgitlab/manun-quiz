import {
  ADD_ANSWER,
  ADD_NEWS,
  IMPORT_ALL_QUESTIONS,
  IMPORT_RANDOM_QUESTIONS,
} from "./actions";
import {ITypesOfQuestions} from "../pages/types";


const defaultState = {
  easyQuestions: [],
  counter: 0,
  news: [],
};

export const reducer = (state = defaultState, action: any) => {
  if (action.type === IMPORT_ALL_QUESTIONS) {
    return {...state, easyQuestions: action.newQuestions};
  } else if (action.type === IMPORT_RANDOM_QUESTIONS) {
    let randomQuestions = [];
    for (let i = 0; i < 5; i++) {
      let listOfQuestions = action.newQuestions.easyQuestions;
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
  } else if (action.type === ADD_ANSWER) {
    action.allQuestions.easyQuestions[action.questionsId].usersAnswer = action.usersAnswer;
    let numberOfCorrectQuestions = 0;
    action.allQuestions.easyQuestions.map((question: ITypesOfQuestions) => {
      if (question.correctAnswer == question.usersAnswer) {
        numberOfCorrectQuestions++;
      }
    });
    return {
      ...state,
      easyQuestions: action.allQuestions,
      counter: numberOfCorrectQuestions
    };
  } else if (action.type === ADD_NEWS) {
    return {
      ...state,
      news: action.news
    };
  } else {
    return state;
  }
};

export type ReducerTypes = ReturnType<typeof reducer>