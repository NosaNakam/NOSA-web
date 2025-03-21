import React, { useState } from "react";
import AnimationRevealPage from "../../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { css } from "styled-components/macro";
import { useGetAllSetsQuery } from "../../Redux/Api/SetApiSice.js";
import Loading from "../testimonials/Loading.js";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg shadow-md`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg shadow`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
const defualtImage =
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80";
export default ({ headingText = "" }) => {
  const { data, isLoading } = useGetAllSetsQuery();
  const [visible, setVisible] = useState(7);

  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  if (isLoading) return <Loading />;

  const sets = data?.sets;
  // console.log(sets, data);

  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {sets?.length < 1 ? (
              <div>No set for now</div>
            ) : (
              sets.slice(0, visible).map((post, index) => (
                <PostContainer key={index}>
                  <Post className="group" as="a" href={`/nosa-sets/${post._id}`}>
                    <Image imageSrc={post?.coverImage ? post?.coverImage : defualtImage} />
                    <Info>
                      <CreationDate>{`Set ${post.name}`}</CreationDate>
                      <Title>{`NOSA Set ${post.name}`}</Title>
                      {post.members?.length > 0 && (
                        <Description>{`Members: ${post.members.length}`}</Description>
                      )}
                    </Info>
                  </Post>
                </PostContainer>
              ))
            )}
          </Posts>
          {visible < sets.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};
