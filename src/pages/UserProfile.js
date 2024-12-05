import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Header from "../components/headers/light";
const Container = styled.div`
  ${tw`w-[90%] p-4 mx-auto mt-5 bg-white rounded-md shadow`}
`;
const HeaderContainer = tw.div`mb-10 mt-5`;
const FlexContainer = tw.div`flex flex-col lg:flex-row gap-5`;
const FlexLeft = tw.div`w-full lg:w-[20%] flex-shrink-0`;
const FlexRight = tw.div`w-full lg:w-[80%]`;
const NameContainer = tw.div`pb-5`;
const Name = tw.h1`font-bold text-2xl lg:text-4xl text-gray-900`;
const Title = tw.h2`font-semibold text-xl lg:text-2xl capitalize text-gray-600 mt-2`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-[12rem] h-[12rem] bg-cover bg-center rounded shadow-md`}
`;

const SocialLinks = tw.div`flex items-center gap-4 mt-4`;
const Link = styled.a`
  ${tw`text-xl text-gray-600 hover:text-primary-500 transition duration-300`}
`;

const Bio = tw.p`text-gray-700 mt-3`;
const SectionTitle = tw.h3`font-semibold text-lg mt-8 text-gray-800`;
const Highlight = tw.span`text-primary-500 font-bold`;

const UserProfile = () => {
  const user = {
    name: "John Doe",
    title: "Software Engineer",
    image: "https://via.placeholder.com/150",
    currentSetPost: "President",
    prefectPost: "Science Prefect",
    currentJob: "Senior Developer",
    employer: "Tech Company",
    socialMedia: {
      twitter: { url: "http://twitter.com/johndoe", icon: FaTwitter },
      linkedin: { url: "http://linkedin.com/in/johndoe", icon: FaLinkedin },
      facebook: { url: "http://facebook.com/johndoe", icon: FaFacebook },
    },
    portfolio: ["http://johndoeportfolio.com"],
  };

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <FlexContainer>
          {/* Profile Image */}
          <FlexLeft>
            <CardImage imageSrc={user.image} />
          </FlexLeft>

          {/* Profile Details */}
          <FlexRight>
            <NameContainer>
              <Name>{user.name}</Name>
              <div>(Koko Master)</div>
              <Title>{user.title}</Title>

              <SocialLinks>
                {Object.values(user.socialMedia).map((social, index) => (
                  <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon />
                  </Link>
                ))}
              </SocialLinks>
            </NameContainer>

            {/* Current Job */}
            <Bio>
              Currently working as <Highlight>{user.currentJob}</Highlight> with{" "}
              <Highlight>{user.employer}</Highlight>.
            </Bio>

            {/* Current Set Post */}
            <SectionTitle>Current Set Post</SectionTitle>
            <Bio>{user.currentSetPost}</Bio>

            {/* Prefect Post */}
            <SectionTitle>Prefect Post Held</SectionTitle>
            <Bio>{user.prefectPost}</Bio>

            {/* Portfolio */}
            <SectionTitle>Portfolio</SectionTitle>
            {user.portfolio.map((site, index) => (
              <Bio key={index}>
                <a
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline">
                  {site}
                </a>
              </Bio>
            ))}
          </FlexRight>
        </FlexContainer>
      </Container>
    </>
  );
};

export default UserProfile;
