import { Flex } from "antd";
import LoginFragment from "../../../fragments/login";

export default function LoginPage() {
  return (
    <Flex
      className="h-screen bg-linear-to-br from-[#3A6CA5] to-[#355E88] relative"
      justify="center"
      align="center"
    >
      <LoginFragment />
    </Flex>
  );
}
