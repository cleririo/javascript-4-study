import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return <Result
        status={"404"}
        title={"A pagina que voce tentou acessar nao existe"}
        extra={<Link to={"/"}><Button>Voltar para a pagina inicial</Button></Link>}
        />
}