import { Modal } from "antd";
import { useReduxDispatch, useReduxSelctor } from "../../../hooks/useRedux";
import Card from "../../proced-checkout/proced-total/card";
import { useNavigate } from "react-router-dom";
import { setOrderModalVisiblty } from "../../../redux/modalSlice";
import { order } from "../../../redux/shopSlice";

const OrderModal = () => {
  const { orderModalVisiblity } = useReduxSelctor((state) => state.modalSlice);
  const dispatch = useReduxDispatch();
  const { data, coupon } = useReduxSelctor((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 16);
  const total = coupon ? totalPrice - (totalPrice * coupon) / 100 : totalPrice;
  const navigate = useNavigate();
  const track = () => {
    dispatch(order());
    dispatch(setOrderModalVisiblty());
    navigate("/profile/track-order");
  };
  return (
    <Modal
      onCancel={track}
      width={"45%"}
      title={"Order Confirmation"}
      open={orderModalVisiblity}
      footer={false}
    >
      <div className="flex items-start justify-between mt-5">
        <div className="border-r pr-4">
          <p>Order Number</p>
          <h2 className="font-bold">{Date.now()}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Date</p>
          <h2 className="font-bold">{String(new Date()).slice(0, 15)}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Total</p>
          <h2 className="font-bold">$ {total.toFixed(2)}</h2>
        </div>
        <div className="border-r pr-4">
          <p>Payment Method</p>
          <h2 className="font-bold">Cash on delivery</h2>
        </div>
      </div>
      <h1 className="border-b border-[#46a358] font-bold text-xl py-2">
        Order Details
      </h1>
      {data.map((value) => (
        <Card key={value._id} {...value} />
      ))}

      <div className="flex items-center justify-between py-5">
        <p>Shipping</p>
        <p className="font-semibold text-[#46a358] ">$16.00</p>
      </div>
      <div className="flex items-center justify-between border-b  border-[#46a358]">
        <p>Total price</p>
        <p className="font-semibold text-[#46a358]">
          With shipping: ${total?.toFixed(2)}
        </p>
      </div>
      <p className="w-[70%] text-center m-auto py-2">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
      <button
        onClick={track}
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white m-auto mt-[50px] w-[145px] h-[45px]"
      >
        Track your order
      </button>
    </Modal>
  );
};

export default OrderModal;
