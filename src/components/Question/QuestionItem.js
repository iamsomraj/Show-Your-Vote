import React, { useState } from "react";
import Chart from "../Chart/Chart";
import "./QuestionItem.css";

const QuestionItem = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0].id);

  const countValues = props.options.map((opt) => +opt.count);
  const totalValue = countValues.reduce((acc, cur) => acc + +cur, 0);
  const currPoll = props.options.map((opt) => {
    return {
      id: opt.id,
      label: opt.label,
      count: +opt.count,
      percentage: Math.round((+opt.count / +totalValue) * 100),
    };
  });

  return (
    <div className="question-chart">
      <div className="question">
        <label className="question__label">{props.label}</label>
        <div className="question__control">
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {props.options.map((opt, index) => (
              <option key={opt.id} value={opt.id}>
                {index + 1} : {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={() => props.onClick(props.id, selectedOption)}>
            Vote
          </button>
        </div>
      </div>
      <Chart currPoll={currPoll} />
    </div>
  );
};

export default QuestionItem;
