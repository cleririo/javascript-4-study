import { TodoApp } from "../components/TodoApp"
import styles from "../styles/HooksDesafioPage.module.css"

export function HooksDesafioPage(){

    return(
        <div className={styles.container}>
            <TodoApp />
        </div>
    )
}