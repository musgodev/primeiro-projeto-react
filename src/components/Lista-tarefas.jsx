import React from 'react';
import Tarefa from "./Tarefa";

const Tarefas = ({ tarefas, lidarComClickNaTarefa, lidarComExclusaoDeTarefa }) => {
    return(
        <>
            {tarefas.map((tarefa) => (
                <Tarefa tarefa={tarefa} lidarComClickNaTarefa={lidarComClickNaTarefa} lidarComExclusaoDeTarefa={lidarComExclusaoDeTarefa}/>
            ))}
        </>
    )
}

export default Tarefas;