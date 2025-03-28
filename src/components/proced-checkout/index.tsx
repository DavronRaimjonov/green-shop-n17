import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import ProcedForm from "./proced-form";
import ProcedTotal from "./proced-total";
import OrderModal from "../modals/order-modal";

const ProcedCheckoutComponent = () => {
  return (
    <section className="w-[90%] m-auto">
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: <Link to="/products-shop">Products shop</Link>,
          },
          {
            title: "Proceed checkout",
          },
        ]}
      />
      <div className="grid grid-cols-[1.5fr_1fr] gap-5 my-5">
        <ProcedForm />
        <ProcedTotal />
      </div>
      <OrderModal />
    </section>
  );
};

export default ProcedCheckoutComponent;
