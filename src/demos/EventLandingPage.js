import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "../components/features/VerticalWithAlternateImageAndText.js";
import Blog from "../components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "../components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "../components/forms/SimpleContactUs.js";
import Footer from "../components/footers/SimpleFiveColumn.js";

export default () => (
  <AnimationRevealPage>
    <Hero
      heading1={"Past and Upcoming NOSA Events"}
      heading2={"anywhere in the World"}
      buttonAction={"Search Events"}
      centerButton={true}
    />
    <Features />
    {/* upcoming events implace of blog */}
    <Blog />
    <Testimonial />
    {/* <ContactUsForm /> */}
    {/* <Footer /> */}
  </AnimationRevealPage>
);
