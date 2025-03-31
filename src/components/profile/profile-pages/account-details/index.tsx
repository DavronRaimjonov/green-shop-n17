import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";
import { cookieInfo } from "../../../../generic/cookies";
import type { AccountDetails } from "../../../../@types";
import { useEditDetails } from "../../../../hooks/useQueryHandler/useQueryAction";
const AccountDetails = () => {
  const { getCookie, setCookie } = cookieInfo();
  const user = getCookie("user");
  const { mutate } = useEditDetails();
  const updageDetails = (e: AccountDetails) => {
    mutate({
      ...e,
      _id: user._id,
      profile_photo: e.profile_photo.file?.response?.image_url?.url,
    });
    setCookie("user", {
      ...user,
      ...e,
      _id: user._id,
      profile_photo: e.profile_photo.file?.response?.image_url?.url,
    });
  };

  return (
    <div>
      <Form
        onFinish={updageDetails}
        fields={[
          { name: ["name"], value: user?.name },
          { name: ["surname"], value: user?.surname },
          { name: ["email"], value: user?.email },
          { name: ["phone_number"], value: user?.phone_number },
          { name: ["username"], value: user?.username },
        ]}
        layout="vertical"
        className="grid grid-cols-2 gap-4"
      >
        <div>
          <Form.Item
            name={"name"}
            label="First name"
            rules={[{ required: true, message: "Please eneter first name" }]}
          >
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[{ required: true, message: "Please eneter first email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name={"username"}
            label="Username"
            rules={[
              { required: true, message: "Please eneter first usernmae" },
            ]}
          >
            <Input placeholder="Username" />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            name={"surname"}
            label="First name"
            rules={[{ required: true, message: "Please eneter surname" }]}
          >
            <Input placeholder="Surname" />
          </Form.Item>
          <Form.Item
            name={"phone_number"}
            label="Phone number"
            rules={[{ required: true, message: "Please eneter phone number" }]}
          >
            <Input addonBefore={"+998"} placeholder="Phone number" />
          </Form.Item>
          <Form.Item
            name="profile_photo"
            label="Image"
            rules={[{ required: true, message: "Please eneter  image" }]}
          >
            <Upload
              name="image"
              data={{ type: "image" }}
              action="https://beckend-n14.onrender.com/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
              listType="picture"
              headers={{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              }}
              accept=".png,.jpg,.jpeg"
            >
              <Button type="primary" icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </div>
        <button className="bg-[#46A358] w-[160px] flex rounded-md items-center justify-center gap-1 text-base text-white h-[40px] px-[10px] mt-[15px]">
          Save changes
        </button>
      </Form>
    </div>
  );
};

export default AccountDetails;
