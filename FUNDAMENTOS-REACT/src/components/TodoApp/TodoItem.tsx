import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Checkbox, Row, Col, Button, Input } from "antd";
import styles from "../../styles/TodoItem.module.css";
import { useState, useEffect, useRef } from "react";
import { useTodoContext } from "../../contexts/TodoContext";

type Props = {
    id: string;
    name: string;
    completed: boolean;
}


export function TodoItem({ id, name, completed}: Props) {
    const [mode, setMode] = useState<"default" | "edit">("default");
    const [text, setText] = useState(name);
    const editInputRef = useRef<any>(null!);

    const { toggleTodo, deleteTodo, editTodo } = useTodoContext();

    function handleEditTodo() {
        editTodo({ id, name: text, completed });
        setMode("default");
    }

    useEffect(() => {
        if (editInputRef.current){
            editInputRef.current.focus();
        }
    }, [mode])

    return (
        <li className={styles.container}>
            <Row className={styles.row} align={"middle"} gutter={8}>
                <Col span={1}>
                    <Checkbox checked={completed} onChange={() => toggleTodo(id)}/>
                </Col>
                {
                    mode === "edit"
                        ? <>
                            <Col span={19}>
                                <Input ref={editInputRef} value={text} onChange={e => setText(e.target.value)} />
                            </Col>
                            <Col span={2}>
                                <Button
                                    block
                                    className={styles["button-primary"]}
                                    icon={<CheckOutlined />}
                                    onClick={() => handleEditTodo} />
                            </Col>
                            <Col span={2}>
                                <Button
                                    block
                                    danger
                                    type="primary"
                                    icon={<CloseOutlined />} />
                            </Col>
                        </>
                        : <>
                            <Col span={19}>
                                    <p>{name}</p>
                            </Col>
                            <Col span={2}>
                                <Button
                                    block
                                    className={styles["button-primary"]}
                                    icon={<EditOutlined />}
                                    onClick={() => setMode("edit")} />
                            </Col>
                            <Col span={2}>
                                <Button
                                    onClick={() => deleteTodo(id)}
                                    block
                                    danger
                                    type="primary"
                                    icon={<DeleteOutlined />} />
                            </Col>
                        </>
                }
            </Row>
        </li>
    );
}
