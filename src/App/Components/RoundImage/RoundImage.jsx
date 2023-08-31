import './styles.css';

export const RoundImage = (props, size) => {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${props.src})`,
        width: `${size}`,
        height: `${size}`,
      }}
    ></div>
  );
};
