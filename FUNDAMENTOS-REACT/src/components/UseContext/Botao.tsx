import { useTheme } from "../../contexts/ThemeContext";

export function Botao(){
    const { backgroundColor } = useTheme();

    return(
        <button style= {{ backgroundColor }}> Botão de teste</button>
    );
}