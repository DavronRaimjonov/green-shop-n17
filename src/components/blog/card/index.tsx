import { CommentOutlined, EyeOutlined, HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { FC } from "react";
import { BlogType } from "../../../@types";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
const BlogCard: FC<BlogType> = ({
  title,
  short_description,
  created_by,
  _id,
  views,
}) => {
  const navigate = useNavigate();
  const axios = useAxios();
  return (
    <Card
      actions={[
        <div>
          <EyeOutlined className="pr-1" />
          {views}
        </div>,
        <div>
          <CommentOutlined className="pr-1" />0
        </div>,
        <div>
          <HeartOutlined className="pr-1" />0
        </div>,
      ]}
    >
      <Card.Meta
        title={
          <div
            onClick={async () => {
              await axios({
                url: "user/blog/view",
                method: "PUT",
                body: { _id },
              });
              navigate(`/blog/${created_by}/${_id}`);
            }}
            className="cursor-pointer"
          >
            {title}
          </div>
        }
        description={<>{short_description}</>}
      />
    </Card>
  );
};

export default BlogCard;
