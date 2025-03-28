import { cookieInfo } from "../../generic/cookies";
import BlogSerch from "./blog-search";
import BlogHeader from "./blog-header";
import BlogCard from "./card";
import useQueryHandler from "../../hooks/useQueryHandler";
import type { BlogType, QueryType } from "../../@types";
import useLoader from "../../generic/loader";

const BlogComponent = () => {
  const { isAuthorization } = cookieInfo();
  const { data, isLoading, isError }: QueryType<BlogType[]> = useQueryHandler({
    url: "user/blog",
    pathname: "blog",
    params: {
      search: "",
    },
  });
  const { blog_card_loader } = useLoader();

  return (
    <section className="w-[90%] m-auto">
      {isAuthorization ? <BlogSerch /> : <BlogHeader />}
      <div className="grid grid-cols-3 gap-5 my-5">
        {isLoading || isError
          ? blog_card_loader()
          : data?.map((value) => <BlogCard key={value._id} {...value} />)}
      </div>
    </section>
  );
};

export default BlogComponent;
