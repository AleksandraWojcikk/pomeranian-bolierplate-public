import './styles.css';
import { StarIcon } from '../../../Components/Icons/StarIcon';

export const TablesTennis = () => {
  return (
    <>
      <p>Ćwiczenie z tworzenia tabel</p>
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>

        <tr className="zebra">
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td>
            <StarIcon />
            <StarIcon />
          </td>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td>
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>

        <tr>
          <td>United States of America</td>
          <td>#100126</td>
          <td>
            <StarIcon />
          </td>
        </tr>

        <tr>
          <td>Cape Verde Islands</td>
          <td>#100128</td>
          <td>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </td>
        </tr>
      </table>
    </>
  );
};
