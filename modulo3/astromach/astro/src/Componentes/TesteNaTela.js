import { useEffect } from "react";
import React, {useState} from 'react';

function TesteNaTela ()  {

    const [tarefas, setTarefas] = useState([
        "Pagar conta",
        "Estudar",
        "Mudar pra praça do carmo"
    ]);

    const [input, setInput] = useState("");

    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('tarefas');
        
        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
    })

    useEffect(()=>{
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    },[tarefas])

    function handleAdd (){
        setTarefas([...tarefas, input])
        setInput("")
    }

    const totalTarefas = useMemo (() => tarefas.length, [tarefas]);
    
    return (
        <div>
            <h1>hooks</h1>
            <ul>
                {tarefas.map(tarefa=>(
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>

            <input type="text" value={input} onChange={(e)=> setInput (e.target.value)}/>
            <button type="button" onClick={handleAdd}>Adicionar</button>

        </div>
    )
};

export default TesteNaTela;