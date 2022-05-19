import React from "react";
import { TodoProvider } from "../TodoContext/index.js";
import { AppUI } from "./AppUI";
import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con La Llorona', completed: false }
// ]



function App() {


  return (
    <TodoProvider>
      < AppUI />
    </TodoProvider>
  );
}

export default App;
