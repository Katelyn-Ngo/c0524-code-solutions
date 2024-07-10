type Props = {
  image: { src: string; alt: string };
};
export function ImageCard({ image }: Props) {
  return (
    <div className="current-image">
      <img src={image.src} alt={image.alt} />
    </div>
  );
}
