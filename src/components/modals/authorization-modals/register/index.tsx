import { Form, Input } from "antd";
import facebook from "../../../../assets/icons/facebook.svg";
import google from "../../../../assets/icons/google.svg";
import { FieldTypeRegister } from "../../../../@types";
import {
  useRegisterMutate,
  useRegisterWithGogole,
} from "../../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";
const Register = () => {
  const { mutate, isLoading } = useRegisterMutate();
  const { mutate: registerMutate } = useRegisterWithGogole();
  const register = (e: FieldTypeRegister) => {
    mutate(e);
  };
  return (
    <div className="w-[90%] m-auto">
      <p className="pt-4">Enter your username and password to login.</p>

      <Form
        onFinish={register}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="mt-2npm install @ant-design/v5-patch-for-react-19 --save"
      >
        <Form.Item<FieldTypeRegister>
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="davron_raimjonov4446@mail.ru"
          />
        </Form.Item>
        <Form.Item<FieldTypeRegister>
          name="surname"
          rules={[{ required: true, message: "Please input your surname!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="davron_raimjonov4446@mail.ru"
          />
        </Form.Item>
        <Form.Item<FieldTypeRegister>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="davron_raimjonov4446@mail.ru"
          />
        </Form.Item>
        <Form.Item<FieldTypeRegister>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="************"
          />
        </Form.Item>
        <button
          disabled={isLoading}
          className="bg-[#46a358] w-full h-[40px] rounded-md text-white mt-3 text-[18px] opacity-100"
        >
          {isLoading ? <LoadingOutlined /> : "Register"}
        </button>
      </Form>
      <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[35%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
        <div className="w-[35%] h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <button
        onClick={() => registerMutate()}
        className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full"
      >
        <img src={google} alt="" /> Register with Google
      </button>
      <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
        <img src={facebook} alt="" /> Register with Facebook
      </button>
    </div>
  );
};

export default Register;
