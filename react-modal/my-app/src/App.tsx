import { useState } from 'react';
import { Modal } from './Modal';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    alert('Item deleted!');
    closeDialog();
  };

  return (
    <>
      <button onClick={showDialog}>Delete Me!</button>
      <Modal isOpen={isOpen} onClose={closeDialog}>
        <p>Are you sure you want delete?</p>
        <button onClick={closeDialog}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </>
  );
}

export default App;
