import { useState } from "react";
import Confetti from "react-confetti";

import { randomNumberGenerator } from "./utilities/randomNumberGenerator";

function App() {
  const [number, setNumber] = useState(randomNumberGenerator(1, 20));

  const [guessNumber, setGuessNumber] = useState(0);
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState("Start guessing...");
  const [isGameStart, setIsGameStart] = useState(true);

  const isCorrect = message === "Correct!";
  const bgMainColor = !isCorrect ? "bg-primary-500" : "bg-teal-500";

  const handleClickAgain = () => {
    setMessage("Start guessing...");
    setGuessNumber(0);
    setNumber(randomNumberGenerator(1, 20));
    setIsGameStart(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isGameStart) {
      if (guessNumber > 20 || guessNumber < 1) {
        setMessage("Please enter the number between 1 and 20");
      } else if (guessNumber <= 0) {
        setMessage("You lose...");
        setIsGameStart(false);
      } else if (guessNumber > number) {
        setMessage("Too high!");
        setScore((prevScore) => --prevScore);
      } else if (guessNumber < number) {
        setMessage("Too low!");
        setScore((prevScore) => --prevScore);
      } else {
        // Correct
        setMessage("Correct!");
        // update the score
        if (score > highScore) setHighScore(score);
        setScore(20); // reset the score
        setIsGameStart(false);
      }
    }
  };

  return (
    <main
      className={`h-screen w-full ${bgMainColor} overflow-hidden font-pixel text-slate-200`}>
      {isCorrect && <Confetti />}
      {/* Upper section */}
      <div className="flex flex-wrap-reverse items-center justify-between gap-3 p-2 text-sm sm:py-4 sm:px-8 md:px-14 lg:px-20">
        <button
          onClick={handleClickAgain}
          className="bg-slate-200 p-2 text-primary-500">
          Again!
        </button>
        <p>(Between 1 - 20)</p>
      </div>

      {/* Title section */}
      <section className="my-14 flex justify-center text-center text-xl sm:text-3xl">
        <h1>Guess The Number</h1>
      </section>

      <div className="my-11 flex flex-wrap justify-center gap-5">
        {/* Score section */}
        <section className="flex flex-col items-center justify-center text-sm">
          <div className="flex flex-col gap-2">
            <div>&#x1f4af; High Score: {highScore}</div>
            <div>🚀 Current Score: {score}</div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center gap-4">
          <section className="my-5 flex justify-center text-center">
            <div>{message}</div>
          </section>

          <form action="" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-7">
              <input
                type="number"
                placeholder="1"
                value={guessNumber}
                onChange={(e) => setGuessNumber(e.target.value)}
                className="h-32 w-1/2 max-w-sm border-8 bg-transparent text-center text-2xl"
              />
              <button
                type="submit"
                className="bg-slate-200 p-4 text-primary-500">
                Check
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
