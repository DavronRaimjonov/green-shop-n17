import { useParams } from "react-router-dom";
import useQueryHandler from "../../hooks/useQueryHandler";
import ShopSwiper from "./shop-swiper";
import type { CartType, QueryType } from "../../@types";
import ShopInfo from "./shop-info";
import ShopDescription from "./shop-description";

const ShopComponent = () => {
  const { category, id }: { category?: string; id?: string } = useParams();
  const { data, isLoading, isError }: QueryType<CartType> = useQueryHandler({
    pathname: "product-id",
    url: `flower/category/${category}/${id}`,
  });
  return (
    <div className="w-[90%] m-auto py-10">
      <div className="grid grid-cols-2 gap-10">
        <ShopSwiper data={data} isLoading={isLoading} isError={isError} />
        <ShopInfo data={data} isLoading={isLoading} isError={isError} />
      </div>
      <ShopDescription data={data} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default ShopComponent;
