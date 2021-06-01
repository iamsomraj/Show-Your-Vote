import styles from "./Question.module.css";
import React, { useState } from "react";

const Question = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.options[0].id);

  return (
    <div className={styles.question}>
      <div>
        <label>{props.label}</label>
        <div>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {props.options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label} - {opt.count}
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
