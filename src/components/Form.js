import React, { useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Votes from "./Votes";

const Form = () => {
  // maximum steps = 3 and minimum steps = 0
  const MIN = 0;
  const MAX = 2;
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState(false);

  const [score, setScore] = useState([
    {
      que: 1,
      score: null,
    },

    {
      que: 2,
      score: null,
    },

    {
      que: 3,
      score: null,
    },
  ]);

  const questionsArr = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
  ];

  const marks = [
    {
      value: 0,
      label: "Strongly Disagree",
    },
    {
      value: 1,
      label: "Disagree",
    },
    {
      value: 2,
      label: "Neutral",
    },
    {
      value: 3,
      label: "Agree",
    },
    {
      value: 4,
      label: "Strongly Agree",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  const goToNext = () => {
    if (currentStep < MAX) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStep > MIN) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSlider = (e) => {
    // console.log("target", e.target.value);
    // console.log("currentstep:", currentStep);

    setScore((prevScore) => {
      prevScore[currentStep]["score"] = e.target.value;
      return { ...prevScore };
    });

    goToNext();
    if (currentStep === MAX) {
      console.log("reached end...");
      setResults(true);
    }
  };

  //   console.log(questionsArr);
  console.log(score);
  //   console.log("currentstep", currentStep, score[currentStep]);
  console.log(score[currentStep].score);

  return (
    <div className="form">
      <h1>Form</h1>
      <div className="form-or-results">
        <div className="progress-bar">
          <div className="form-container">
            <h3>Idealistic</h3>
            <h4>
              {currentStep + 1}/{questionsArr.length}
            </h4>
            <p>{questionsArr[currentStep]}</p>
            <Box sx={{ width: "80vw", margin: "auto" }}>
              <Slider
                aria-label="Temperature"
                //   defaultValue={null}
                getAriaValueText={valuetext}
                //   valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={0}
                max={4}
                onChange={(e) => handleSlider(e)}
              />
            </Box>
            <button onClick={() => goToPrevious()}>Previous</button>
            <button onClick={() => goToNext()}>Next</button>
            {results && <Votes score={score} questions={questionsArr} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
