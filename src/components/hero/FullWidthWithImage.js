import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase,
  StyledDropdownLinks,
  DropdownLink,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url("https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75");
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
`;

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About Nosa</NavLink>
      <NavLink href="#">
        Nakam
        <StyledDropdownLinks>
          <DropdownLink href="/nakam-history">History of Nakam</DropdownLink>
          {/* <DropdownLink href="founding-fathers">Founding Fathers</DropdownLink>
          <DropdownLink href="school-management">School Management</DropdownLink> */}
          <DropdownLink href="school-associations">School Associations</DropdownLink>
          <DropdownLink href="school-achievement">School Achievements</DropdownLink>
        </StyledDropdownLinks>
      </NavLink>
      <NavLink href="#">
        Membership
        <StyledDropdownLinks>
          <DropdownLink href="/nosa-sets">Set Membership</DropdownLink>
          <DropdownLink href="whom-we-are-proud-of">Whom we are Proud</DropdownLink>
        </StyledDropdownLinks>
      </NavLink>
      <NavLink href="#">
        Blog
        <StyledDropdownLinks>
          <DropdownLink href="/events">Events </DropdownLink>
          <DropdownLink href="/news">News Update</DropdownLink>
          <DropdownLink href="/gallery">Gallery</DropdownLink>
          {/* <DropdownLink href="/showcase">Showcase</DropdownLink> */}
        </StyledDropdownLinks>
      </NavLink>
    </NavLinks>,
  ],
  heading = (
    <>
      Find Set Members
      <wbr />
      <br />
      <span tw="text-primary-500">and unlock past memories</span>
    </>
  ),
  description = "We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.",
  primaryActionUrl = "/sign-up",
  primaryActionText = "Be a Member",
  secondaryActionUrl = "#",
  secondaryActionText = "Pay Dues",
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};
