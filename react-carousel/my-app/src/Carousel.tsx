import { useEffect, useState } from 'react';
import { ImageCard } from './ImageCard';
import { NextButton } from './NextButton';
import { Dots } from './Dots';
import { PrevButton } from './PrevButton';

type Props = {
  images: { src: string; alt: string }[];
};

export function Carousel({ images }: Props) {
  const [activePicture, setActivePicture] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePicture((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setActivePicture((nextPic) => (nextPic + 1) % images.length);
  };
  const goToPrev = () => {
    setActivePicture(
      (prevPic) => (prevPic - 1 + images.length) % images.length
    );
  };
  const goToImage = (index: number) => {
    setActivePicture(index);
  };
  return (
    <div className="carousel">
      <PrevButton onClick={goToPrev} />
      <ImageCard image={images[activePicture]} />
      <NextButton onClick={goToNext} />
      <Dots images={images} activePicture={activePicture} onClick={goToImage} />
    </div>
  );
}
