import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";

export  function LessonsPage(){
    const columns = [
        {
            title: "Nome",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "Data da aula",
            key: "date",
            dataIndex: "date"
        },
        {
            render: ( _: any, record: any) => <Space style={{width: "100%"}} direction="vertical">
                <Link to={record.contentURL}><Button block type="primary">Conteudo</Button></Link>
                <Link to={record.exercisesURL}><Button block>Exercicios</Button></Link>
            </Space>,
            width: 200
            
        }
    ];

    const lessons = [
        { id: "1", name: "Aulas 01", date: "03/06/2023", contentURL: "/aulas/1/conteudo", exercisesURL: "/aulas/1/exercicio" },
        { id: "2", name: "Aulas 02", date: "10/06/2023", contentURL: "/aulas/2/conteudo", exercisesURL: "/aulas/2/exercicio" }
    ]

    return(
        <Table dataSource={lessons} columns={columns}/>
    );
}
