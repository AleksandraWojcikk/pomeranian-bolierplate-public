import './styles.css';
import logoit from './logoit.png';
import widok from './widok.png';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function ImageFiles() {
  return (
    <div>
      <img src={logoit} alt="Pomeranian logo" />
      <img src={widok} alt="Zdjęcie" />
      <RoundImage src={widok} />
      <RoundImage src={logoit} size={`300px`} />
    </div>
  );
}
