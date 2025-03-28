import type { FC } from "react";
import type { CartType, QueryType } from "../../../@types";
import { Skeleton } from "antd";

const ShopDescription: FC<QueryType<CartType>> = ({
  data,
  isLoading,
  isError,
}) => {
  return (
    <div className="py-10">
      <h3 className="text-[18px] cursor-pointer text-[#46A358] border-b-2 border-[#46A358] py-2 mb-2">
        Product Description
      </h3>
      {isLoading || isError ? (
        <Skeleton />
      ) : (
        <p
          dangerouslySetInnerHTML={{ __html: data?.description as string }}
        ></p>
      )}
    </div>
  );
};

export default ShopDescription;
