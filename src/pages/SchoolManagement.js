import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";

import Features from "../components/features/ThreeColSimple.js";

import SubLeaderProfile from "../components/cards/SubLeaderProfile.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Features
        // subheading={<Subheading>History of NOSA</Subheading>}
        heading="Nakam School Management"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        linkText=""
      />
      <SubLeaderProfile />
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
