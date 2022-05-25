import React from "react"

import { CgClose } from "react-icons/cg"

import "./Tarefa.css"

const Tarefa = ({tarefa, lidarComClickNaTarefa, lidarComExclusaoDeTarefa}) => {
    return (
        <>
            <div 
            className="tarefa-container"
            style={tarefa.completed ? { borderLeft: "6px solid rgb(209, 209, 0)" } : {}}>

                <div 
                className="tarefa-titulo" 
                onClick={() => lidarComClickNaTarefa(tarefa.id)}>
                    {tarefa.titulo}
                </div>

                <div className="buttons-container">
                    <button className="close-task-button" onClick={() => lidarComExclusaoDeTarefa(tarefa.id)}><CgClose /></button>

                </div>

            </div>
        </>
    )
}

export default Tarefa;