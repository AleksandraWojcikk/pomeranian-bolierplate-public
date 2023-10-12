import './brawoScreen.css';

export const SorryScreen = () => {
  return (
    <>
      <div>
        <h4>Tutaj znajdziesz listę swoich zadań.</h4>
      </div>

      <div className="positiveResult">
        <div className="positiveText">
          <strong>Przepraszamy. Nie udało się pobrać listy zadań.</strong>
        </div>
        <div>
          <button className="refreshButton">ODŚWIEŻ WIDOK</button>
        </div>
      </div>
    </>
  );
};
