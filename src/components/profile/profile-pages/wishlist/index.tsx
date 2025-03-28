import type { CartType, QueryType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import Card from "../../../home/store-products/products/card";

const Wishlist = () => {
  const { data, isLoading, isError }: QueryType<CartType[]> = useQueryHandler({
    url: "user/wishlist",
    pathname: "wishlist",
  });

  const { cart_loader } = useLoader();

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {isLoading || isError
          ? cart_loader()
          : data?.slice(3).map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Wishlist;
