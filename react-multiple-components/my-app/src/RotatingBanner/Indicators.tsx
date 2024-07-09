import React from 'react';

type IndicatorProps = {
  count: number;
  currentIndex: number;
  handleClick: (index: number) => void;
};

export function Indicators({
  count,
  currentIndex,
  handleClick,
}: IndicatorProps) {
  const buttons = [] as React.JSX.Element[];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => handleClick(i)}
        style={{ backgroundColor: i === currentIndex ? '#9ED6EF' : '#FCFCFF' }}>
        {i}
      </button>
    );
  }

  return <div className="indicators">{buttons}</div>;
}
