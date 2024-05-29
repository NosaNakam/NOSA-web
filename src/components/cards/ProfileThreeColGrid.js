import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings";
import { SectionDescription } from "../misc/Typography";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "../../images/github-icon.svg";
import {
  Auditor,
  Buba,
  Canaan,
  DefaultImage,
  Michael,
  Plangji,
  President,
  VicePresident,
} from "../../images/ImageIndex.js";
import ProfileDetailModel from "../features/ProfileDetailModel.js";
import { useDispatch, useSelector } from "react-redux";
import { addProfileDetailsModel, openProfileModel } from "../../Redux/Services/AppSlice.js";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center cursor-pointer`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-[18rem] h-[18rem] bg-contain bg-center bg-cover rounded-full `}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({
  NosaExcos,
  heading = "Meet Our Noble Leaders.",
  subheading = "Our Team",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  const { isModelOpen } = useSelector((store) => store.AppSlice);

  const dispatch = useDispatch();
  const handleClick = (post) => {
    dispatch(openProfileModel());
    dispatch(addProfileDetailsModel(post));
  };
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {NosaExcos.map((card, index) => (
            <Card key={index} onClick={() => handleClick(card)}>
              <CardImage imageSrc={card?.image || DefaultImage} />
              {isModelOpen && <ProfileDetailModel detail={card} />}
              <CardContent>
                <span className="position">{card?.position}</span>
                <span className="name">
                  {card?.title} {card?.name}
                </span>
                <CardLinks>
                  {card?.socialMedia?.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
