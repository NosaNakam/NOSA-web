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
import { NosaExcos } from "../Redux/Api/LocalData.js";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Our Core Values</Subheading>}
        heading="We are Nakam Old Students Association"
        buttonRounded={false}
        primaryButtonText="See Portfolio"
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
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />

      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="We aim to disrupt the design space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={true}
      />
      <Features
        // subheading={<Subheading>Our Values</Subheading>}
        heading="The NOSA Anthem."
        description={`
        WHAT A FRIEND WE HAVE IN JESUS\n
1. What a Friend we have in Jesus,\n
All our sins and griefs to bear!\n
What a privilege to carry\n
Everything to God in prayer!\n
O what peace we often forfeit,\n
O what needless pain we bear,\n
All because we do not carry\n
Everything to God in prayer!\n\n
2. Have we trials and temptations?\n
Is there trouble anywhere?\n
We should never be discouraged,\n
Take it to the Lord in prayer.\n
Can we find a friend so faithful\n
Who will all our sorrows share?\n
Jesus knows our every weakness,\n
Take it to the Lord in prayer.\n\n
3. Are we weak and heavy-laden,\n
Cumbered with a load of care?\n
Precious Savior, still our refuge\n
Take it to the Lord in prayer;\n
Do thy friends despise, forsake thee?\n
Take it to the Lord in prayer;\n
In His arms He'll take and shield thee,\n
Thou wilt find a solace there.`}
      />

      <TeamCardGrid NosaExcos={NosaExcos} subheading={<Subheading>NOSA Leadership</Subheading>} />
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
