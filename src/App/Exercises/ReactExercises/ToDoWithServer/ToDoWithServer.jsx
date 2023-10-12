import './styles.css';
import check from './check.svg';
import checkGrey from './checkGrey.svg';
import pencil from './pencil.svg';
import trash from './trash.svg';
import { fetchData, sendData } from './api/todoListApi';
import { useState, useEffect } from 'react';

// const data = [
//   {
//     id: 1,
//     title: 'Zamówić catering',
//     createdAt: '20.04.2024, 18:03',
//     author: 'Wojtek',
//     isDone: false,
//     note: 'Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić.',
//   },
//   {
//     id: 2,
//     title: 'Szczepienie kitku',
//     createdAt: '15.04.2024, 15:30',
//     doneDate: '20.04.2024, 18:06',
//     author: 'Wojtek',
//     isDone: true,
//     note: 'Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem.',
//   },
// ];

//3 stany ściągania danych określamy
export const ToDoWithServer = () => {
  const [getToDoList, setToDoList] = useState([]);
  const [getIsLoadingList, setIsLoadingList] = useState(true); //bo Boolean dlatego getIs
  const [getErrorMessage, setErrorMessage] = useState(null);

  const [getKickComponent, setGetKickComponent] = useState(null); //do odsiwezenia listy; dopisuje getKick do useEffect

  const fetchToDoData = async () => {
    setIsLoadingList(true);

    try {
      const responseData = await fetchData('/api/todo');
      setToDoList(responseData);
      setIsLoadingList(false);
    } catch (error) {
      setErrorMessage(error);
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    fetchToDoData();
  }, [getKickComponent]);

  // tworzymy funkcję do uzycia przy śmietniczku, wykorzystując sendData z pliku Api.js; następnie wklejamy ją w onClick; przy onClicku mapujemy id z (obj)
  //refresh: dopisujemy .then setKick... do funkcji z onClicka

  function handleDelete(paramId) {
    return sendData(`/api/todo/${paramId}`, [], 'DELETE').then((response) =>
      setGetKickComponent(response)
    );
  }

  return (
    <>
      <div className="header">
        <p className="titleOfThePage">Tutaj znajdziesz listę swoich zadań.</p>
        <button className="smallAddButton">+</button>
      </div>

      <div className="allList">
        {getToDoList.map((obj) => {
          return (
            <div className={obj.isDone ? 'blockSelected' : 'block'}>
              <div className="oneLineWithTitle">
                <div className="blockTitle">
                  <strong>{obj.title}</strong>
                </div>
                <div className="icons">
                  <img className="checkGrey" src={checkGrey} alt="CheckIcon" />
                  <img className="pencil" src={pencil} alt="PencilIcon" />

                  <img
                    onClick={() => handleDelete(obj.id)}
                    className="trashGrey"
                    src={trash}
                    alt="TrashIcon"
                  />
                </div>
              </div>

              <div className="nameAndDate">
                <p>{obj.author}</p>
                <p>{obj.createdAt}</p>
              </div>
              <div className="oneLineWithIcon">
                <div className="description">{obj.note}</div>

                <div className="checkIconAndDate">
                  {obj.isDone && (
                    <div>
                      <img className="checkIcon" src={check} alt="Selected" />
                      <p className="selectedDate">{obj.doneDate}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <button className="addButton">DODAJ</button>
      </div>
    </>
  );
};
