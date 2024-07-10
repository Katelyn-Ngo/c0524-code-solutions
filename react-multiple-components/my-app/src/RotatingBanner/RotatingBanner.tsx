import React, { useState } from 'react';
import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Indicators } from './Indicators';

type RotatingBannerProps = {
  items: string[];
};

export function RotatingBanner({ items }: RotatingBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 >= items.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 1 < 0) {
        return items.length - 1;
      }
      return prevIndex - 1;
    });
  };
  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div className="rotating-banner">
      <Banner item={items[currentIndex]} />
      <PrevButton onClick={handlePrev} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        handleClick={handleClick}
      />
      <NextButton onClick={handleNext} />
    </div>
  );
}
