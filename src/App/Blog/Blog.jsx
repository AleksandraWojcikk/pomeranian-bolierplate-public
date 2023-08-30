import './styles.css';

export const Blog = () => {
  return (
    <div className="wrapper">
      <div className="blog">
        <p>
          <i class="arrow left"></i>
          <nav className="blog">BACK</nav>
        </p>
      </div>
      <div className="date">30-11-2022</div>
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
          music consumption rather than the ease of a digital download, and now
          the hipsters have discovered the nostalgic sound of a whirring
          cassette from which to enjoy the dulcet tones of everyone from
          Salt-N-Pepa to Rick Astley.
        </p>
      </div>
      <p className="name">
        <strong>Radosława Majdan</strong>
      </p>
      <p className="specialist">Senior Marketing Specialist</p>
    </div>
  );
};
