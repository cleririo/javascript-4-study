import { useState } from "react";

export function ComponenteControlado() {
    const [nome, setNome] = useState("");

    return (
        <>
           <input value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder="Digite seu nome"/>
           <p>{nome}</p>
        </>
    );
}