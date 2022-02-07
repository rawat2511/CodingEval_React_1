import React, { useState }  from "react";
import { v4 as uuid } from 'uuid';

export const Input = ({addTodo}) => {

  const [input, setInput] = useState("");

  return (
      <div>
          <input value={input} type="text" placeholder="Add a TODO..." onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => {
              addTodo({ input, completed : false, id: uuid()});
              setInput("");
            }
        }>+</button>
      </div>
  );
};
