import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'Hello World';
const imageUrl = 'https://i.imgur.com/yXOvdOSs.jpg';
const caption = 'this is a caption';
const description = 'this is a description';
const button = 'This is a button';
export default function App() {
  return (
    <>
      <Header textContent={headerText} />
      <ImageContainer url={imageUrl} />
      <ImageCaption caption={caption} />
      <ImageDescription description={description} />
      <ButtonContainer button={button} />
    </>
  );
}
