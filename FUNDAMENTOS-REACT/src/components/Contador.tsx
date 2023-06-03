import { useState } from "react";

export function Contador() {
    const [contador, setContador] = useState(0);

    function decrementarContador() {
        setContador(contador - 1);
    }

    function incrementarContador() {
        setContador(contador + 1);
    }

    return(
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={decrementarContador}>-</button>
            <button onClick={incrementarContador}>+</button>
        </>
    )
}