import './styles.css';
import jpg from './jakosc.jpg';
import png from './ball.png';
import svg from './kiwi.svg';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={jpg} alt="Quality" />
      <img src={png} alt="Ball" />
      <img src={svg} alt="Ptak Kiwi" />
    </div>
  );
};
