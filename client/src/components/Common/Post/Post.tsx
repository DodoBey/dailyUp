import { FC } from "react";

type PostProps = {
  post: string;
  username: string;
  imgSrc: string;
  date: string;
  upCount: number;
};

const Post: FC<PostProps> = ({ post, username, imgSrc, date, upCount }) => {
  // gonna accept post, type string, username(or id)

  return (
    <div>
      <div>
        <img
          src={imgSrc}
          alt=""
        />
        <span>{username}</span>
      </div>
      <p>{post}</p>
      <div>
        <span>{date}</span>
        <span>{upCount}</span>
      </div>
    </div>
  );
};

export default Post;
