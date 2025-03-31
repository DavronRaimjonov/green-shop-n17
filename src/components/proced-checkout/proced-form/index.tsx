import { Form, Input, Radio } from "antd";
import { cookieInfo } from "../../../generic/cookies";
import { useReduxDispatch, useReduxSelctor } from "../../../hooks/useRedux";
import { setModalAuthorizationModalVisiblty } from "../../../redux/modalSlice";
import { AuthUser, MakeOrderType } from "../../../@types";
import { useMakeOrderList } from "../../../hooks/useQueryHandler/useQueryAction";
import { LoadingOutlined } from "@ant-design/icons";
const ProcedForm = () => {
  const { isAuthorization, getCookie } = cookieInfo();
  const dispatch = useReduxDispatch();
  const user: AuthUser = getCookie("user");
  const { data, coupon } = useReduxSelctor((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 16);
  const total = coupon ? totalPrice - (totalPrice * coupon) / 100 : totalPrice;
  const { mutate, isLoading } = useMakeOrderList();
  const order = (e: MakeOrderType) => {
    const makeOrder = {
      shop_list: data,
      billing_address: e,
      extra_shop_info: {
        method: e.payment_method,
        total,
      },
    };
    mutate(makeOrder);
  };
  const radio_style: string =
    "bordant-radio-wrapper ant-radio-wrapper-checked ant-radio-wrapper-in-form-item border border-[#46A358] w-full h-[40px] flex items-center pl-[10px] rounded-lg css-k7429zer";
  return (
    <section>
      <Form
        fields={[
          { name: ["name"], value: user.name },
          { name: ["surname"], value: user.surname },
          { name: ["country"], value: user.billing_address?.country },
          { name: ["street"], value: user.billing_address?.street_address },
          { name: ["state"], value: user.billing_address?.state },
          { name: ["email"], value: user.email },
          { name: ["zip"], value: user.billing_address?.zip },
          {
            name: ["appartment"],
            value: user.billing_address?.additional_street_address,
          },
          { name: ["town"], value: user.billing_address?.town },
          { name: ["phone_number"], value: user.phone_number },
        ]}
        onFinish={order}
        layout="vertical"
      >
        <div className="grid grid-cols-2 gap-5">
          <div>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="Type your first name..." />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country / Region"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first country..." />
            </Form.Item>
            <Form.Item
              name="street"
              label="Streed Address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first street..." />
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input placeholder="Type your first state..." />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email adress"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first email..." />
            </Form.Item>
            <Form.Item
              name="payment_method"
              label="Payment Method"
              rules={[
                {
                  required: true,
                  message: "Please enter Payment Method",
                },
              ]}
            >
              <Radio.Group className="flex flex-col gap-3">
                <Radio
                  className={`${radio_style}`}
                  value={"other-payment-methods"}
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fpayment_collected_methods.png?alt=media&token=c4bfd991-8bd8-4e6b-97dc-83381db193f7"
                    alt=""
                  />
                </Radio>
                <Radio
                  className={`${radio_style}`}
                  value={"dorect-bank-transfer"}
                >
                  Dorect bank transfer
                </Radio>
                <Radio className={`${radio_style}`} value={"cash-on-delivery"}>
                  Cash on delivery
                </Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="last_name"
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your Last name..." />
            </Form.Item>
            <Form.Item
              name="town"
              label="Town / City"
              rules={[{ required: true }]}
            >
              <Input placeholder="Type your first town..." />
            </Form.Item>
            <Form.Item name="appartment" label=" " rules={[{ required: true }]}>
              <Input placeholder="Type your first appartment..." />
            </Form.Item>
            <Form.Item name="zip" label="Zip" rules={[{ required: true }]}>
              <Input placeholder="Type your first zup..." />
            </Form.Item>
            <Form.Item
              name="phone_number"
              label="Phone number"
              rules={[{ required: true }]}
            >
              <Input
                addonBefore="+998"
                placeholder="Type your first phone_number..."
              />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          name="comment"
          label="Comment"
          rules={[
            {
              required: true,
              message: "Please enter Comment",
            },
          ]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>
        <button
          onClick={() => {
            if (!isAuthorization) {
              dispatch(setModalAuthorizationModalVisiblty());
              return;
            }
          }}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white mt-[40px] w-full h-[40px]"
        >
          {isLoading ? <LoadingOutlined /> : "Palce order"}
        </button>
      </Form>
    </section>
  );
};

export default ProcedForm;
