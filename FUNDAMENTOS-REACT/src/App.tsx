import { useState } from "react";
import { ConteudoPage } from "./pages/ConteudoPage";
import { ExercicioPage } from "./pages/ExercicioPage";
import styles from "./styles/App.module.css"

const paginas = {
  "conteudo": <ConteudoPage />,
  "exercicio": <ExercicioPage />
}

export function App() {
  const [paginaAtual, setPaginaAtual] = useState<keyof typeof paginas>("exercicio");

  return(
    <>
      <nav className={styles.menu}>
        <ul>
          <li onClick={()=> setPaginaAtual("conteudo")}>Conteudo</li>
          <li onClick={()=> setPaginaAtual("exercicio")}>Exercicio</li>
        </ul>
      </nav>
    <>{ paginas[paginaAtual] }</>
    </>
  );
}