import { FC } from "react";
import { CartTypeData } from "../../../../@types";

const Card: FC<CartTypeData> = ({
  main_image,
  title,
  _id,
  counter,
  userPrice,
}) => {
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
        (X{counter})
      </div>
      <div className="text-[#727272] text-[16px] font-medium   w-[20%]">
        ${Number(userPrice).toFixed(2)}
      </div>
    </div>
  );
};

export default Card;
