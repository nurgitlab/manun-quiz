const defaultState = {
  easyQuestions: [],
  counter: 0,
  news: [],
};

export const reducer = (state = defaultState, action) => {
  if (action.type === "IMPORT_ALL_QUESTIONS") {
    return {...state, easyQuestions: action.newQuestions};
  } else if (action.type === "IMPORT_RANDOM_QUESTIONS") {
    let randomQuestions = [];
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random() * (action.newQuestions.easyQuestions.length - i)) + i;
      let mem = action.newQuestions.easyQuestions[randomNum];
      action.newQuestions.easyQuestions[randomNum] = action.newQuestions.easyQuestions[i];
      action.newQuestions.easyQuestions[i] = mem;
      for (let j = 0; j < 4; j++) {
        let randomAnswer = Math.floor(Math.random() * action.newQuestions.easyQuestions[i].answers.length - j) + j;
        let memAnswer = action.newQuestions.easyQuestions[i].answers[randomAnswer];
        action.newQuestions.easyQuestions[i].answers[randomAnswer] = action.newQuestions.easyQuestions[i].answers[j];
        action.newQuestions.easyQuestions[i].answers[j] = memAnswer;
      }
      randomQuestions.push(mem);
    }
    return {...state, easyQuestions: {easyQuestions: randomQuestions}, counter: 0};
  } else if (action.type === "ADD_ANSWER") {
    action.allQuestions.easyQuestions[action.questionsId].usersAnswer = action.usersAnswer;
    let numberOfCorrectQuestions = 0;
    action.allQuestions.easyQuestions.map((question) => {
      if (question.correctAnswer == question.usersAnswer) {
        numberOfCorrectQuestions++;
      }
    });
    return {...state, easyQuestions: action.allQuestions, counter: numberOfCorrectQuestions};
  } else if (action.type == "ADD_NEWS") {
    return {...state, news: action.news}
  } else {
    return state;
  }
};