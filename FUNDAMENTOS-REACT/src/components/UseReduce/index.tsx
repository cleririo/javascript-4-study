import { useReducer } from "react";

type ACTIONTYPE =
    | { type: "incrementar" }
    | { type: "decrementar" };

function reducer(prevState: { contador: number }, action: ACTIONTYPE){
    switch (action.type){
        case "incrementar": 
            return { contador: prevState.contador + 1 };
        case"decrementar":
            return { contador: prevState.contador - 1};
        default:
            throw new Error();
    }
}

const initialState = { contador: 0};

export function UseReduce(){
    const [state, dispach] = useReducer(reducer, initialState);

    return(
        <>
        <h2>Contador: { state.contador } {}</h2>
        <button onClick={() => dispach({ type: "decrementar"})}>-</button>
        <button onClick={() => dispach({ type: "incrementar"})}>+</button>
        </>
    );
}