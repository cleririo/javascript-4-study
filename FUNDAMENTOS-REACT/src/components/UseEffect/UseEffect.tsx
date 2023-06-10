import { useState } from "react";
import { Relogio } from "./Relogio";

export function UseEffect() {
    const [mostrarRelogio, setMostrarRelogio] = useState(true);

    return(
        <>
            { mostrarRelogio && <Relogio/> }
            <button onClick={() => setMostrarRelogio(!mostrarRelogio)}> Mostrar / Esconder Relógio</button>
        </>
    );
}