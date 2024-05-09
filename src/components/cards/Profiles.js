import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";
import { Gimba } from "../../images/ImageIndex";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs shadow-md hover:shadow-lg`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-[50vh] rounded`,
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold lg:text-xl text-center`;
const Link = tw.a`mt-2 flex justify-center text-sm text-primary-500 font-bold pb-5 text-xl`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc: Gimba,
      responsibleFor: "First Principal",
      name: "Engr. GIMBA, Haruna Ladan",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      responsibleFor: "Principal 1880-1990",
      name: "Derek Joy",
      url: "https://reddit.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      responsibleFor: "Founder",
      name: "Mary Webstar",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      responsibleFor: "First Principal",
      name: "J.Y.Lot",
      url: "https://timerse.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      responsibleFor: "Principal 1880-1990",
      name: "Derek Joy",
      url: "https://reddit.com",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      responsibleFor: "Founder",
      name: "Mary Webstar",
      url: "https://timerse.com",
    },
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>
            Meet the Brain Behind <br />
            the Great Institution
          </HeadingTitle>
          <HeadingDescription>
            Some amazing blog posts that are written by even more amazing people.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                {/* <Category>{post.category}</Category> */}
                <Title>{post.name}</Title>
                <Link>({post.responsibleFor})</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
