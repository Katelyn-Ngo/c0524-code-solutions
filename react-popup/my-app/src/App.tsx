import './App.css';
import { Popup } from './Popup';
import { useRef, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button ref={buttonRef} onClick={togglePopup}>
        Pop Up!
      </button>
      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={() => setIsOpen(false)}
        opacity={0.5}>
        <div className="menu-wrapper">
          <ul className="menu">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </div>
      </Popup>
    </div>
  );
}

export default App;
