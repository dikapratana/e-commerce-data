import { Flex } from "antd";
import { IMAGES } from "../../../configs/constants/images";
import LoginFragment from "../../../fragments/login";

export default function LoginPage() {
  return (
    <Flex
      className="h-screen bg-white relative bg-cover bg-center"
      justify="center"
      align="center"
      style={{ backgroundImage: `url(${IMAGES.BgLogin})` }}
    >
      <LoginFragment/>
    </Flex>
  );
}
