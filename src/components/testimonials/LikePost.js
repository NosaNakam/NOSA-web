import { AiFillLike } from "react-icons/ai";
import tw from "twin.macro";

const Icon = tw.div`flex items-center gap-2 cursor-pointer`;
const LikedIcon = tw(Icon)`text-blue-600`;
const DefaultIcon = tw(Icon)`text-gray-700`;
const LikePost = ({ post, userId, handleLike }) => {
  const isLiked = post?.interactions?.likes?.some((like) => like._id === userId);

  //   console.log(isLiked);
  return (
    <div>
      {isLiked ? (
        <LikedIcon onClick={() => handleLike(post?._id)}>
          ({post?.interactions?.likes?.length})<AiFillLike fontSize={24} />
          <span>Like</span>
        </LikedIcon>
      ) : (
        <DefaultIcon onClick={() => handleLike(post?._id)}>
          ({post?.interactions?.likes?.length})<AiFillLike fontSize={24} />
          <span>Like</span>
        </DefaultIcon>
      )}
    </div>
  );
};

export default LikePost;
