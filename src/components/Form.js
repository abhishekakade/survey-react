import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import { ArrowBack, ArrowForward } from "@styled-icons/ionicons-solid";
import Votes from "./Votes";
import "../styles/Form.css";

const Form = () => {
  // maximum steps = 3 and minimum steps = 0
  const MIN = 0;
  const MAX = 2;
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState(false);
  const [wait, setWait] = useState(false);

  //   slider value
  const [sliderVal, setSliderVal] = useState(null);

  useEffect(() => {
    const loader = () => {
      //   console.log("reset slider");
      setWait(true);
      setSliderVal(null);
    };
    const timer = setTimeout(() => loader(), 500);
    return () => clearTimeout(timer);
  }, [wait]);

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
      wait && setCurrentStep((prevStep) => prevStep + 1);
      //   console.log("currentStep", currentStep);
    }
  };

  const goToPrevious = () => {
    if (currentStep > MIN) {
      setCurrentStep((prevStep) => prevStep - 1);
      console.log("currentStep", currentStep);
    }
  };

  const checkAndSetResults = () => {
    // check if any questions are unsolved
    const nullAnswers = Object.values(score).every((score) => {
      if (score === null) {
        return true;
      } else return false;
    });
    // console.log("nullAnswers", nullAnswers);
    if (!nullAnswers) {
      setResults(score);
    }
  };

  const handleSlider = (e) => {
    setWait(true);
    // console.log("currentstep:", currentStep);

    // console.log("wait status", wait);
    if (wait) {
      setScore((prevScore) => {
        prevScore[currentStep]["score"] = e.target.value;
        return { ...prevScore };
      });

      goToNext();
      if (currentStep === MAX) {
        console.log("reached end...");
        checkAndSetResults();
      }

      //   reset slider value
      setSliderVal(e.target.value);
    } else return null;
    setWait(false);
  };

  //   console.log(score);
  //   console.log(score[currentStep].score);

  return (
    <div className="form">
      <h1>Form</h1>
      <div className="form-or-results">
        {!results ? (
          <div className="progress-bar">
            <div className="form-container">
              <h3>Idealistic</h3>
              <Box
                className="progressbar-mui"
                sx={{ width: "200px", margin: "auto" }}
              >
                <LinearProgress
                  variant="determinate"
                  value={(currentStep + 1) * 33.33}
                />
              </Box>
              <h4>
                {currentStep + 1}/{questionsArr.length}
              </h4>
              <p className="question">
                {wait ? (
                  questionsArr[currentStep]
                ) : (
                  <span>loading next question...</span>
                )}
              </p>
              <Box sx={{ width: "80vw", margin: "auto" }}>
                <Slider
                  className="slider"
                  aria-label="Vote how much you agree or disagree."
                  defaultValue={null}
                  getAriaValueText={valuetext}
                  //   valueLabelDisplay="auto"
                  step={1}
                  marks={marks}
                  min={0}
                  max={4}
                  value={sliderVal}
                  onChange={(e) => handleSlider(e)}
                />
              </Box>
              <div className="buttons">
                <Button variant="text" onClick={() => goToPrevious()}>
                  <ArrowBack className="left-arrow" /> Prev
                </Button>
                <Button variant="text" onClick={() => goToNext()}>
                  Next <ArrowForward className="right-arrow" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Votes score={score} questions={questionsArr} />
        )}
      </div>
    </div>
  );
};

export default Form;
