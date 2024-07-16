import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return (
    <button className="previous-image" onClick={onClick}>
      <FaAngleLeft />
    </button>
  );
}
