import React from "react";
import "../styles/Votes.css";

const Votes = ({ score, questions }) => {
  const finalVotes = [];
  for (let i = 0; i < questions.length; i++) {
    finalVotes.push({ q: questions[i], score: score[i].score });
  }

  return (
    <div>
      <h2>Your Votes</h2>
      <div className="votes" style={{ display: "block", margin: "auto", textAlign: "center" }}>
        <ul>
          {finalVotes.map((item, index) => (
            <li key={index}>
              {index + 1}. {item.q}: {item.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Votes;
