import { Slider } from "antd";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";

const Price = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";
  const [price, setPrice] = useState<number[]>([+range_min, +range_max]);

  return (
    <div>
      <Slider
        range
        defaultValue={price}
        max={1000}
        min={0}
        onChange={(value) => setPrice(value)}
      />
      <div>
        Price
        <span className="text-[#46A358] text-[15px] font-bold ml-2">
          {price[0]}$ - {price[1]}$
        </span>
      </div>
      <button
        onClick={() =>
          setParam({
            category,
            range_min: price[0],
            range_max: price[1],
            sort,
            type,
          })
        }
        className="w-[90px] h-[40px] bg-[#46A358] text-white rounded-md my-3 max-lg:hidden"
      >
        Filter
      </button>
    </div>
  );
};

export default Price;
