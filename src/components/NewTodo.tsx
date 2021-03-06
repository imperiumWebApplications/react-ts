import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

// Thew NewTodo component will received reference to a method from the parent as a prop
// THe method will accept the values from textRef as an argument and be executed when the user submits the form
const NewTodo = () => {
  const todoCtx = useContext(TodosContext);
  const textRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let enteredText = textRef.current!.value;
    if (enteredText.length === 0) {
      return;
    }
    enteredText = enteredText.trim();
    textRef.current!.value = "";
    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <input type="text" ref={textRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
