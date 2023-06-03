import { ReactNode } from "react";
import styles from "../styles/Card.module.css"

type Props = {
    title: String;
    children: ReactNode;
}

export function Card({ title, children}: Props){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.content}>{children}</div> 
        </div>
    )
}