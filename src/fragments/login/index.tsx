import {
  EyeFilled,
  EyeInvisibleFilled,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Flex } from "antd";
import { FormField } from "../../components/form/formfield/form-field";
import InputField from "../../components/form/input/input-field";
import useController from "./hooks/use-controller";

export default function LoginFragment() {
  const {
    form: { control, errors, isValid, handleSubmit, onSubmit, loading },
    showPassword,
    setShowPassword,
    contextHolder,
  } = useController();
  return (
    <Card className="shadow-lg border-neutral-50! min-w-[25%] max-w-full">
      {contextHolder}
      <Flex className="mb-4!" vertical justify="start" align="start" gap={8}>
        <h4 className="text-base font-bold">Masuk Ke E-Commerce</h4>
        <div className="bg-primary-1 w-30 h-1 rounded-2xl" />
      </Flex>
      <Flex vertical>
        <FormField
          name="username"
          label="Username"
          placeholder="Masukkan Username"
          className="mb-4"
          control={control}
          component={InputField}
          error={errors["username"]?.message}
          prefix={<UserOutlined />}
        />
        <FormField
          name="password"
          label="Password"
          placeholder="Masukkan Password"
          className="mb-4"
          control={control}
          component={InputField}
          type={!showPassword ? "password" : "text"}
          error={errors["password"]?.message}
          prefix={<LockOutlined />}
          suffix={
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            >
              {showPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>
          }
        />
      </Flex>
      <Button
        type="primary"
        className=" font-semibold! w-full mt-4"
        disabled={!isValid || loading}
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </Card>
  );
}
