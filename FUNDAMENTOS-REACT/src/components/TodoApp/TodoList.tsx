import { TodoItem } from "./TodoItem";
import styles from "../../styles/Todolist.module.css"
import { useTodoContext } from "../../contexts/TodoContext";

export function TodoList(){
    const { todos }= useTodoContext();
    
    return(
        <ul className={styles.list}>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} {...todo}/>
                ))
            }
        </ul>
    );
}