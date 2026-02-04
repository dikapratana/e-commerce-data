import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

import { useNavigate, useLocation } from "@tanstack/react-router";
import styles from "./styles.module.css";

const { Sider } = Layout;

export default function SideMenu({ collapsed }: SideMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const activeKey = `/${location.pathname.split("/")[1]}`;

  const menuItems = [
    {
      key: "/customer",
      icon: <UserOutlined />,
      label: "Customer",
    },
    {
      key: "/transaction",
      icon: <VideoCameraOutlined />,
      label: "Transaksi",
    },
  ];

  return (
    <Sider
      className={styles.sideMenu}
      trigger={null}
      collapsible
      theme="light"
      collapsed={collapsed}
    >
      <div className="p-4 h-16">Logo</div>
      <Menu
        mode="inline"
        theme="light"
        selectedKeys={[activeKey]}
        items={menuItems}
        onClick={({ key }) => {
          navigate({ to: key });
        }}
      />
    </Sider>
  );
}
