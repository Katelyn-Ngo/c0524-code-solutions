import { useState } from 'react';
import './HotButton.css';

type Props = {
  label: string;
};
export function HotButton({ label }: Props) {
  const [clickCount, setClickCount] = useState(0);
  function handleClick() {
    if (clickCount >= 18) {
      setClickCount(0);
    } else {
      setClickCount(clickCount + 1);
    }
  }

  const getButtonClass = () => {
    if (clickCount < 3) {
      return 'darkpurple';
    } else if (clickCount < 6) {
      return 'purple';
    } else if (clickCount < 9) {
      return 'red';
    } else if (clickCount < 12) {
      return 'orange';
    } else if (clickCount < 15) {
      return 'yellow';
    } else {
      return 'white';
    }
  };

  return (
    <>
      <button className={getButtonClass()} onClick={handleClick}>
        {label}
      </button>
      <p>Number of clicks: {clickCount}</p>
    </>
  );
}
