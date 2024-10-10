import React, { Fragment } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "../components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "../components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";
import { NosaAnthem } from "../Redux/Api/LocalData";
import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomerLoveIconImage from "../images/simple-icon.svg";
import { NosaExcos } from "../Redux/Api/LocalData.js";
import { SectionHeading } from "../components/misc/Headings";
const Subheading = tw.span`uppercase tracking-wider text-sm`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Our Core Values</Subheading>}
        heading="We are Nakam Old Students Association"
        buttonRounded={false}
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <Features
        subheading={<Subheading>History of NOSA</Subheading>}
        heading="Our Journey so Far"
        description="Nakam Old Students Association NOSA started in 1978 upon the completion of study for the first set of students of Nakam. 
It is the association of old students of Nakam Memorial Secondary school Panyam, who come together to help in the advancement of education in the region through networking with each other to maintain or advance the welfare, educational standards, infrastructure and general development of their Alma mater. 
It consist of a large number of members spread across the globe, moulded according to strong Christian principles, values & beliefs to make impact in their various endeavors. "
        linkText=""
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />

      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={true}
      />
      <div style={{ margin: "5rem 0" }}>
        <SectionHeading>The NOSA Anthem</SectionHeading>
        <div style={{ padding: "1rem", textAlign: "center", fontSize: "1.2rem" }}>
          <div>WHAT A FRIEND WE HAVE IN JESUS </div>
          {NosaAnthem.map((stanza, index) => {
            return (
              <Fragment key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    margin: "1rem 0",
                  }}>
                  <div>{stanza.stanza}</div>
                  <div>
                    {stanza.lines.map((line, I) => (
                      <p key={I}>{line}</p>
                    ))}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>

      <TeamCardGrid NosaExcos={NosaExcos} subheading={<Subheading>NOSA Leadership</Subheading>} />
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
