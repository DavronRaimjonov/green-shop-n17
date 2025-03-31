import { useParams } from "react-router-dom";
import useQueryHandler from "../../../hooks/useQueryHandler";
import type { AuthUser, BlogType, QueryType } from "../../../@types";
import { notification } from "antd";
import {
  CopyOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  PlusCircleOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import useLoader from "../../../generic/loader";

const Rendering = () => {
  const { created_by, id } = useParams();
  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  }: QueryType<AuthUser> = useQueryHandler({
    url: `/user/by_id/${created_by}`,
    pathname: `user-${created_by}`,
  });
  const { data, isLoading, isError }: QueryType<BlogType> = useQueryHandler({
    url: `user/blog/${id}`,
    pathname: `blog-${id}`,
  });
  const handleShare = async () => {
    const shareData = {
      title: data?.title,
      text: data?.short_description,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        notification.success({ message: "Sending data" });
      } catch (error) {
        notification.error({ message: "Error data" + error });
      }
    }
  };
  async function copyText() {
    try {
      await navigator.clipboard.writeText(data?.content as string);
      notification.success({ message: "Copy data" });
    } catch (error) {
      notification.success({ message: `Error copy data ${error}` });
    }
  }
  const usersLoading: boolean = userLoading || userError;
  const dataLoading: boolean = isLoading || isError;
  const { blog_id_loading } = useLoader();
  return (
    <section className="w-[80%] m-auto">
      {usersLoading || dataLoading ? (
        blog_id_loading()
      ) : (
        <div>
          <div className="flex items-center justify-between my-5">
            <div className="flex items-center gap-4">
              <img
                src={user?.profile_photo}
                className="w-[50px] h-[50px] rounded-full"
              />
              <div>
                <h3 className="font-semibold">{`${user?.name} ${user?.surname}`}</h3>
                <p className="text-[13px]">
                  Followers {user?.followers?.length}
                </p>
              </div>
            </div>
            <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[20px] py-[8px]">
              <PlusCircleOutlined /> Follow
            </button>
          </div>
          <h1 className="text-2xl my-4 font-bold">{data?.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: data?.content as string }}
          ></div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <EyeOutlined /> <p>{data?.views}</p>
            </div>
            <div className="flex items-center gap-1">
              <HeartOutlined /> <p>0</p>
            </div>
            <div className="flex items-center gap-1">
              <MessageOutlined /> <p>0</p>
            </div>
            <div
              onClick={handleShare}
              className="flex items-center gap-1 cursor-pointer"
            >
              <ShareAltOutlined />
            </div>
            <div
              onClick={copyText}
              className="flex items-center gap-1 cursor-pointer"
            >
              <CopyOutlined />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rendering;
