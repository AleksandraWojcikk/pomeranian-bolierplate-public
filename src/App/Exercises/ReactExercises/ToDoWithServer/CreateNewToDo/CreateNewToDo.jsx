//makieta5A

import { useState } from 'react';
import { sendData } from '../api/todoListApi';

export const CreateNewToDo = ({ backFunction, refreshFunction }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [getError, setGetError] = useState(null);

  async function createTodo() {
    const data = {
      title: title,
      note: note,
      author: author,
    };
    await sendData(`/api/todo`, data, 'POST')
      .then((response) => {
        backFunction(false);
        refreshFunction(response);
      })
      .catch((error) => {
        setGetError(error);
      });
  }

  //form to formularz. Funkcja do niego to onSubmit
  return (
    <>
      <div className="header">
        <p className="titleOfThePage">Dodawanie zadania.</p>
      </div>
      <form onSubmit={createTodo}>
        <div className="todo-window">
          <div className="todo-small-window">
            <h4>
              <strong>Tytuł</strong>
            </h4>
            <input
              className="reminder-input"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="todo-small-window">
            <h4>
              <strong>Autor</strong>
            </h4>
            <input
              className="reminder-input"
              type="text"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          </div>
          <div className="todo-small-window">
            <h4>
              <strong>Treść</strong>
            </h4>
            <textarea
              className="reminder-input"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />
          </div>
          <div>
            {getError && (
              <p className="error-message">Wystąpił błąd, spróbuj ponownie.</p>
            )}
          </div>
          <div className="buttonsAtTheBottom">
            <button className="backButton" onClick={() => backFunction(false)}>
              Cofnij
            </button>
            <button type="submit" className="addButton">
              Dodaj
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
