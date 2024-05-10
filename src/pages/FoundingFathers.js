import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Hero from "../components/hero/BackgroundAsImageWithCenteredContent.js";
import Features from "../components/features/VerticalWithAlternateImageAndText.js";
import Blog from "../components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "../components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "../components/forms/SimpleContactUs.js";
import Footer from "../components/footers/SimpleFiveColumn.js";
import Profiles from "../components/cards/Profiles.js";
const blogPosts = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "First Principal",
    name: "Engr. GIMBA, Haruna Ladan",
    url: "https://timerse.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Principal 1880-1990",
    name: "Derek Joy",
    url: "https://reddit.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Founder",
    name: "Mary Webstar",
    url: "https://timerse.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "First Principal",
    name: "J.Y.Lot",
    url: "https://timerse.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Principal 1880-1990",
    name: "Derek Joy",
    url: "https://reddit.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Founder",
    name: "Mary Webstar",
    url: "https://timerse.com",
  },
];
export default () => (
  <AnimationRevealPage>
    <Hero heading1={"Our Pioneers and"} heading2={"Founding Fathers"} centerButton={false} />

    <Profiles
      profiles={blogPosts}
      title1={`Meet the Brain Behind`}
      title2={`the Great Institution`}
    />
  </AnimationRevealPage>
);
