import React, { useState } from "react";
import {
  CaretDownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Flex, Layout, type MenuProps } from "antd";
import SideMenu from "../sidemenu";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "../../store/use-auth-store";

const { Header, Content } = Layout;

const GuardLayout: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: "keluar",
      key: "2",
      icon: <LogoutOutlined />,
      onClick: () => {
        logout();
        navigate({
          to: "/",
        });
      },
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <Layout className="h-screen">
      <SideMenu collapsed={collapsed} />
      <Layout>
        <Header className="bg-white! h-16! px-4! items-center!">
          <Flex
            justify="space-between"
            align="center"
            className="w-full! h-full"
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />

            <Dropdown menu={menuProps} placement="bottomRight">
              <Flex
                justify="end"
                align="center"
                gap={4}
                onClick={() => {}}
                className="cursor-pointer"
              >
                <Avatar size={25} />
                <span className="text-sm font-medium text-neutral-800">
                  Jhon Doe
                </span>
                <CaretDownOutlined />
              </Flex>
            </Dropdown>
          </Flex>
        </Header>
        <Content>
          <div className="p-4">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default GuardLayout;
