import { ReactNode, createContext, useContext, useState } from "react";

type ThemeContextType = {
    backgroundColor: string;
    toggleTheme : VoidFunction;
}

const ThemeContext = createContext<ThemeContextType>(null!);

export function ThemeContextProvider({ children }: {children: ReactNode}){
    const [backgroundColor, setBackgroundColor] = useState("#000")

    function toggleTheme() {
        setBackgroundColor(prevColor => prevColor === "#000" ? "#ccc" :"#000");
    }

    return(
        <ThemeContext.Provider value={{ backgroundColor, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
