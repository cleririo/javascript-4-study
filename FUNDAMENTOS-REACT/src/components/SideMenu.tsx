import { Menu } from "antd";
import { BookOutlined, LoginOutlined } from "@ant-design/icons"
import { MenuItemType, ItemType } from "antd/es/menu/hooks/useItems";
import { useLocation, useNavigate } from "react-router-dom"

const menuItems: ItemType<MenuItemType>[] = [
    {
        key: "/login",
        icon: <LoginOutlined />,
        label: "Login",
    },
    {
        key: "/aulas",
        icon: <BookOutlined />,
        label: "Aulas",
    }
]


export function SideMenu(){
    const router = useNavigate();
    const location = useLocation();

    return <Menu
        defaultSelectedKeys={[location.pathname]}
        mode="vertical"
        onClick={({ key }) => router(key)}
        items={menuItems}
        theme="dark"
    />
}