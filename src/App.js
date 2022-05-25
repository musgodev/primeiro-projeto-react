import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Tarefas from "./components/Lista-tarefas"
import AddTarefa from "./components/AddTarefa"

import "./App.css";
import "./mediaqueries.css";

const App = () => {
  let [tarefas, setTarefas] = useState([
    {
      id: "1",
      titulo: "Estudar React",
      completed: false,
    },

    {
      id: "2",
      titulo: "Estudar Ingles (Duolingo)",
      completed: false,
    },

    {
      id: "3",
      titulo: "Praticar Desenvolvimento Web",
      completed: false,
    },

    {
      id: "4",
      titulo: "Passear com o Jake",
      completed: false,
    },

    {
      id: "5",
      titulo: "Ligar o carro (1x por semana)",
      completed: false,
    },

    {
      id: "6",
      titulo: "Jogar Joguinhos",
      completed: false,
    },

  ]);

  const lidarComClickNaTarefa = (tarefaId) => {
    const newTask = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId) return {... tarefa, completed: !tarefa.completed}
      return tarefa;
    });
    setTarefas(newTask)
  };

  const lidarComAdicaoDeTarefas = (tituloTarefa) => {

    const novaTarefa = [... tarefas, {
      titulo: tituloTarefa,
      id: uuidv4(),
      completed: false,
    },];

    setTarefas(novaTarefa);

  };

  const lidarComExclusaoDeTarefa = (tarefaId) => {
    const newTask = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefas(newTask);
  };

  return (
    <>
      <div className="container">
        <h1 className="titulo-lista">Lista de Tarefas</h1>
        <AddTarefa lidarComAdicaoDeTarefas={lidarComAdicaoDeTarefas} />
        <Tarefas tarefas={tarefas} lidarComClickNaTarefa={lidarComClickNaTarefa} lidarComExclusaoDeTarefa={lidarComExclusaoDeTarefa}/>
      </div>
    </>
  ) // Renderização da pagina
   
}

export default App;
