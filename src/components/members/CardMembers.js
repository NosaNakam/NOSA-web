import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { DefaultImage } from "../../images/ImageIndex.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
`;

const TabContent = tw(motion.div)`mt-0 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-5 mb-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.div)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;

const NoMembersMessage = tw.div`text-center text-gray-600 my-10 text-lg font-bold`;

const defaultImage =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";

export default function CardMembers({ members }) {
  const [activeTab, setActiveTab] = useState("All Members");

  // Filter data
  const allMembers = members || [];
  const setExcos = allMembers.filter(
    (member) => member.position !== "Member" && member.position !== "Other"
  );

  const tabs = {
    "All Members": allMembers,
    "Set Excos": setExcos,
  };

  const tabsKeys = Object.keys(tabs);

  // If there are no members, display a message
  if (allMembers.length === 0) {
    return (
      <Container>
        <NoMembersMessage>No members in the set currently.</NoMembersMessage>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderRow>
        {/* Conditionally render the TabsControl only if there are members */}
        {allMembers.length > 0 && (
          <TabsControl>
            {tabsKeys.map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        )}
      </HeaderRow>

      {tabsKeys.map((tabKey, index) => (
        <TabContent
          key={index}
          variants={{
            current: { opacity: 1, scale: 1, display: "flex" },
            hidden: { opacity: 0, scale: 0.8, display: "none" },
          }}
          transition={{ duration: 0.4 }}
          initial={activeTab === tabKey ? "current" : "hidden"}
          animate={activeTab === tabKey ? "current" : "hidden"}>
          {tabs[tabKey].length > 0 ? (
            tabs[tabKey].map((member, index) => (
              <CardContainer key={index}>
                {/* Wrap the Card in a Link to navigate to the user's detail page */}
                <Link to={`/user/${member._id}`} style={{ textDecoration: "none" }}>
                  <Card>
                    <img
                      src={member?.image ? member?.image : DefaultImage}
                      alt={member.fullName}
                      style={{ objectFit: "cover", height: "12rem", width: "100%" }}
                    />
                    <CardText>
                      <CardTitle>{member.fullName}</CardTitle>
                      <CardContent>{member.position}</CardContent>
                    </CardText>
                  </Card>
                </Link>
              </CardContainer>
            ))
          ) : (
            <NoMembersMessage>No members in this category.</NoMembersMessage>
          )}
        </TabContent>
      ))}
    </Container>
  );
}
