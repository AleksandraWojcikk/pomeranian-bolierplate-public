import './Button.css';

export const Button = ({ id, changeColor, timeButton, label }) => {
  console.log(timeButton == id ? 'red-button' : 'blue-button');

  return (
    <button
      id={id}
      onClick={changeColor}
      className={timeButton == id ? 'red-button' : 'blue-button'}
    >
      {label}
    </button>
  );
};
