import React from 'react';
import styles from './todos.module.css';
import {v4 as uuid} from 'uuid';

export const Todos = ({todos}) => {

    console.log('todos = ', todos );
  return (
  <div>
      {
          todos.map(({input, completed}) => 
            <div key={uuid()} className={styles.divInput}>
            <input type="checkbox" />
            <label>{input}</label>
            </div>
          )
      }
      
  </div>
  );
};
