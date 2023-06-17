import { ReactNode, createContext, useContext, useState } from "react";
import { Todo } from "../types/Todo";
import { v4 as uuid} from "uuid"

type TodoContextType = {
    todos: Todo[];
    addTodo: (name: string) => void;
    editTodo: (updatedTodo: Todo) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType>(null!);

export function TodoContextProvider({ children }: { children: ReactNode}) {
    const [todos, setTodos] = useState<Todo[]>([
        {id: "123", name: "Tarefa 01", completed: false},
        {id: "124", name: "Tarefa 02", completed: true}
    ])

    function addTodo(name: string){
        const newTodo: Todo = {
            id: uuid(),
            name,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    function editTodo(updatedTodo: Todo){
        const updatedTodos = todos.map(todo => {
            if (todo.id === updatedTodo.id){
                return{ ...updatedTodo }
            }

            return todo;
        })

        setTodos(updatedTodos);
    }

    function toggleTodo(id: string){
        const updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                return{
                    ...todo,
                    completed: !todo.completed
                }
            }

            return todo;
        });

        setTodos(updatedTodos);
    }

    function deleteTodo(id: string){
        const filteredTodos = todos.filter(todo => todo.id !== id);

        setTodos(filteredTodos);
    }
    
    return (
        <TodoContext.Provider value={{ 
            todos,
            addTodo,
            editTodo,
            toggleTodo,
            deleteTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export const useTodoContext = () => useContext(TodoContext);

