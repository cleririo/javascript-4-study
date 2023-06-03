import styles from "../styles/SegundoComponente.module.css"

export function SegundoComponente() {
    const idade = 28;

    let backgroundColor = "red"
    let situacao = "Menor de idade";

    if (idade >= 18){
        situacao = "Maior de idade"
        backgroundColor = "green"
    }

    return(
        <div>
            <h2>Meu nome é Clério Pottemayer Bratfisch</h2>
            <p>A minha idade é {idade}</p>
            <p className={styles.status} style={{ backgroundColor }}> {situacao}</p>
        </div>
    )
}