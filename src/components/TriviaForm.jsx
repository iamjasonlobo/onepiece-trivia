import React, { useState } from "react";

const TriviaForm = ({ correctAnswer, isFlipped, guess, setGuess, inputStyle, setInputStyle, onGuess}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFlipped && guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setInputStyle({ borderColor: "green", borderWidth: "5px", borderStyle: "solid" });
      onGuess(true);
    } else if (!isFlipped) {
      setInputStyle({ borderColor: "red" , borderWidth: "5px", borderStyle: "solid"});
      onGuess(false);
    } else {
      setInputStyle({});
    };
  };

  return (
    <div>
      <form className = "guess-form" onSubmit={handleSubmit}>
        <label>
          Guess the answer here  :
          <input type="text"
          placeholder="Enter your guess here"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={inputStyle}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TriviaForm;