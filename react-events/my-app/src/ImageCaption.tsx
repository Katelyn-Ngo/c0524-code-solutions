type Props = {
  caption: string;
  onClick: () => void;
};

export function ImageCaption({ caption, onClick }: Props) {
  return (
    <div>
      <h3 onClick={onClick}>{caption}</h3>
    </div>
  );
}
