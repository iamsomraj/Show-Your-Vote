import { useState, useEffect } from "react";

import "./QuestionList.css";
import data from "../data";
import Question from "./Question";

const QuestionList = () => {
  const [results, setResults] = useState([]);

  const storeResultsIntoStorage = (questionId, optionId) => {
    const curResults = results.map((result) => {
      if (result.id !== questionId) return result;

      const options = result.options.map((opt) => {
        if (opt.id !== optionId) return opt;
        return {
          ...opt,
          count: opt.count + 1
        };
      });

      return {
        ...result,
        options: options
      };
    });
    localStorage.setItem("results", JSON.stringify(curResults));
    setResults(curResults);
  };

  useEffect(() => {
    const getResultsFromStorage = () => {
      const storedResults = JSON.parse(localStorage.getItem("results"));
      const localResults = data.map((question) => {
        return {
          id: question.id,
          label: question.label,
          options: question.options.map((opt) => ({
            id: opt.id,
            label: opt.label,
            count: 0
          }))
        };
      });

      let storedResultsQuestions = null;
      if (storedResults) {
        storedResultsQuestions = storedResults.map((rs) => rs.label);
      }

      const localResultsQuestions = localResults.map((rs) => rs.label);

      const is_same =
        storedResultsQuestions &&
        storedResultsQuestions.length === localResultsQuestions.length &&
        storedResultsQuestions.every(function (element, index) {
          return element === localResultsQuestions[index];
        }) &&
        storedResults &&
        storedResults.every((ele, ind) => ele.id === data[ind].id);

      if (storedResults !== null && storedResults.length > 0 && is_same) {
        setResults(storedResults);
      } else {
        setResults(localResults);
        localStorage.setItem("results", JSON.stringify(localResults));
      }
    };
    getResultsFromStorage();
  }, []);

  const btnClickHandler = (questionId, optionId) => {
    storeResultsIntoStorage(questionId, optionId);
  };

  return (
    <div className="question-list">
      {results.map((result) => {
        return (
          <Question key={result.id} {...result} onClick={btnClickHandler} />
        );
      })}
    </div>
  );
};

export default QuestionList;
