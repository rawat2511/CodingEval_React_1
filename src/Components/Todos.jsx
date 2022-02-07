import React from 'react';
import Item from './Item';

export const Todos = ({todos, changeStatus, showCompleted}) => {

  console.log('todos = ', todos );

  return (
  <div>
      {
          todos.filter(({completed}) => completed.toString() === showCompleted).
          map(({input, completed, id}) => <Item id={id} key={id} input={input} completed={completed} changeStatus={changeStatus} />)
      }
      
  </div>
  );
};
