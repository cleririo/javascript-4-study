import { Card } from "../components/Card";
import { UseContext } from "../components/UseContext";
import { UseEffect } from "../components/UseEffect/UseEffect";
import { UseReduce } from "../components/UseReduce";
import { UseRef } from "../components/UseRef";
import { ThemeContextProvider } from "../contexts/ThemeContext";

    export function HooksPage(){
        return(
            <>
                <Card title="UseEffect">
                    <UseEffect />
                </Card>
                <Card title="UseRef">
                    <UseRef />
                </Card>
                <Card title="UseReduce">
                    <UseReduce />
                </Card>
                <Card title="UseContext">
                    <ThemeContextProvider>
                    <UseContext />
                    </ThemeContextProvider>
                </Card>
            </>
        )
    }
