import React from "react";

function GameOverBanner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in{" "}
          <strong>{numOfGuesses === 1 ? "1 guess" : `${numOfGuesses}`}</strong>
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>
        </p>
      </div>
    );
  }
}

export default GameOverBanner;
