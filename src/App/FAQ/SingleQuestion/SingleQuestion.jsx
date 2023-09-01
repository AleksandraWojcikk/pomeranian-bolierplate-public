import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <>
      <div className="wrapper">
        <h1>
          <strong>{question}</strong>
        </h1>
        <hr />
        <p>{answer}</p>
      </div>
    </>
  );
};
