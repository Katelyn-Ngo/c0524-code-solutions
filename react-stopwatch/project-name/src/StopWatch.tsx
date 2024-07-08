import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
export function StopWatch() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const startTimer = () => {
    if (intervalId === undefined) {
      const id = window.setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };
  const stopTimer = () => {
    if (intervalId !== undefined) {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  };
  const resetTimer = () => {
    if (intervalId === undefined) {
      setElapsedSeconds(0);
    }
  };
  return (
    <div className="stopwatch">
      <div className="watch-face" onClick={resetTimer}>
        <span>{elapsedSeconds}</span>
      </div>
      {intervalId === undefined ? (
        <FaPlay size="2rem" className="start-stop" onClick={startTimer} />
      ) : (
        <FaPause size="2rem" className="start-stop" onClick={stopTimer} />
      )}
    </div>
  );
}
