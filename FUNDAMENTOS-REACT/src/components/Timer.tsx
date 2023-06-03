import { useState } from "react";

export function Timer() {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);

    const handleClick = () => {

        setInterval(() => {
            setSegundos((prevSeconds) => {
                if (prevSeconds < 59) {
                  return prevSeconds + 1;
                } else {
                  return 0;
                }
              });
        }, 1000);

        setInterval(() => {
            setMinutos(prevMinutos => prevMinutos + 1);  
        }, 59000);
    };

    return (
        <>
            <h2>
            <button onClick={handleClick}><h2>Cronometrar</h2></button>
            <h2>Minutos: </h2> 
            {minutos}
            <h2>Segundos: </h2> 
            {segundos}
            </h2>
        </>
    );
}