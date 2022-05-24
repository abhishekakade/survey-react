export const marks = [
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

const questionsArr = [
  "I have ambitious aims of making a difference.",
  "My leadership journey has progressed as I anticipated.",
  "I have spent fewer than 4 years in full time service or ministry.",
  "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way.",
  "My plans are likely to succeed.",
  "I'm beginning to believe the journey of service will be much harder than I anticipated.",
];

const addScoreToQuestions = (arr) => {
  return arr.map((item) => {
    return { q: item, score: null };
  });
};

export const questionsWithScore = addScoreToQuestions(questionsArr);
// console.log(addScoreToQuestions(questionsArr));
