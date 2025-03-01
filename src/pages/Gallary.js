import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";

import Hero from "../components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "../components/features/ThreeColWithSideImage.js";
import MainFeature from "../components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "../components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "../components/pricing/TwoPlansWithDurationSwitcher.js";
// import Blog from "../components/blogs/GridWithFeaturedPost.js";

import Header from "../components/headers/light.js";
import GalleryPage from "../components/blogs/GridWithFeaturedPost.js";
const HighlightedText = tw.span`text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />

      <GalleryPage />
    </AnimationRevealPage>
  );
};
