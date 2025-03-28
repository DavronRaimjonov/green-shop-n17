import { Empty, Skeleton } from "antd";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import { OrderType } from "../../../../@types";
import OrderItem from "./order-item";

const TrackOrder = () => {
  const { data, isLoading, isError } = useQueryHandler({
    url: "order/get-order",
    pathname: "order-list",
  });
  return (
    <div>
      <h1 className="font-bold text-2xl">Track your Orders</h1>
      {isLoading || isError ? (
        Array.from({ length: 8 }).map((_, idx) => (
          <Skeleton.Input key={idx} active className="!w-full !h-[40px]" />
        ))
      ) : !data?.slice(62).length ? (
        <Empty description={<p>No order</p>} />
      ) : (
        data
          ?.slice(62)
          .map((value: OrderType) => <OrderItem key={value._id} {...value} />)
      )}
    </div>
  );
};

export default TrackOrder;
