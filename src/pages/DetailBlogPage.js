import React from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-3.svg";
import Loading from "../components/testimonials/Loading";
import { useGetDetailPostQuery } from "../Redux/Api/BlogApiSlice";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Header from "../components/headers/light";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto`;
const BlogContainer = tw.div`max-w-3xl mx-auto`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-96 rounded-lg`,
]);

const MetaContainer = tw.div`flex items-center justify-between mt-4 text-gray-600`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h1`mt-6 text-3xl font-bold text-gray-900 leading-tight`;
const Description = tw.p`mt-4 text-lg text-gray-700 leading-relaxed`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

const BlogDetailPage = () => {
  const { postId } = useParams();
  const { data, isLoading } = useGetDetailPostQuery({ id: postId });
  console.log(postId, data);
  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <Header />
          <BlogContainer>
            <Image imageSrc={data.image || "https://via.placeholder.com/800x400"} />
            <MetaContainer>
              <Meta>
                <UserIcon />
                <span>{data?.user?.fullName}</span>
              </Meta>
              <Meta>
                <TagIcon />
                <span style={{ textTransform: "capitalize" }}>{data.category}</span>
              </Meta>
            </MetaContainer>
            <Title>{data.title}</Title>
            <Description>{data.content}</Description>
          </BlogContainer>
        </Content>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
    </AnimationRevealPage>
  );
};

export default BlogDetailPage;
