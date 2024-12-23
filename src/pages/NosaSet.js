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
const TopContainer = tw.div`bg-[#f9f9f9] pt-[1rem] shadow-md`;
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
  const { user } = useSelector((state) => state.AppSlice);
  const { setId } = useParams();
  const { data, isLoading } = useGetSingleSetQuery(setId);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #ccc",
              borderTop: "5px solid #4f46e5",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}></div>
          <h1 style={{ marginTop: "1rem", color: "#4f46e5", fontSize: "1.5rem" }}>Loading...</h1>
        </div>
        <style>
          {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </div>
    );
  }

  return (
    <div style={{ background: "white" }}>
      {/* Set Header */}
      <TopContainer>
        <Nav />
        <Container>
          <GroupHero>
            <Image imageSrc={image} />
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
