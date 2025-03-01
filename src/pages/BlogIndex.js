import React, { useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "../components/misc/Headings";
import { PrimaryButton } from "../components/misc/Buttons";
import Blogs from "../components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import { useGetAllBlogsQuery, useGetAllNewsQuery } from "../Redux/Api/BlogApiSlice.js";
import Loading from "../components/testimonials/Loading.js";
const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({ headingText = "News Update" }) => {
  const { data, isLoading } = useGetAllNewsQuery();
  const { data: blog, isLoading: gettingBlogs } = useGetAllBlogsQuery({});
  const blogs = blog?.data;
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  if (isLoading) <Loading />;
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {data?.data?.length < 1 ? (
              <div tw="font-semibold py-10">No any news for now</div>
            ) : (
              data?.data?.slice(0, visible).map((post, index) => (
                <PostContainer key={index}>
                  <Post className="group" as="a" href={`/news/${post?._id}`}>
                    <Image imageSrc={post?.image} />
                    <Info>
                      <Category>{post?.category}</Category>
                      <CreationDate>{post?.date}</CreationDate>
                      <Title>{post?.title}</Title>
                      {post.featured && post.description && (
                        <Description>{post.description}</Description>
                      )}
                    </Info>
                  </Post>
                </PostContainer>
              ))
            )}
          </Posts>
          {visible < data?.data?.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>

      <Blogs
        heading="Read Our Blog Posts"
        subheading="Blog Posts"
        description="Some amazing blogs written by some of our members"
        blogs={blogs}
        isLoading={gettingBlogs}
      />
    </AnimationRevealPage>
  );
};
