import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Profiles from "../components/cards/Profiles.js";

export default () => (
  <AnimationRevealPage>
    <Header />

    <Profiles />
  </AnimationRevealPage>
);
