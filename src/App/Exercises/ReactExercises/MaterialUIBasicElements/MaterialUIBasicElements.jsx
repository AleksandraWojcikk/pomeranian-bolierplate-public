import { Button } from '@mui/material';
import './styles.css';

export const MaterialUIBasicElements = () => {
  return (
    <>
      <div className="buttony">
        <Button variant="text">Text</Button>
        <Button variant="contained">Hello world</Button>
        <Button variant="outlined">Hello world</Button>
      </div>
      <div>
        <Button disabled>Disabled</Button>
      </div>
      <div>
        <Button variant="outlined" disabled>
          Outlined and disabled button
        </Button>
      </div>

      <div>
        <Button
          onClick={() => {
            alert('clicked');
          }}
        >
          Klikanie z popupem
        </Button>
      </div>

      <Button variant="contained" color="success">
        Zielony button
      </Button>
    </>
  );
};
