import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setisOn] = useState(false);
  function handleClick() {
    if (isOn) {
      setisOn(false);
    } else {
      setisOn(true);
    }
  }
  const toggleClassName = isOn ? 'toggle-switch is-on' : 'toggle-switch';
  const label = isOn ? 'On' : 'Off';

  return (
    <div className={toggleClassName} onClick={handleClick}>
      <div className="slider">
        <div className="switch"></div>
        <span className="state-label"> {label} </span>
      </div>
    </div>
  );
}
