import { PlusOutlined } from "@ant-design/icons";
import {Row, Col, Button, Input, Form, message} from "antd";
import { useTodoContext } from "../../contexts/TodoContext";

export  function TodoForm()   {
    const { addTodo } = useTodoContext();

    const [form] = Form.useForm();

    function handleAddTodo(name: string) {
        addTodo(name);
        message.success("Tarefa adicionado com sucesso!");
        form.resetFields();
    }

    return(
        <Form
            onFinish={({ name }) => handleAddTodo(name)}
            onFinishFailed={() => message.error("Existe um erro no preenchimento do formulário")}
        >
            <Row gutter={8}>
                <Col span={22}>
                    <Form.Item
                        name="name"
                        rules={[
                            { required: true, message: "o nome da tarefa é obrigatório" },
                            { min: 4, message: "o nome da tarefa precisa ter no minimo 4 caracteres" }
                        ]}
                    >
                        <Input placeholder="digite o nome da nova tarefa" />
                    </Form.Item>
                </Col>
                <Col span={2}>
                    <Form.Item>
                        <Button htmlType="submit" block type="primary" icon={<PlusOutlined />}/>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}