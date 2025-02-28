import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/FullWidthWithImage.js";
import NosaSetsComponent from "../components/blogs/NosaSetsComponent.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <NosaSetsComponent />
    </AnimationRevealPage>
  );
};
