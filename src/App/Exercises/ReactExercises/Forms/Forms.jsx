import React from 'react';
import './style.css';

function handleSubmit(event) {
  event.preventDefault();
  console.log('Hello form');
}

export function Forms() {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="tekstowy">Input tekstowy</label>
        <input id="tekstowy" type="text" />
      </div>

      <div>
        <label for="select">Select</label>
        <select id="select">
          <option>1</option>
          <option>1</option>
        </select>
      </div>

      <div>
        <textarea />
      </div>

      <div>
        <input type="checkbox" />
      </div>

      <div>
        <input name="test" type="radio" />
        <input name="test" type="radio" />
        <input name="test" type="radio" />
      </div>

      <div>
        <input type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
