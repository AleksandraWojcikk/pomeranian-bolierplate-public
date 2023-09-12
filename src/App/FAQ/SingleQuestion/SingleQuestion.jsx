import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <>
      <div className="wrapperFaQ">
        <h1>
          <strong>{question}</strong>
        </h1>
        <hr></hr>
        <p>{answer}</p>
      </div>
    </>
  );
};
