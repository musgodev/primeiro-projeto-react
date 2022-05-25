import React, {useState} from 'react';
import Button from "./Button";

import "./AddTarefa.css";

const AddTarefa = ({ lidarComAdicaoDeTarefas }) => {
    
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        lidarComAdicaoDeTarefas(inputData);
        setInputData("")
    };
    
    
    return (
        <>
            <div className='add-tarefa-flex'>
                <input  onChange={handleInputChange}
                        value={inputData}
                        className='tarefa-input' 
                        type="text"
                />

                <div className="button-container">
                    <Button onClick={handleAddTaskClick}>Adicionar</Button>
                </div>
            </div>
        </>
    );
}

export default AddTarefa;