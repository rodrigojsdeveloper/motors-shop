import { useState, useEffect } from "react";

const countDown = (time: string) => {
  const [countdownResult, setCountdownResult] = useState(time);

  useEffect(() => {
    let intervalId = setInterval(() => {
      let timeArr = countdownResult.split(":");
      let seconds =
        parseInt(timeArr[0]) * 3600 +
        parseInt(timeArr[1]) * 60 +
        parseInt(timeArr[2]);
      seconds--;

      if (seconds < 0) {
        clearInterval(intervalId);
        setCountdownResult("Tempo esgotado!");
      } else {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        let displayHours = hours < 10 ? "0" + hours : hours;
        let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
        let displaySeconds =
          remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

        setCountdownResult(
          `${displayHours}:${displayMinutes}:${displaySeconds}`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownResult]);

  return countdownResult;
};

export { countDown };
