import React, { useState } from "react";
import {
  CaretDownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Flex, Layout, type MenuProps } from "antd";
import SideMenu from "../sidemenu";
import { Outlet } from "@tanstack/react-router";

const { Header, Content } = Layout;

const GuardLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Settings",
      key: "2",
      icon: <SettingOutlined />,
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
