import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
  DropdownLink,
  StyledDropdownLinks,
} from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../Redux/Api/AuthApiSplice.js";
import { logoutUser } from "../../Redux/Services/AppSlice.js";
import { HeroImage, Graduate } from "../../images/ImageIndex.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const { isLogin } = useSelector((state) => state.AppSlice);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(logoutUser());
      await logout().unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navLinks = [
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
          {/* <DropdownLink href="whom-we-are-proud-of">Whom we are Proud</DropdownLink> */}
        </StyledDropdownLinks>
      </NavLink>
      <NavLink href="#">
        Blog
        <StyledDropdownLinks>
          <DropdownLink href="/news-and-blogs">News and Blogs</DropdownLink>
          <DropdownLink href="/events">Events </DropdownLink>
          <DropdownLink href="/gallery">Gallery</DropdownLink>
          {/* <DropdownLink href="/showcase">Showcase</DropdownLink> */}
        </StyledDropdownLinks>
      </NavLink>
      <NavLink href="/contact">Contact Us</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      {isLogin ? (
        <PrimaryLink onClick={handleLogout}>Log out</PrimaryLink>
      ) : (
        <PrimaryLink href="/sign-up">Be a Member</PrimaryLink>
      )}
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>
              Stay connected with your alma mater and fellow alumni to unlock memories
            </Notification>
            <Heading>
              <span>Nakam Old Students Association</span>
              <br />
              <SlantedBackground>NOSA</SlantedBackground>
            </Heading>
            <PrimaryAction>
              <Link to={"/about"}>Take Tour to Know Us</Link>
            </PrimaryAction>
          </LeftColumn>
          <RightColumn>
            {/* <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            /> */}
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
