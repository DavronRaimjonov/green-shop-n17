import Categories from "./categories";
import Products from "./products";

const StoreProducts = () => {
  return (
    <section className="flex items-start gap-5 mt-5">
      <Categories />
      <Products />
    </section>
  );
};

export default StoreProducts;
