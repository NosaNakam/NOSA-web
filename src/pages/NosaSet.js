import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Nav from "../components/headers/light";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import TabCardGrid from "../components/cards/TabCardGrid";
import SubLeaderProfile from "../components/cards/SubLeaderProfile";
import { useGetSingleSetQuery } from "../Redux/Api/SetApiSice";
import { useSelector } from "react-redux";
import Loading from "../components/testimonials/Loading";
const links = [
  { name: "Posts", link: "./posts" }, // Relative paths
  { name: "Members", link: "./members" },
  { name: "Discussion", link: "./discussion" },
  { name: "Events", link: "./events" },
  { name: "Media", link: "./media" },
];

const image =
  "https://images.unsplash.com/photo-1736325263332-f0bf3d863e3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const Container = tw.div`w-[90%] mx-auto`;
const TopContainer = tw.div`bg-[#f9f9f9] pt-[1rem] shadow-md`;
const GroupHero = tw.div`w-full rounded-lg h-[30vh] lg:h-[50vh] pt-5`;
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
  const { setId } = useParams();
  const { data, isLoading } = useGetSingleSetQuery(setId);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ background: "white" }}>
      {/* Set Header */}
      <TopContainer>
        <Nav />
        <Container>
          <GroupHero>
            <Image imageSrc={data?.set?.banner || image} />
          </GroupHero>
          <GroupName>NOSA SET {data?.set?.name}</GroupName>
          <FlexContainer>
            <SmallText>{data?.set?.members?.length} Members</SmallText>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <ControlButton>Pay Set Dues</ControlButton>
              <ControlButton>Share</ControlButton>
            </div>
          </FlexContainer>
          <NavFlex>
            <GroupNav>
              {/* Map through links with access control */}
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

      {/* Set Content */}
      <Contain>
        <Outlet />
      </Contain>
    </div>
  );
};

export default NosaSet;
