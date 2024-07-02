import './ImageContainer.css';

type Props = {
  url: string;
};
export function ImageContainer(props: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={props.url} alt="hedy" />
      </div>
    </div>
  );
}
