import { useTodoContext } from "../../contexts/TodoContext";
import styles from "../../styles/TodoHeader.module.css"

export function TodoHeader() {
    const { todos } = useTodoContext();

    return(
        <h2 className={styles.title}>Tarefas: {todos.length}</h2>
    );
}