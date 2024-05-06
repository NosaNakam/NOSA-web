import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "../components/features/VerticalWithAlternateImageAndText.js";
import Blog from "../components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "../components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "../components/forms/SimpleContactUs.js";
import Footer from "../components/footers/SimpleFiveColumn.js";
import Profiles from "../components/cards/Profiles.js";

export default () => (
  <AnimationRevealPage>
    <Hero heading1={"Our Pioneers and"} heading2={"Founding Fathers"} centerButton={false} />
    {/* <Features /> */}
    {/* upcoming events implace of blog */}
    <Profiles />
    {/* <Testimonial /> */}
    {/* <ContactUsForm /> */}
    {/* <Footer /> */}
  </AnimationRevealPage>
);
