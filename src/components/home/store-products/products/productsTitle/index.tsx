import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import { title_category } from "../../../../../utils";
import { Select } from "antd";

const ProductsTitle = () => {
  const { setParam, getParam } = useSearchParamsHandler();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";
  const handleChange = (value: string) => {
    setParam({ category, range_min, range_max, sort: value, type });
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer">
        {title_category.map((value) => (
          <h3
            className={`${type === value.label && "text-[#45a358] underline"}`}
            onClick={() =>
              setParam({
                category,
                range_min,
                range_max,
                sort,
                type: value.label,
              })
            }
            key={value.id}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="flex items-center gap-2">
        Short by:
        <Select
          defaultValue={sort}
          style={{ width: 150 }}
          onChange={handleChange}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expansive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsTitle;
