import { Breadcrumb } from "antd";
import CardTotal from "./card-total";
import Shopping from "./shopping";
import { Link } from "react-router-dom";

const ProductsShopComponent = () => {
  return (
    <section className="w-[90%] m-auto py-5">
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: "Products shop",
          },
        ]}
      />
      <div className="grid grid-cols-[3fr_1fr] gap-5">
        <Shopping />
        <CardTotal />
      </div>
    </section>
  );
};

export default ProductsShopComponent;
