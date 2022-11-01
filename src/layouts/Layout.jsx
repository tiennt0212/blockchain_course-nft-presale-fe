import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import {
  HomeOutlined,
  SettingOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import logoIconFoundation from "../assets/icon-logo.jpeg";
import logoDevera from "../assets/devera.svg";
import { ROUTES } from "../utils/constant";

const StyledPrimaryLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;

  main {
    padding: 10rem;
    background-color: #ececec;
    flex-grow: 1;
  }
  .logo {
    img {
      margin: 2rem;
      width: 70%;
    }
  }
`;
export const PrimaryLayout = ({ children }) => {
  const { Content, Footer, Sider } = Layout;
  const menuItems = [
    { icon: HomeOutlined, label: "Home", route: ROUTES.HOME },
    {
      icon: SettingOutlined,
      label: "Manage Presale",
      route: ROUTES.MANAGE_YOUR_PRESALE,
    },
    {
      icon: DatabaseOutlined,
      label: "My Token",
      route: ROUTES.MY_PRESALE,
    },
  ];
  return (
    <StyledPrimaryLayout>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <img
              src={logoIconFoundation}
              alt="logo-icon-foundation"
              className="icon-foundation"
            />
            <img
              src={logoDevera}
              alt="logo-devera-academy"
              className="devera"
            />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={menuItems.map(({ icon, label, route }, index) => ({
              key: index,
              icon: React.createElement(icon),
              label,
              onClick: () => {
                window.location.href = route;
              },
            }))}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Devera Blockchain ©2018 Final Project created by Tien Nguyen
          </Footer>
        </Layout>
      </Layout>
    </StyledPrimaryLayout>
  );
};
