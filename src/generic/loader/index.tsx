import { Card, Skeleton } from "antd";

const useLoader = () => {
  const category_laoder = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx} className="mt-2">
        <Skeleton.Input className="!w-full !h-[40px]" />
      </div>
    ));
  };

  const discount_loader = () => {
    return (
      <div className="w-full bg-[#eef7f1] text-center px-4 py-[20px]">
        <Skeleton.Input className="!w-full !h-[40px]" />
        <Skeleton.Input className="!w-full !h-[40px] !mt-[20px]" />
        <Skeleton.Image className="!w-full !h-[200px] !mt-[20px]" />
      </div>
    );
  };
  const cart_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image className="!w-full !h-[320px]" />
        <Skeleton />
      </div>
    ));
  };
  const blog_card_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => {
      return (
        <Card key={idx}>
          <Skeleton />
        </Card>
      );
    });
  };
  const blog_id_loading = () => {
    return (
      <div>
        <div className="flex gap-4">
          <Skeleton.Avatar active />
          <Skeleton.Input active />
        </div>
        <div>
          <Skeleton.Input active className="my-[15px]" />
          {Array.from({ length: 20 }).map((_, idx) => (
            <Skeleton.Input
              key={idx}
              active
              className="!w-full my-[10px] !h-[20px]"
            />
          ))}
        </div>
      </div>
    );
  };
  return {
    category_laoder,
    discount_loader,
    cart_loader,
    blog_card_loader,
    blog_id_loading,
  };
};

export default useLoader;
