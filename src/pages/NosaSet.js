import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Nav from "../components/headers/light";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
const links = [
  { name: "Posts", link: "./posts" }, // Relative paths
  { name: "Members", link: "./members" },
  { name: "Discussion", link: "./discussion" },
  { name: "Events", link: "./events" },
  { name: "Media", link: "./media" },
];

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80";

const Container = tw.div`w-[90%] mx-auto`;
const TopContainer = tw.div`bg-[#f9f9f9] pt-[1.rem] shadow-md`;
const GroupHero = tw.div`w-full rounded-lg h-[60vh] pt-5`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded-lg bg-cover bg-center h-full`,
]);
const GroupName = tw.div`text-4xl font-bold uppercase`;
const FlexContainer = tw.div`flex justify-between items-center border-b-[1px] border-gray-400 pb-5`;
const ControlButton = tw.button`py-2 px-4 text-white bg-primary-500 rounded-md`;
const SmallText = tw.div`text-base`;
const NavFlex = tw.div`flex justify-between items-center`;
const StyledNavLink = styled(NavLink)`
  ${tw`text-gray-600 py-5 px-5`}
  &.active {
    ${tw`text-primary-500 font-bold border-b-4 border-primary-500`}
  }
`;
const GroupNav = tw.div`w-1/2 flex gap-5`;
const Contain = tw.div`w-[90%] mx-auto`;

const NosaSet = () => {
  return (
    // <AnimationRevealPage>
    <div style={{ background: "white" }}>
      <TopContainer>
        <Nav />
        <Container>
          <GroupHero>
            <Image imageSrc={image} />
          </GroupHero>
          <GroupName>NOSA SET 2013</GroupName>
          <FlexContainer>
            <SmallText>199 Members</SmallText>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <ControlButton>Invite</ControlButton>
              <ControlButton>Share</ControlButton>
            </div>
          </FlexContainer>
          <NavFlex>
            <GroupNav>
              {links.map((link) => (
                <StyledNavLink
                  key={link.link}
                  to={link.link}
                  className={({ isActive }) => (isActive ? "active" : "")}>
                  {link.name}
                </StyledNavLink>
              ))}
            </GroupNav>
            <ControlButton>
              <IoMdSearch fontSize={25} />
            </ControlButton>
          </NavFlex>
        </Container>
      </TopContainer>
      <Contain>
        <Outlet />
      </Contain>
    </div>
    // </AnimationRevealPage>
  );
};

export default NosaSet;
