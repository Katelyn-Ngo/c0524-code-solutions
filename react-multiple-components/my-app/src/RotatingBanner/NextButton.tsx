import React from 'react';

type NextButtonProps = {
  onClick: () => void;
};

export function NextButton({ onClick }: NextButtonProps) {
  return (
    <button onClick={onClick} className="next-button">
      Next
    </button>
  );
}
