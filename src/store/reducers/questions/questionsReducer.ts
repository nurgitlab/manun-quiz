import {IAllQuestions, ITypesOfQuestions} from "../../../pages/types";
import {QuestionsAction, QuestionsActionTypes} from "./typesQuestionsReducer";
import {numberOfAnswers, numberOfQuestions} from "./consts";


interface typedInitialState {
  easyQuestions: IAllQuestions,
  counter: number,
}

const initialState: typedInitialState = {
  easyQuestions: {easyQuestions: []},
  counter: 0,
};

export const questionsReducer = (state = initialState, action: QuestionsAction): typedInitialState => {
  switch (action.type) {

    case QuestionsActionTypes.IMPORT_RANDOM_QUESTIONS: {

      let randomQuestions = [];
      for (let i = 0; i < numberOfQuestions; i++) {
        let listOfQuestions: ITypesOfQuestions[] = action.newQuestions.easyQuestions;
        let randomNum = Math.floor(Math.random() * (listOfQuestions.length - i)) + i;
        let swapQuestion = listOfQuestions[randomNum];
        listOfQuestions[randomNum] = listOfQuestions[i];
        listOfQuestions[i] = swapQuestion;

        for (let j = 0; j < numberOfAnswers; j++) {
          let randomAnswer = Math.floor(Math.random() * listOfQuestions[i].answers.length - j) + j;
          let memAnswer = listOfQuestions[i].answers[randomAnswer];
          listOfQuestions[i].answers[randomAnswer] = listOfQuestions[i].answers[j];
          listOfQuestions[i].answers[j] = memAnswer;
        }

        swapQuestion.usersAnswer = ""

        randomQuestions.push(swapQuestion);
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
      action.allQuestions.easyQuestions.map((question) => {
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

    default: {
      return state
    }
  }
};