import './ImageContainer.css';

type Props = {
  imageSrc: string;
  onClick: () => void;
};

export function ImageContainer({ imageSrc, onClick }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onClick}
          className="image-fill"
          src={imageSrc}
          alt="space-image"
        />
      </div>
    </div>
  );
}
