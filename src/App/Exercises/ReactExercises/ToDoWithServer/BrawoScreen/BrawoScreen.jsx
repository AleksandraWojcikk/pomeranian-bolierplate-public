import './brawoScreen.css';

export const BrawoScreen = () => {
  return (
    <>
      <div>
        <h4>Tutaj znajdziesz listę swoich zadań.</h4>
      </div>

      <div className="positiveResult">
        <div className="positiveText">
          <strong>
            Brawo! Nie masz aktualnie żadnych zadań do zrealizowania.
          </strong>
        </div>
        <div>
          <button className="refreshButton">ODŚWIEŻ WIDOK</button>
        </div>
      </div>
    </>
  );
};
