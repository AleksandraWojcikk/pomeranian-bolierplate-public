import './styles.css';
import notification from './notification.svg';
import hand from './Vector.svg';

export const Blog = () => {
  return (
    <>
      <div className="blog">BLOG</div>
      {/* Pierwszy post */}
      <div className="wrapper1">
        <div className="date">30-11-2022</div>
        <div className="notification">
          <img src={notification} alt="notification"></img>
        </div>
        <h1>
          <strong>Why are we so nostalgic for the 1990s?</strong>
        </h1>
        <div className="tekst">
          <p>
            Pop culture used to define a generation, but it seems the cultural,
            music and fashion trends of the 1990s have been recycled, and what
            Generation X considered its rite of passage into adulthood, is being
            discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p>
            There's been the resurgence of vinyl as the trend-setters' choice of
            music consumption rather than the ease of a digital download, and
            now the hipsters have discovered the nostalgic sound of a whirring
            cassette from which to enjoy the dulcet tones of everyone from
            Salt-N-Pepa to Rick Astley.
          </p>
        </div>
        <p className="name">
          <strong>Radosława Majdan</strong>
        </p>

        <p className="specialist">Senior Marketing Specialist</p>
      </div>

      {/* Drugi post */}
      <div className="wrapper">
        <div className="date">30-11-2022</div>
        <h1>
          <strong>I make mistakes!</strong>
        </h1>
        <div className="tekst2">
          <p>
            {' '}
            <i>
              “I’m selfish, impatient and a little insecure. I make mistakes, I
              am out of control and at times hard to handle. But if you can’t
              handle me at my worst, then you sure as hell don’t deserve me at
              my best.”
            </i>
          </p>
          <p className="marylin">Marilyn Monroe</p>
        </div>

        <p className="name">
          <strong>Radosława Majdan</strong>
        </p>

        <p className="specialist">Senior Marketing Specialist</p>
      </div>

      {/* Trzeci post */}
      <div className="wrapper">
        <div className="date">30-11-2022</div>
        <h1>
          <strong>18 Record-Breaking, Controversial, and Weird Facts</strong>
        </h1>
        <div className="tekst">
          <p>
            The death of Queen Elizabeth II on September 8 at the age of 96
            represents a monumental shift for the British monarchy and the
            people of England. Royals have died before, of course, but the Queen
            ruled for more than 70 years, and represented a certain stability
            and decorum that held the institution of the Royal Family together
            as it slowly grew more visibly anachronistic and battered by endless
            scandals.
          </p>
          <ul>
            <li>
              <a
                href="https://wiadomosci.wp.pl/to-zacieranie-sladow-chodzi-o-pakiety-wyborcze-sasina-6879848507329312a"
                target="blank"
              >
                <strong>WP.PL</strong>
              </a>
            </li>
            <li>
              <a href="https://www.wp.pl/" target="blank">
                <strong>WP.PL 2</strong>
              </a>
            </li>
            <li>
              <a
                href="https://www.onet.pl/film/onetfilm/tvn-wbil-szpile-tvp-pokazano-alternatywna-rzeczywistosc-telewizji-rzadowej/2ksezfp,681c1dfa"
                target="blank"
              >
                ONET.PL
              </a>
            </li>
          </ul>
        </div>

        <p className="name">
          <strong>Radosława Majdan</strong>
        </p>

        <p className="specialist">Senior Marketing Specialist</p>
        <div className="hand">
          <img src={hand} alt="Hand" />
        </div>
      </div>
    </>
  );
};
