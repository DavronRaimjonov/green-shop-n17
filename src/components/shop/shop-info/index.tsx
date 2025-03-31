import type { FC } from "react";
import type { CartType, QueryType } from "../../../@types";
import UserInfo from "./user-info";
import { Rate, Skeleton } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const ShopInfo: FC<QueryType<CartType>> = ({ data, isLoading, isError }) => {
  const size_style =
    "w-[28px] h-[28px] border border-[#EAEAEA] rounded-full hover:border-[#46A358] hover:text-[#46A358] transition-colors font-medium";
  const loading = isLoading || isError;
  return (
    <div>
      <div>
        {loading ? (
          "loading..."
        ) : (
          <div className="flex items-end justify-between border-b border-[#45a358] pb-2">
            <div className="flex items-center gap-5">
              <UserInfo id={data?.created_by} />
              <div>
                <h3 className="text-[#3D3D3D] text-[28px] font-bold">
                  {data?.title}
                </h3>
                <p className="font-bold text-[#46A358] text-[22px]">
                  $ {data?.price}
                </p>
              </div>
            </div>
            <div>
              <Rate count={5} defaultValue={data?.rate} />
              <p>{data?.rate} Customer Review</p>
            </div>
          </div>
        )}

        <div className="mt-2">
          <p>Short Description:</p>
          <p>{data?.short_description}</p>
        </div>
        <h2 className="text-[#3D3D3D] text-[22px]  pt-3 pb-2 font-[500]">
          Size:
        </h2>
        <div className="flex gap-2">
          <button className={`${size_style}`}>S</button>
          <button className={`${size_style}`}>M</button>
          <button className={`${size_style}`}>L</button>
          <button className={`${size_style}`}>XL</button>
        </div>
        <div className="flex items-center gap-5 my-4">
          <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-[130px] h-[40px]">
            BUY NOW
          </button>
          <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-[#46A358] w-[130px] h-[40px] border border-[#46A358] bg-transparent">
            ADD TO CART
          </button>
          <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base w-[40px] h-[40px] bg-transparent border border-[#46A358] text-[20px] ">
            <HeartOutlined className="text-[#46A358]" />
          </button>
        </div>

        <div className="text-[#727272;] text-[15px] font-normal my-3">
          <span className="text-[#A5A5A5] pr-2">SKU</span>
          {loading ? <Skeleton.Input /> : data?._id}
        </div>
        <div className="text-[#727272;] text-[15px] font-normal my-3">
          <span className="text-[#A5A5A5] pr-2">Categories</span>
          {loading ? <Skeleton.Input /> : data?.category.toUpperCase()}
        </div>
        <div className="text-[#727272;] text-[15px] font-normal my-3">
          <span className="text-[#A5A5A5] pr-2">Tags</span>

          {loading ? <Skeleton.Input /> : "Home, Garden, Plants"}
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
