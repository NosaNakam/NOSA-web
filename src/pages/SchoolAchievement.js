import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "../components/misc/Layouts.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import { SectionHeading } from "../components/misc/Headings.js";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 mb-10`;
const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`mt-2 leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

export default ({ headingText = "Brief History of Nakam" }) => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Text>
            <p>
              It was in January, 1972 that the decision to open a Secondary School to commemorate
              the good work done by a missionary lady Miss E. M. R. Webster (1919 - 1959), nicknamed
              <strong> Nakam</strong>; was taken by the General Congress of COCIN District Church
              Council Panyam, which is now Provincial Church Council (PCC) Panyam, consisting of 13
              RCCS Panyam, Pushit, Mangu, Mangun, Ampang West, Jing, Kombun, Bwai, Kerang, Gindiri,
              Halle, Jannaret and Chip.
            </p>
            <p>
              The school was officially open on October 25th, 1973 with 28 boys and 8 girls
              totalling 36 students.
            </p>
            <p>
              Today, over 3000 students have passed through the school over the past 50 years since
              establishment.
            </p>
            <p>
              Besides immortalizing Miss E. M. R. Webster (Nakam), the main objective of opening the
              school was to cater for both the spiritual and educational need of children and the
              people in these areas.
            </p>
            <p>
              This objective informed the choice of the school&#39;s motto,
              <strong> &#39;walk in the Light&#39;</strong> .
            </p>
          </Text>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};
