import check from './check.svg';
import checkGrey from './checkGrey.svg';
import pencil from './pencil.svg';
import trash from './trash.svg';
import { sendData } from './api/todoListApi';
import { useState } from 'react';
import { EditTodoList } from './EditToDoList/EditTodoList';

export const ToDoItems = ({ obj, refreshFunction, backFunction }) => {
  const [getErrorMessage, setErrorMessage] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);

  async function handleDelete(paramId) {
    await sendData(`/api/todo/${paramId}`, [], 'DELETE')
      .then((response) => refreshFunction(response))
      .catch((error) => {
        setErrorMessage(error);
      });
  }

  function showEditToDoView() {
    setIsEditFormVisible(true);
  }

  if (isEditFormVisible) {
    return <EditTodoList backFunction={setIsEditFormVisible} />;
  }

  return (
    <div className={obj.isDone ? 'blockSelected' : 'block'}>
      <div className="oneLineWithTitle">
        <div className="blockTitle">
          <strong>{obj.title}</strong>
        </div>
        <div className="icons">
          <img className="checkGrey" src={checkGrey} alt="CheckIcon" />
          <img
            onClick={() => showEditToDoView()}
            className="pencil"
            src={pencil}
            alt="PencilIcon"
          />

          <img
            onClick={() => handleDelete(obj.id)}
            className="trashGrey"
            src={trash}
            alt="TrashIcon"
          />
        </div>

        {getErrorMessage && (
          <p className="errorMessage">nie udało się usunąć</p>
        )}
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
};
