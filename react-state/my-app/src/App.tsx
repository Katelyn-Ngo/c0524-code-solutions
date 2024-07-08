import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/car.jpg', '/doggo.jpg'];
const imageCap = [
  'A Beautiful Image of Space',
  'A Cool Car Vroomvroom',
  'A Cute Doggie',
];
const imageDescrip = [
  'Space is so cool and mysterious',
  'Cars are the kinda of the coolest invention in history',
  'This doggie is a fluffly doggie!',
];
const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
