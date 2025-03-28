import type { DiscountType, QueryType } from "../../../../../@types";
import useLoader from "../../../../../generic/loader";
import useQueryHandler from "../../../../../hooks/useQueryHandler";

const Discount = () => {
  const { data, isError, isLoading }: QueryType<DiscountType> = useQueryHandler(
    {
      pathname: "discount",
      url: "features/discount",
    }
  );
  const { discount_loader } = useLoader();
  return (
    <div className="w-full bg-[#eef7f1] text-center px-4 py-[20px]">
      {isLoading || isError ? (
        discount_loader()
      ) : (
        <div>
          <h2 className="text-[#46A358] text-[30px] font-normal leading-[40px]">
            {data?.title}
          </h2>
          <h3 className="text-[#3D3D3D] font-bold text-[20px] pt-[17px]">
            UP TO {data?.discoount_up_to}% OFF
          </h3>

          <img src={data?.poster_image_url} alt="" />
        </div>
      )}
    </div>
  );
};

export default Discount;
