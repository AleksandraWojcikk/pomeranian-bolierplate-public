import './styles.css';
import html from './html.svg';
import ts from './ts.svg';
import js from './js.svg';

export const TechStack = () => {
  return (
    <>
      <div className="grid">
        <div className="html">
          <img src={html} />
          <p>html</p>
        </div>

        <div className="ts">
          <img src={ts} />
          <p>typescript</p>
        </div>

        <div className="javascript">
          <img src={js} />
          <p>javascript</p>
        </div>
      </div>
    </>
  );
};
