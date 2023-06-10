import { useTheme } from "../../contexts/ThemeContext";
import { Botao } from "./Botao";
import { Quadrado } from "./Quadrado";

export function UseContext(){
    const { toggleTheme } = useTheme();

    return(
        <>
            <Botao/>
            <Quadrado/>
            <button onClick={toggleTheme}>Trocar Tema</button>
        </>
    );
}