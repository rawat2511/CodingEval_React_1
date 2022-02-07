import React, { useState }  from "react";

export const Input = ({addTodo}) => {

  const [input, setInput] = useState("");

  return (
      <div>
          <input value={input} type="text" placeholder="Add a TODO..." onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => {
              addTodo({ input, completed : false });
              setInput("");
            }
        }>+</button>
      </div>
  );
};
