import React from "react";

import "./FinalPage.css"


export const ShowMistakes = ({item}, {id}) => {
  return (
    <div
      key={id}
      className={"all-mistakes"}
    >
      <div
        className={"show-question"}
      >
        {item.question}
      </div>
      <div
        className={"show-mistake"}
      >
        {item.usersAns}
      </div>
      <div
        className={"show-answer"}
      >
        {item.correctAns}
      </div>
    </div>
  )
}