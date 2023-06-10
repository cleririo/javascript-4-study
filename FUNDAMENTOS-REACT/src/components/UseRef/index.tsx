import { useEffect, useRef, useState } from "react";

export function UseRef(){
    const [horario, setHorario] = useState("00:00:00");

    const timer = useRef<NodeJS.Timer>();
    const inputRef = useRef<HTMLInputElement>(null!);

    function handleStopTimer(){
        clearInterval(timer.current);
    }

    useEffect(() => {
        timer.current = setInterval(() => {
            setHorario(new Date().toLocaleTimeString());
        },1000);

        inputRef.current.focus();

        return () => clearInterval(timer.current);
    }, []);

    return(
        <>
            <h2>Exemplo 1</h2>
            <h3>{horario}</h3>
            <button onClick={handleStopTimer}>Parar</button>
            <h2>Exemplo 2</h2>
            <input ref={inputRef} type="text"/>
        </>
    )
}