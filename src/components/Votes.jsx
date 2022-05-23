import React from "react";
import "../styles/Votes.css"

const Votes = ({ score, questions }) => {
  const finalVotes = [];
  for (let i = 0; i < questions.length; i++) {
    finalVotes.push({ q: questions[i], score: score[i].score });
  }

  return (
    <div>
      <h2>Your Votes...</h2>
      <div className="votes">
        <ul>
          {finalVotes.map((item, index) => (
            <li key={index}>
              {item.q}: {item.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Votes;
