import { useState, useEffect } from "react";

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
      if (storedResults !== null && storedResults.length > 0) {
        setResults(storedResults);
      } else {
        const initialResults = data.map((question) => {
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
        setResults(initialResults);
      }
    };
    getResultsFromStorage();
  }, []);

  const btnClickHandler = (questionId, optionId) => {
    storeResultsIntoStorage(questionId, optionId);
  };

  return (
    <div>
      {results.map((result) => {
        return (
          <Question key={result.id} {...result} onClick={btnClickHandler} />
        );
      })}
    </div>
  );
};

export default QuestionList;
