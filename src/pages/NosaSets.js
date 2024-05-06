import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/FullWidthWithImage.js";
import Features from "../components/features/ThreeColSimple.js";
import MainFeature from "../components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "../components/cards/ThreeColSlider.js";
import TrendingCard from "../components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "../components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "../components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "../components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "../components/forms/SimpleSubscribeNewsletter.js";
import Footer from "../components/footers/MiniCenteredFooter.js";
// import NosaSetComponent from "../components/blogs/NosaSetsComponent.js";
import NosaSetsComponent from "../components/blogs/NosaSetsComponent.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <NosaSetsComponent />
    {/* <Features />
    <SliderCard />
    <TrendingCard />
    <MainFeature />
    <Blog />
    <Testimonial textOnLeft={true} />
    <FAQ />
    <SubscribeNewsLetterForm />
    <Footer /> */}
  </AnimationRevealPage>
);
