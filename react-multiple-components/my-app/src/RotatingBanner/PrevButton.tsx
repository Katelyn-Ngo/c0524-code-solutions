import React from 'react';

type PrevButtonProps = {
  onClick: () => void;
};

export function PrevButton({ onClick }: PrevButtonProps) {
  return (
    <button onClick={onClick} className="Prev-button">
      Prev
    </button>
  );
}
