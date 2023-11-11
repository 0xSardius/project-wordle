import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../src/game-helpers.js";
import { check } from "prettier";

function Guess({ value }) {
  const className = checkGuess(value) ? "guess correct" : "guess incorrect";

  return (
    <p className="guess">
      {range(5)
        .split("")
        .map((num) => (
          <span key={num} className="cell">
            {value ? value[num] : undefined}
          </span>
        ))}
    </p>
  );
}

export default Guess;
