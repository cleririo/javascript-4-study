import { useEffect, useState } from "react";

export function Relogio(){
    const [text, setText] = useState("")

    //Quando definimos uma lista vazia [] para o useEffect o evento é disparado apenas
    // quando o componente é montado.
    //useEffect(() => {
    //    alert("O componente relogio foi montado na tela")

    //    return() => {
    //        alert("O componente vai ser removido")
    //    }
    //},[])

    //Quando definimos uma dependencia o useEffect so é disparado quando aquela dependencia é modificada
    //useEffect(() => { 
    //    alert("O texto foi atualizado")
    //},[text])

    const [horario, setHorario] = useState("00:00:00")
    useEffect(() => {
        const timer = setInterval(() => {
            setHorario(new Date().toLocaleTimeString());
            //console.log("O horario foi atualizado");
        },1000);

        return () => clearInterval(timer);
    });

    useEffect(() => {
        document.title = horario;
    },[horario])

    return(
        <>
            <h2>{horario}</h2>
        </>
    );
}