import React, { useState, useEffect } from "react";
import "./Tarefas.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Função para adicionar a tarefa à lista
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  // Função para remover uma tarefa da lista
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Efeito para carregar a lista de tarefas do Local Storage na inicialização
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Efeito para atualizar o Local Storage sempre que a lista de tarefas mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="addTask">
        <div className="TaskH1">
          <h1>Todo List</h1>
        </div>

        <div className="inputTaskContainer">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Digite a tarefa"
            className="inputTask"
          />
          <button onClick={addTask} className='ButtonTask'>Adicionar</button>
        </div>
      </div>

      <div className="Tasks">
        <ul>
          {tasks.map((tarefa, index) => (
            <li key={index}>
              {tarefa}
              <button onClick={() => removeTask(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
