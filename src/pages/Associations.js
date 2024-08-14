import React from "react";
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

import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomerLoveIconImage from "../images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        // subheading={<Subheading>FCS Choir</Subheading>}
        heading="FCS Choir"
        buttonRounded={false}
        description="F.C.S. stands for Fellowship of Christian
students. The meeting Which hold on
Wednesday evening is compulsory for all
students in the school. It provides a good
forum for the Spiritual growth of the
students. It provides opportunity for
students to have a personal relationship
with Jesus Christ and its normally headed

by a Patron. Activities include Bible
Studies, Prayer meetings, drama, talks, etc."
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />

      <MainFeature1
        // subheading={<Subheading>Our Vision</Subheading>}
        heading="BB & GB Choir"
        buttonRounded={false}
        description="The Boys' Brigade (BB) and Girls' Brigade (GB) are extracurricular activities for students that include activities like parades, physical exercise, sword drills, Bible studies, and games. These sessions are held on Tuesdays from 4:00 PM to 5:00 PM and are mandatory for junior students but optional for senior students. The Boys' Brigade aims to promote the Christian faith among boys and instill values such as obedience, reverence, discipline, self-respect, and other traits that contribute to Christian manliness. The Girls' Brigade also emphasizes respect and obedience. Both organizations have significantly influenced many individuals, particularly in the areas of security and military service, as many personnel received early training through these brigades, impacting their future careers."
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />

      <MainFeature1
        // subheading={<Subheading>Our Mission</Subheading>}
        heading="CLUBS AND GAMES"
        buttonRounded={true}
        description="The prominent clubs in the school are the
JETS and the Current Affairs and debating

Society.

JETS is dominated by the science students
where Special extra lessons, Practicals and
Innovation activities are held while the
Debating/ Current Affairs is dominated by

the Art Students.

All club meetings hold on thursdays by
4:00pm-5:00pm while Games take place on
Mondays for Junior and Fridays for senior

students.

The games include footballing, Basket ball,
Table tennis, Athletics, Badminton etc."
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={true}
      />
      {/* <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="Press Club"
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      /> */}

      {/* <TeamCardGrid subheading={<Subheading>NOSA Leadership</Subheading>} /> */}
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
