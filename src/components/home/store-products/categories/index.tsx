import type { CategoryType, QueryType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import CateogriesItem from "./categories_item";
import Discount from "./discount";
import Price from "./price";

const Categories = () => {
  const { data, isLoading, isError }: QueryType<CategoryType[]> =
    useQueryHandler({
      url: "/flower/category",
      pathname: "category",
    });
  const { category_laoder } = useLoader();
  return (
    <div className="w-[310px] bg-[#fbfbfb]">
      <h3 className="text-[#3D3D3D] font-bold text-[16px] p-2">Categories</h3>
      <div className="p-4">
        {isLoading || isError
          ? category_laoder()
          : data?.map((value) => <CateogriesItem key={value._id} {...value} />)}
        <Price />
        <Discount />
      </div>
    </div>
  );
};

export default Categories;
