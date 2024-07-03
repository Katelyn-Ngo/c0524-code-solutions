type Props = {
  description: string;
  onClick: () => void;
};

export function ImageDescription({ description, onClick }: Props) {
  return (
    <div>
      <p onClick={onClick}>{description}</p>
    </div>
  );
}
