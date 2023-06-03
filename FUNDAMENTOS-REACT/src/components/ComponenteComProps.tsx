type Props = {
    nome: string;
    notas: number[];
}

export function ComponenteComProps(props: Props) {
    /*Forma Imperativa
    let soma = 0;
    for (let nota of props.notas){
        soma += nota;
    }

    const media = soma / props.notas.length;*/

    
    const media = props.notas.reduce((prev, curr) => prev + curr, 0) / props.notas.length;

    return (
        <div>
            <h2>Aluno: {props.nome}</h2>
            <p>Média: {media.toFixed(2)}</p>
        </div>
    );
}