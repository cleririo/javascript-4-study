import { TodoContextProvider } from "../../contexts/TodoContext";
import { TodoForm } from "./TodoForm";
import { TodoHeader } from "./TodoHeader";  
import { TodoList } from "./TodoList";

export function TodoApp(){
    return (
        <TodoContextProvider>
            <TodoHeader />
            <TodoForm />
            <TodoList />
        </TodoContextProvider>
    );
}