import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";

import Hero from "../components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "../components/features/ThreeColWithSideImage.js";
import MainFeature from "../components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "../components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Pricing from "../components/pricing/TwoPlansWithDurationSwitcher.js";
import Blog from "../components/blogs/GridWithFeaturedPost.js";
import Testimonial from "../components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "../components/faqs/SingleCol.js";
import GetStarted from "../components/cta/GetStartedLight.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import Header from "../components/headers/light.js";
const HighlightedText = tw.span`text-primary-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      {/* <FeatureStats /> */}
      {/* <Features
        heading={
          <>
            Amazing <HighlightedText>Features</HighlightedText>
          </>
        }
      />
      <MainFeature
        heading={
          <>
            Cloud built by and for <HighlightedText>Professionals</HighlightedText>
          </>
        }
      />
      <Testimonial
        heading={
          <>
            Our Clients <HighlightedText>Love Us</HighlightedText>
          </>
        }
      />
      <Pricing
        heading={
          <>
            Flexible <HighlightedText>Plans</HighlightedText>
          </>
        }
      />
      <FAQ
        heading={
          <>
            Any <HighlightedText>Questions ?</HighlightedText>
          </>
        }
      /> */}
      <Blog
        subheading=""
        heading={
          <>
            Our Gallery <HighlightedText>Our Memories</HighlightedText>
          </>
        }
      />
      {/* <GetStarted /> */}
      {/* <Footer /> */}
    </AnimationRevealPage>
  );
};
