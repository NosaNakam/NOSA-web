import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "../components/features/VerticalWithAlternateImageAndText.js";
// import Blog from "../components/blogs/ThreeColSimpleWithImage.js";

export default () => (
  <AnimationRevealPage>
    <Hero
      heading1={"Past and Upcoming NOSA Events"}
      heading2={"anywhere in the World"}
      buttonAction={"Search Events"}
      centerButton={true}
    />
    <Features />
  </AnimationRevealPage>
);
