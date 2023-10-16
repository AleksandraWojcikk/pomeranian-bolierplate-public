import './styles.css';

import { fetchData, sendData } from './api/todoListApi';
import { useState, useEffect } from 'react';
import { SorryScreen } from './SorryScreen/SorryScreen';
import { ToDoItems } from './ToDoItems';
import { CreateNewToDo } from './CreateNewToDo/CreateNewToDo';
import { EditTodoList } from './EditToDoList/EditTodoList';

//3 stany ściągania danych określamy
export const ToDoWithServer = () => {
  const [getToDoList, setToDoList] = useState([]);
  const [getIsLoadingList, setIsLoadingList] = useState(true); //bo Boolean dlatego getIs
  const [getErrorMessage, setErrorMessage] = useState(null);
  const [getKickComponent, setGetKickComponent] = useState(null); //do odsiwezenia listy; dopisuje getKick do useEffect
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  const fetchToDoData = async () => {
    setIsLoadingList(true);

    try {
      const responseData = await fetchData(`/api/todo`);
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

  const showNewToDoView = () => setIsFormVisible(true);

  // tworzymy funkcję do uzycia przy śmietniczku, wykorzystując sendData z pliku Api.js; następnie wklejamy ją w onClick; przy onClicku mapujemy id z (obj)
  //refresh: dopisujemy .then setKick... do funkcji z onClicka

  if (getErrorMessage) {
    return <SorryScreen />;
  }

  if (getIsLoadingList) {
    return (
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  if (isFormVisible) {
    return <CreateNewToDo backFunction={setIsFormVisible} />;
  }

  // const showEditToDoView = () => setIsEditFormVisible(true);

  if (isEditFormVisible) {
    return <EditTodoList backFunction={setIsEditFormVisible} />;
  }

  return (
    <>
      <div className="header">
        {getErrorMessage && getErrorMessage}
        <p className="titleOfThePage">Tutaj znajdziesz listę swoich zadań.</p>
        <button onClick={() => showNewToDoView()} className="smallAddButton">
          +
        </button>
      </div>

      <div className="allList">
        {getToDoList.map((obj) => {
          return (
            <ToDoItems
              key={obj.id}
              obj={obj}
              refreshFunction={setGetKickComponent}
            />
          );
        })}
      </div>
      <div className="footer">
        <button onClick={() => showNewToDoView()} className="addButton">
          DODAJ
        </button>
      </div>
    </>
  );
};
