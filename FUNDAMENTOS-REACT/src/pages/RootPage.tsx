import {Layout} from "antd";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo.svg"

const { Sider,Content,Footer } = Layout;
import styles from "../styles/RootPage.module.css"
import { SideMenu } from "../components/SideMenu";

export function RootPage(){
    return(
        <Layout>
            <Sider>
                <img alt="logo" src={logo}/>
                <SideMenu />
            </Sider>
            <Layout>
                <Content className={styles.content}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: "center"}}>
                    Create By Clério Pottemayer Bratfisch &copy; 2023
                </Footer>
            </Layout>
        </Layout>
    )
}