import Post from "../Common/Post/Post";
import SideBarRight from "../SideBarRight/SideBarRight";
import SideBarleft from "../SideBarleft/SideBarleft";

const DUMMY_POSTS = [
  {
    userName: "Dodo",
    userImg: "source",
    post: "some random postt hhsashdlsahd",
    postDate: "10.10.2023",
    upCount: 50,
    postId: "slkgbpdijaf938re",
  },
  {
    userName: "May",
    userImg: "source",
    post: "hello hi hola alo ola",
    postDate: "09.10.2022",
    upCount: 1050,
    postId: "lighalkgba",
  },
  {
    userName: "Merve",
    userImg: "source",
    post: "this is the first post",
    postDate: "10.11.2010",
    upCount: 3,
    postId: "gouhqwgeh89lsafkbjask",
  },
];

const Feed = () => {
  return (
    <>
      <SideBarleft />
      {DUMMY_POSTS.map((post) => (
        <Post
          key={post.postId}
          date={post.postDate}
          imgSrc={post.userImg}
          post={post.post}
          upCount={post.upCount}
          username={post.userName}
        />
      ))}
      <SideBarRight />
    </>
  );
};

export default Feed;
