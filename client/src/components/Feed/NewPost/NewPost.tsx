import { useRef } from "react";
import Button from "../../Common/Button/Button";

const NewPost = () => {
  const postRef = useRef<HTMLInputElement>(null);

  const handlePost = () => {
    console.log("post sent");
  };

  return (
    <div>
      <input
        type="text"
        ref={postRef}
      />
      <Button
        className="border border-alternateColor my-auto rounded-3xl w-60 p-2 bg-alternateColor border-y-2 border-x-2 hover:bg-secondaryColor mt-2"
        onClick={handlePost}
      >
        Up!
      </Button>
    </div>
  );
};

export default NewPost;
