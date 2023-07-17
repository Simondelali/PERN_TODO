import React, { fragment } from "react";
import './App.css';

//components
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <fragment><div className="container">
      <InputTodo />
      <ListTodo />
    </div></fragment>
  );
}

export default App;