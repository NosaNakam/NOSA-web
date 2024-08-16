import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "../components/misc/Headings.js";
import { JetAchievements } from "../Redux/Api/LocalData.js";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10 mb-8`}
  }
`;
const FlexUl = tw.div`flex gap-3 mb-3`;

export default ({ headingText = "Some of the School's Achievements" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <h1>
              (A) Achievements by the JETS (Junior Engineers, Technicians &amp; Scientists) club,
              compiled by Mr Damwesh Sila Daniel
            </h1>

            <div>
              {JetAchievements.map((achievement, i) => {
                return (
                  <FlexUl key={i} className="flex gap-2">
                    <div>{i + 1})</div>
                    <div>{achievement}</div>
                  </FlexUl>
                );
              })}
            </div>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
