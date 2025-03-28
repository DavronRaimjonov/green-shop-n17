import { Avatar, Skeleton, Tooltip } from "antd";
import useQueryHandler from "../../../../hooks/useQueryHandler";
import type { AuthUser, QueryType } from "../../../../@types";

const UserInfo = (props: { id?: string }) => {
  const { data, isLoading, isError }: QueryType<AuthUser> = useQueryHandler({
    pathname: "userinfo",
    url: `user/by_id/${props.id}`,
  });
  return (
    <div>
      {isLoading || isError ? (
        <Skeleton.Avatar className="w-[80px] h-[80px]" />
      ) : (
        <Tooltip
          title={`${data?.name} ${data?.surname}`}
          className="cursor-pointer"
        >
          <Avatar src={data?.profile_photo} className="w-[80px] h-[80px]" />
        </Tooltip>
      )}
    </div>
  );
};

export default UserInfo;
