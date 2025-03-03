import React from "react";
// import GlobalStyles from "styles/GlobalStyles";
import GlobalStyles from "./styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
import EventLandingPage from "./demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
import LoginPage from "./pages/Login.js";
import SignupPage from "./pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
import AboutUsPage from "./pages/AboutUs.js";
import Associations from "./pages/Associations.js";
import ContactUsPage from "./pages/ContactUs.js";
import BlogIndexPage from "./pages/BlogIndex.js";
import NosaSets from "./pages/NosaSets.js";
import NakamHistory from "./pages/TermsOfService.js";
import NakamAchievements from "./pages/NakamAchievements.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

// import ComponentRenderer from "ComponentRenderer.js";
import ComponentRenderer from "./ComponentRenderer";
import MainLandingPage from "./MainLandingPage.js";
import ThankYouPage from "./ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedRoute from "./SharedRoute.js";
import FoundingFathers from "./pages/FoundingFathers.js";
import SchoolManagement from "./pages/SchoolManagement.js";
import SchoolAchievements from "./pages/SchoolAchievements.js";
import WhomWeAreProudOf from "./pages/WhomWeAreProudOf.js";
import Gallary from "./pages/Gallary.js";
import NotFound from "./pages/NotFound.js";
import NosaSet from "./pages/NosaSet.js";
import Discussion from "./components/testimonials/Discussion.js";
import Members from "./components/testimonials/Members.js";
import Posts from "./components/testimonials/Posts.js";
import GroupEvents from "./components/testimonials/GroupEvents.js";
import Media from "./components/testimonials/Media.js";
import UserProfile from "./pages/UserProfile.js";
import EmailVerification from "./pages/EmailVerification.js";
import { useSelector } from "react-redux";
import DetailForm from "./pages/DetailForm.js";
import PrivateRoute from "./PrivateRoute.js";
import BlogDetailPage from "./pages/DetailBlogPage.js";
import NewsDetailPage from "./pages/DetailNews.js";
import Edit from "./pages/EditProfile.js";
import EventDetailPage from "./pages/EventDetaliPage.js";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  const { isLogin, user } = useSelector((state) => state.AppSlice);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/:type/:name" element={<ComponentRenderer />} />
          <Route path="/sign-up" element={isLogin ? <MainLandingPage /> : <SignupPage />} />
          <Route path="/login" element={isLogin ? <MainLandingPage /> : <LoginPage />} />
          <Route
            path="/user-detail"
            element={user?.firstVisit ? <DetailForm /> : <MainLandingPage />}
          />
          <Route path="/auth/verify-email" element={<EmailVerification />} />
          <Route path="/" element={<SharedRoute />}>
            <Route index element={<MainLandingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/nakam-history" element={<NakamHistory />} />
            <Route path="/school-associations" element={<Associations />} />
            {/* <Route path="/founding-fathers" element={<FoundingFathers />} /> */}
            {/* <Route path="/school-management" element={<SchoolManagement />} /> */}
            <Route path="/school-achievement" element={<NakamAchievements />} />
            {/* <Route path="/school-achievement" element={< />} /> */}
            <Route path="/events" element={<EventLandingPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/news-and-blogs" element={<BlogIndexPage />} />
            <Route path="/events/:eventId" element={<EventDetailPage />} />
            <Route path="/news/:newsId" element={<NewsDetailPage />} />
            <Route path="/post/:postId" element={<BlogDetailPage />} />
            <Route path="/nosa-sets" element={<NosaSets />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/user/:userId/edit" element={<Edit />} />
            <Route path="/nosa-sets/:setId" element={<NosaSet />}>
              <Route index element={<Members />} />
              <Route path="members" element={<Members />} />
              <Route path="discussion" element={<PrivateRoute component={Discussion} />} />
              <Route path="posts" element={<PrivateRoute component={Posts} />} />
              <Route path="events" element={<PrivateRoute component={GroupEvents} />} />
              <Route path="media" element={<PrivateRoute component={Media} />} />
            </Route>

            {/* <Route path="/our-developers" element={<WhomWeAreProudOf />} /> */}
            <Route path="/gallery" element={<Gallary />} />

            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
