import React from "react";
import "../styles/Votes.css";

const Votes = ({ questionsWithScore }) => {
  console.log("questionsWithScore Votes:", questionsWithScore);

  return (
    <div>
      <h2>Your Votes</h2>
      <div
        className="votes"
        style={{ display: "block", margin: "auto", textAlign: "center" }}
      >
        <ul>
          {questionsWithScore?.map((item, index) => (
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
