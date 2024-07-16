import { FaAngleRight } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return (
    <button className="next-image" onClick={onClick}>
      <FaAngleRight />
    </button>
  );
}
