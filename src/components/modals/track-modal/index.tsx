import { Modal } from "antd";
import { useReduxDispatch, useReduxSelctor } from "../../../hooks/useRedux";
import Card from "../../proced-checkout/proced-total/card";
import { setTrackModalVisiblty } from "../../../redux/modalSlice";
import { useDeleteOrder } from "../../../hooks/useQueryHandler/useQueryAction";
import type { CartTypeData } from "../../../@types";
const TrackModal = () => {
  const { trackModalVisiblty } = useReduxSelctor((state) => state.modalSlice);
  const { order } = useReduxSelctor((state) => state.trackOrderSlice);
  const dispatch = useReduxDispatch();
  const { mutate } = useDeleteOrder();
  return (
    <Modal
      onOk={() => {
        mutate({ _id: order?._id as string });
        dispatch(setTrackModalVisiblty());
      }}
      okType="danger"
      okText={"Delete"}
      onCancel={() => dispatch(setTrackModalVisiblty())}
      width={"45%"}
      open={trackModalVisiblty}
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
          <h2 className="font-bold">$ 22</h2>
        </div>
        <div className="border-r pr-4">
          <p>Payment Method</p>
          <h2 className="font-bold">Cash on delivery</h2>
        </div>
      </div>
      <h1 className="border-b border-[#46a358] font-bold text-xl py-2">
        Order Details
      </h1>
      {order?.shop_list?.map((value: CartTypeData) => (
        <Card key={value._id} {...value} />
      ))}
      <div className="flex items-center justify-between py-5">
        <p>Shipping</p>
        <p className="font-semibold text-[#46a358] ">$16.00</p>
      </div>
      <div className="flex items-center justify-between border-b  border-[#46a358]">
        <p>Total price</p>
        <p className="font-semibold text-[#46a358]">
          With shipping: ${order?.extra_shop_info?.total?.toFixed(2)}
        </p>
      </div>
      <p className="w-[70%] text-center m-auto py-2">
        Your order is currently being processed. You will receive an order
        confirmation email shortly with the expected delivery date for your
        items.
      </p>
    </Modal>
  );
};

export default TrackModal;
