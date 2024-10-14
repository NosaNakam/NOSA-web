import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { FaTwitter, FaLinkedin, FaGithub, FaComments } from "react-icons/fa";

const Container = tw.div`w-full max-w-3xl mx-auto flex flex-col bg-white p-6 rounded-md shadow-lg`;
const CoverPhoto = styled.div`
  ${(props) => `
    background-image: url("${props.coverSrc}");
  `}
  ${tw`w-full h-40 bg-cover bg-center rounded-md`}
`;
const ProfileImage = styled.div`
  ${(props) => `
    background-image: url("${props.imageSrc}");
  `}
  ${tw`w-32 h-32 bg-cover bg-center border-4 border-white rounded-full mx-auto -mt-20`}
`;
const UserName = tw.h2`text-3xl font-bold text-center mt-2`;
const UserTitle = tw.p`text-lg text-center text-gray-600 mb-4`;
const InfoSection = tw.div`mt-4 bg-gray-100 p-4 rounded-md`;
const InfoTitle = tw.h3`text-lg font-semibold mb-2`;
const InfoText = tw.p`text-gray-700`;
const SocialMediaLinks = tw.div`flex justify-center mt-2 space-x-4`;
const SocialMediaLink = tw.a`text-gray-400 hover:text-blue-600 transition duration-300`;
const ChatButton = tw.button`mt-6 bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-200`;

const UserProfile = () => {
  // Hardcoded user details
  const user = {
    firstName: "John",
    surname: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    image: "https://via.placeholder.com/120",
    cover: "https://via.placeholder.com/800x200", // Example cover photo
    title: "Software Engineer",
    socialMedia: [
      { platform: "twitter", url: "http://twitter.com/johndoe" },
      { platform: "linkedin", url: "http://linkedin.com/in/johndoe" },
      { platform: "facebook", url: "http://facebook.com/johndoe" },
    ],
    educationalBackground: {
      primaryEducation: "Primary School A",
      secondaryEducation: ["High School B"],
      undergraduate: ["Bachelor of Science in Computer Science"],
      postGraduate: ["Master of Science in Software Engineering"],
      professionalTrainings: ["Certification in Web Development"],
    },
    portfolio: "http://johndoedesign.com",
    currentJob: "Senior Developer",
    employer: "Tech Company",
    yearOfGraduation: "2020",
    role: "member",
  };

  return (
    <Container>
      {/* Cover Photo */}
      <CoverPhoto coverSrc={user.cover} />

      {/* Profile Image */}
      <ProfileImage imageSrc={user.image || "https://via.placeholder.com/120"} />
      <UserName>{`${user.firstName} ${user.surname}`}</UserName>
      <UserTitle>{user.title}</UserTitle>

      {/* Contact Information */}
      <InfoSection>
        <InfoTitle>Contact Information</InfoTitle>
        <InfoText>Email: {user.email}</InfoText>
        <InfoText>Phone: {user.phone || "N/A"}</InfoText>
      </InfoSection>

      {/* Social Media Links */}
      <InfoSection>
        <InfoTitle>Social Media</InfoTitle>
        <SocialMediaLinks>
          {user.socialMedia.map((social) => {
            switch (social.platform) {
              case "twitter":
                return (
                  <SocialMediaLink
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </SocialMediaLink>
                );
              case "linkedin":
                return (
                  <SocialMediaLink
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </SocialMediaLink>
                );
              case "facebook":
                return (
                  <SocialMediaLink
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </SocialMediaLink>
                );
              default:
                return null;
            }
          })}
        </SocialMediaLinks>
      </InfoSection>

      {/* Education Information */}
      <InfoSection>
        <InfoTitle>Education</InfoTitle>
        {user.educationalBackground && (
          <div>
            <InfoText>Primary: {user.educationalBackground.primaryEducation || "N/A"}</InfoText>
            <InfoText>
              Secondary: {user.educationalBackground.secondaryEducation.join(", ") || "N/A"}
            </InfoText>
            <InfoText>
              Undergraduate: {user.educationalBackground.undergraduate.join(", ") || "N/A"}
            </InfoText>
            <InfoText>
              Postgraduate: {user.educationalBackground.postGraduate.join(", ") || "N/A"}
            </InfoText>
            <InfoText>
              Professional Trainings:{" "}
              {user.educationalBackground.professionalTrainings.join(", ") || "N/A"}
            </InfoText>
          </div>
        )}
      </InfoSection>

      {/* Portfolio Section */}
      {user.portfolio && (
        <InfoSection>
          <InfoTitle>Portfolio</InfoTitle>
          <InfoText>
            <a
              href={user.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500">
              {user.portfolio}
            </a>
          </InfoText>
        </InfoSection>
      )}

      {/* Chat Initiation Button */}
      <ChatButton>
        <FaComments className="mr-2" />
        Start Chat
      </ChatButton>
    </Container>
  );
};

export default UserProfile;
