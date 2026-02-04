import { Layout, Menu } from "antd";
import {
  ShopFilled,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { useNavigate, useLocation } from "@tanstack/react-router";
import styles from "./styles.module.css";
import { useScreen } from "../../hooks/useScreen";

const { Sider } = Layout;

export default function SideMenu({ collapsed }: SideMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const activeKey = `/${location.pathname.split("/")[1]}`;
  const { isMobile } = useScreen();

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
      collapsible
      theme="light"
      collapsed={collapsed}
      {...(isMobile ? { collapsedWidth: 0 } : {})}
    >
      <div className="p-4 h-16 flex justify-center text-neutral-600 text-xl items-center gap-2">
        <ShopFilled />
        {!collapsed && <span className="text-sm font-medium">E-Commerce</span>}
      </div>
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
