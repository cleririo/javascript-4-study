import { ComponenteComProps } from "./ComponenteComProps";

export function Lista(){
    const alunos = [
        {id: 1, nome: "Clério", notas: [10, 9 , 8]},
        {id: 1, nome: "João", notas: [10, 10 , 7]},
        {id: 1, nome: "Ana", notas: [6, 6, 7]},
    ];
    return(
        <>
            <h2>Lista de Alunos</h2>
            {
                alunos.map(aluno => (
                    <ComponenteComProps 
                        key={aluno.id}
                        nome={aluno.nome}
                        notas={aluno.notas}
                        />
                ))
            }
        </>
    );
}