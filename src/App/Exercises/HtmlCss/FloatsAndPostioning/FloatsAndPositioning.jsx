import './styles.css';
import kiwi from '../ImageFiles/kiwi.svg';

export const FloatsAndPositioning = () => {
  return (
    <div className="container">
      <div className="element">
        <img src={kiwi} />
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular.
        </p>
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
    </div>
  );
};
