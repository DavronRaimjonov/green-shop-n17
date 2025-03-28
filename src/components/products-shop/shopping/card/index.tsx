import { FC } from "react";
import { CartTypeData } from "../../../../@types";
import { DeleteFilled } from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { counterEdited, deleteData } from "../../../../redux/shopSlice";
import { notificationApi } from "../../../../generic/notification";

const Card: FC<CartTypeData> = (props) => {
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const { main_image, title, _id, price, userPrice, counter } = props;
  const findCounter = counter === 1;
  return (
    <div className="my-5 bg-[#eee] p-2 flex items-center justify-between rounded-lg">
      <div className="flex items-center gap-4 w-[40%]">
        <img className="w-[70px] h-[70px]" src={main_image} alt="" />
        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>
          <p className="text-[14px] font-normal pt-[10px] max-sm:text-[12px] ">
            <span className="text-[#A5A5A5]">SKU: </span> {_id}
          </p>
        </div>
      </div>
      <div className="text-[#727272] text-[16px] font-medium  w-[20%]">
        ${price}
      </div>
      <div className="flex items-center gap-3  w-[20%]">
        <button
          disabled={findCounter}
          onClick={() =>
            dispatch(counterEdited({ type: "decrement", id: _id }))
          }
          className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
        >
          -
        </button>
        <span className="text-[17px]">{counter}</span>
        <button
          onClick={() =>
            dispatch(counterEdited({ type: "increment", id: _id }))
          }
          className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white"
        >
          +
        </button>
      </div>
      <div className="text-[#727272] text-[16px] font-medium   w-[20%]">
        ${Number(userPrice).toFixed(2)}
      </div>
      <DeleteFilled
        onClick={() => {
          dispatch(deleteData(_id));
          notify("delete_data");
        }}
        className="text-[#727272] text-[20px] cursor-pointer"
      />
    </div>
  );
};

export default Card;
