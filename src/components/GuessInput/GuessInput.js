import { React, useState } from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const nextGuess = tentativeGuess;

  const handleSubmitTentativeGuess = (event) => {
    event.preventDefault();
    // do something with the guess
    console.log(tentativeGuess);
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  const handleGuessChange = (event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  };

  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmitTentativeGuess}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          disabled={gameStatus !== "running"}
          type="text"
          value={nextGuess}
          minLength={5}
          maxLength={5}
          onChange={handleGuessChange}
        />
      </form>
    </div>
  );
}

export default GuessInput;
