import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "../misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
// import { useGetAllBlogsQuery } from "../../Redux/Api/BlogApiSlice";
import Loading from "../testimonials/Loading";
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Btn = styled(PrimaryButtonBase)`
  ${tw`inline-block mt-4 text-sm font-semibold cursor-pointer`}
`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;
const imageSrc =
  "https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
export default ({
  subheading = "",
  heading = (
    <>
      Check our <span tw="text-primary-500">Blogs</span>
    </>
  ),
  description = "Some amazing blog posts that are written by even more amazing people.",
  blogs,
  isLoading,
}) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container>
      {blogs.length >= 1 && (
        <Content>
          <HeadingInfoContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <HeadingTitle>{heading}</HeadingTitle>
            <HeadingDescription>{description}</HeadingDescription>
          </HeadingInfoContainer>
          <ThreeColumn>
            {blogs.map((post) => (
              <Column key={post._id}>
                <Card>
                  <Image imageSrc={post.image || imageSrc} />
                  <Details>
                    <MetaContainer>
                      <Meta>
                        <UserIcon />
                        <div>{post?.user?.fullName}</div>
                      </Meta>
                      <Meta>
                        <TagIcon />
                        <div style={{ textTransform: "capitalize" }}>{post.category}</div>
                      </Meta>
                    </MetaContainer>
                    <Title>{post.title}</Title>
                    <Description>{post.description}</Description>
                    <Btn>
                      <Link to={`/post/${post?._id}`}>Read Post</Link>
                    </Btn>
                  </Details>
                </Card>
              </Column>
            ))}
          </ThreeColumn>
        </Content>
      )}
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
