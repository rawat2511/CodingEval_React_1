import React from 'react';
import styles from './todos.module.css';

const Item = ({input, completed, id, changeStatus}) => {
    console.log("change statue = ", changeStatus);
  return (
    <div className={styles.divInput}>
        <input type="checkbox" onChange={() => changeStatus(id)}/>
        <label>{input}</label>
    </div>
  )
}

export default Item;
