import { GoDot, GoDotFill } from 'react-icons/go';

type Props = {
  images: { src: string; alt: string }[];
  activePicture: number;
  onClick: (index: number) => void;
};

export function Dots({ images, activePicture, onClick }: Props) {
  return (
    <div className="progress-dots">
      {images.map((_, index) => (
        <button
          key={index}
          className={`progress-dot ${index === activePicture ? 'active' : ''}`}
          onClick={() => onClick(index)}>
          {index === activePicture ? <GoDotFill /> : <GoDot />}
        </button>
      ))}
    </div>
  );
}
