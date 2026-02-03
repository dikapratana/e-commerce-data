import { EyeFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Input } from "antd";
import { ICONS } from "../../configs/constants/icons";
import { Link } from "@tanstack/react-router";

export default function LoginFragment() {
  return (
    <Card className="shadow-lg border-neutral-50! min-w-[25%] max-w-full">
      <Flex className="mb-4!" vertical justify="start" align="start" gap={8}>
        <h4 className="text-base font-bold">Masuk Ke E-Commerce</h4>
        <div className="bg-primary-1 w-30 h-1 rounded-2xl" />
      </Flex>
      <Flex vertical gap={16}>
        <Flex vertical gap={4}>
          <label htmlFor="username" className="text-neutral-800 font-medium">
            Username
          </label>
          <Input
            id="username"
            placeholder="default size"
            prefix={<UserOutlined />}
          />
        </Flex>
        <Flex vertical gap={4}>
          <label htmlFor="password" className="text-neutral-800 font-medium">
            Password
          </label>
          <Input
            id="password"
            placeholder="default size"
            prefix={<LockOutlined />}
            suffix={<EyeFilled />}
          />
        </Flex>
      </Flex>
      <Button
        type="primary"
        className="text-neutral-800! font-semibold! w-full mt-8"
      >
        Login
      </Button>
      <Divider titlePlacement="center">
        <p className="text-neutral-400 text-sm">atau masuk dengan</p>
      </Divider>
      <Button className="text-neutral-800! font-semibold! w-full">
        <img alt="icon google" src={ICONS.Google} className="w-4" /> Google
      </Button>

      <p className="text-neutral-500 text-xs text-center mt-8">Belum memiliki akun?{' '}<Link to="#" className="text-primary-1!" >Daftar Sekarang</Link></p>
    </Card>
  );
}
