import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import Header from "../components/headers/light.js";
import Profiles from "../components/cards/Profiles.js";
import { Gimba, Plangji } from "../images/ImageIndex.js";
const blogPosts = [
  {
    imageSrc: Gimba,
    responsibleFor: "Set '94",
    name: "Engr. GIMBA, Haruna Ladan",
    url: "https://timerse.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Set '94",
    name: "Major General Godwin Michael Mutkut",
    url: "https://timerse.com",
  },
  {
    imageSrc: Plangji,
    responsibleFor: "Set '85",
    name: "Plangji Cishak",
    url: "https://reddit.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Set '85",
    name: "Mr. Silas Damwesh",
    url: "https://timerse.com",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    responsibleFor: "Set '85",
    name: "Mr. Pankyes Michael",
    url: "https://timerse.com",
  },
];
export default () => (
  <AnimationRevealPage>
    <Header />

    <Profiles
      profiles={blogPosts}
      title1={`Meet these Vibrant People `}
      title2={`we are Proud of`}
    />
  </AnimationRevealPage>
);
