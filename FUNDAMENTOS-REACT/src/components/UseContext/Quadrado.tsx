import { useTheme } from "../../contexts/ThemeContext"

export function Quadrado(){
    const { backgroundColor } = useTheme();

    return <div style ={{height: 100, width: 100, backgroundColor}} />
}