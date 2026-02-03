import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import styles from "./styles.module.css";

export default function SideMenu({ collapsed }: SideMenuProps) {
  return (
    <Sider
      trigger={null}
      collapsible
      theme="light"
      collapsed={collapsed}
      className={styles.sideMenu}
    >
      <div className="p-4  h-16">Logo</div>
      <p
        className={`px-4 py-2 ${!collapsed ? "opacity-100" : "opacity-0"} transition ease-in duration-400`}
      >
        Navigation
      </p>
      <Menu
        theme="light"
        className="border-none! border-neutral-50 "
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Customer",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </Sider>
  );
}
