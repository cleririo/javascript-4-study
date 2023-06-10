import { useState } from "react";
import { FundamentosPage } from "./pages/FundamentosPage";
import { ExercicioPage } from "./pages/ExercicioPage";
import styles from "./styles/App.module.css"
import { HooksPage } from "./pages/HooksPage";
import { ExerciciosHookPage } from "./pages/ExerciciosHookPage";

const paginas = {
  "fundamentos": <FundamentosPage/>,
  "exercicio": <ExercicioPage />,
  "hooks": <HooksPage />,
  "exerciciosHooks": <ExerciciosHookPage />
}

export function App() {
  const [paginaAtual, setPaginaAtual] = useState<keyof typeof paginas>("hooks");

  return(
    <>
      <nav className={styles.menu}>
        <ul>
          <li onClick={()=> setPaginaAtual("fundamentos")}>Conteudo</li>
          <li onClick={()=> setPaginaAtual("exercicio")}>Exercicio</li>
          <li onClick={()=> setPaginaAtual("hooks")}>Hooks</li>
          <li onClick={()=> setPaginaAtual("exerciciosHooks")}>Exercicios Hooks</li>
        </ul>
      </nav>
    <>{ paginas[paginaAtual] }</>
    </>
  );
}