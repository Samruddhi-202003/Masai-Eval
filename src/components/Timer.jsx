import { useEffect, useState } from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isStartTimer, setIsStartTimer] = useState(false);

  useEffect(() => {
    let interval;

    if (isStartTimer) {
      interval = setInterval(() => setTimer((prevTime) => prevTime + 1), 1000);
    }

    return () => clearInterval(interval);
  }, [isStartTimer]);

  const toggleTimer = () => {
    setIsStartTimer((prevIsStartTimer) => !prevIsStartTimer);
    if (!isStartTimer)
     setTimer(0);
  };

  return (
    <div>
      <h1>Toggle Button with Timer</h1>
      <button onClick={toggleTimer}>
        {isStartTimer ? "Hide" : "Show"}
      </button>
      {isStartTimer && (
        <div>
          Timer: <span className="timerValue">{timer}</span>
        </div>
      )}
    </div>
  );
};
