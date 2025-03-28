import { Form, Input } from "antd";
import facebook from "../../../../assets/icons/facebook.svg";
import google from "../../../../assets/icons/google.svg";
import { FieldType } from "../../../../@types";
import {
  useLoginMutate,
  useLoginWithGogole,
} from "../../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";
const Login = () => {
  const { mutate, isLoading } = useLoginMutate();
  const { mutate: loginWithMutate } = useLoginWithGogole();
  const login = (e: FieldType) => {
    mutate(e);
  };
  return (
    <div className="w-[90%] m-auto">
      <p className="pt-4">Enter your username and password to login.</p>

      <Form
        onFinish={login}
        initialValues={{ remember: true }}
        autoComplete="off"
        className="mt-2npm install @ant-design/v5-patch-for-react-19 --save"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="davron_raimjonov4446@mail.ru"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="************"
          />
        </Form.Item>
        <h3 className="text-end text-[#46a358] text-[14px]">
          Forgot Passowrd ?
        </h3>
        <button
          disabled={isLoading}
          className="bg-[#46a358] w-full h-[40px] rounded-md text-white mt-3 text-[18px] opacity-100"
        >
          {isLoading ? <LoadingOutlined /> : "Login"}
        </button>
      </Form>
      <div className="flex items-center justify-center mt-5 mb-5 gap-4">
        <div className="w-[35%] h-[2px] bg-[#EAEAEA]"></div>
        <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
        <div className="w-[35%] h-[2px] bg-[#EAEAEA]"></div>
      </div>
      <button
        onClick={() => loginWithMutate()}
        className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full"
      >
        <img src={google} alt="" /> Login with Google
      </button>
      <button className="border h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer w-full">
        <img src={facebook} alt="" /> Login with Facebook
      </button>
    </div>
  );
};

export default Login;
