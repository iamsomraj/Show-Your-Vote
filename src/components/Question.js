import styles from "./Question.module.css";
import React, { useState } from "react";

const Question = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0].id);

  const countValues = props.options.map((opt) => +opt.count);
  const totalValue = countValues.reduce((acc, cur) => acc + +cur, 0);
  const currPoll = props.options.map((opt) => {
    return {
      id: opt.id,
      label: opt.label,
      count: +opt.count,
      percentage: Math.round((+opt.count / +totalValue) * 100)
    };
  });

  return (
    <div className={styles.question}>
      <div>
        <label>{props.label}</label>
        <div>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {props.options.map((opt, index) => (
              <option key={opt.id} value={opt.id}>
                {opt.label} - {opt.count} - {currPoll[index].percentage}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <button onClick={() => props.onClick(props.id, selectedOption)}>
          Vote
        </button>
      </div>
    </div>
  );
};

export default Question;
