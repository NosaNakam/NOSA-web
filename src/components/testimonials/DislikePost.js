import { AiFillDislike, AiFillLike } from "react-icons/ai";
import tw from "twin.macro";

const Icon = tw.div`flex items-center gap-2 cursor-pointer`;
const LikedIcon = tw(Icon)`text-blue-600`;
const DefaultIcon = tw(Icon)`text-gray-700`;
const DislikePost = ({ post, userId, handleDislike }) => {
  const isDisliked = post?.interactions?.dislikes?.some((dislike) => dislike._id === userId);

  //   console.log(isDisliked);
  return (
    <div>
      {isDisliked ? (
        <LikedIcon onClick={() => handleDislike(post?._id)}>
          ({post?.interactions?.dislikes?.length}) <AiFillDislike fontSize={24} />
          <span>Dislike</span>
        </LikedIcon>
      ) : (
        <DefaultIcon onClick={() => handleDislike(post?._id)}>
          ({post?.interactions?.dislikes?.length}) <AiFillDislike fontSize={24} />
          <span>Dislike</span>
        </DefaultIcon>
      )}
    </div>
  );
};

export default DislikePost;
