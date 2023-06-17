import { LoginOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styles from "../styles/LoginPage.module.css";

export function LoginPage(){
    return(
        <div className={styles.container}>
            <Form
                layout="vertical"
                className={styles.form}
            >
                <Form.Item>
                    <Input type="email" />
                </Form.Item>
                <Form.Item>
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button block icon={<LoginOutlined/>} type="primary">Entrar</Button>
                </Form.Item>
            </Form>
        </div>
    )
}