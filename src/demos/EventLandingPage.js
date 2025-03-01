import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../components/misc/Headings.js";
import { AiFillCalendar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { formatDate } from "../helpers/extras";
import { useGetAllEventsQuery } from "../Redux/Api/BlogApiSlice.js";
import Loading from "../components/testimonials/Loading.js";
import { Link } from "react-router-dom";
import Nav from "../components/headers/light";

// Styled Components
const HeroContainer = tw.div`relative py-20 bg-primary-500 mt-5`; // Use a solid color or gradient
const HeroContent = tw.div`max-w-4xl mx-auto text-center text-white`;
const HeroTitle = tw.h1`text-4xl md:text-6xl font-bold`;
const HeroDescription = tw.p`mt-4 text-lg md:text-xl max-w-2xl mx-auto`;
const Container = tw.div`relative w-full`;
const NavContainer = tw.div`pt-[2rem] px-[2rem]`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Content = tw.div`mt-16`;
const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/2 flex-shrink-0 h-80 md:h-[50vh] bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const EventLink = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

// Upcoming Events Grid
const UpcomingEventsContainer = tw.div`mt-20 w-[85%] mx-auto`;
const GridContainer = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10`;
const EventCard = tw.div`bg-white rounded-lg shadow-md overflow-hidden`;
const EventImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-48 bg-cover bg-center`,
]);
const EventContent = tw.div`p-4`;
const EventDate = tw.div`flex items-center gap-2 text-sm text-gray-500`;
const EventLocation = tw.div`flex items-center gap-2 text-sm text-gray-500 mt-2`;
const EventTitleGrid = tw.h3`text-xl font-bold mt-2`;
const EventDescriptionGrid = tw.p`text-sm text-gray-600 mt-2`;
const EventDetailBtn = tw.button`py-2 px-4 bg-primary-500 text-white font-semibold my-5 rounded-md shadow`;
const EventPage = () => {
  const { data, isLoading } = useGetAllEventsQuery();
  const upcomingEvents = data?.data?.filter((event) => !event.isPopular);
  const popularEvents = data?.data?.filter((event) => event.isPopular);
  console.log(upcomingEvents);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Container>
        <NavContainer>
          <Nav />
        </NavContainer>
        <HeroContainer>
          <HeroContent>
            <HeroTitle>Upcoming & Popular Events</HeroTitle>
            <HeroDescription>
              Discover the latest and most popular events happening around you. Don’t miss out on
              the excitement!
            </HeroDescription>
          </HeroContent>
        </HeroContainer>
        <SingleColumn>
          {/* Popular Events Section */}
          <HeadingInfoContainer>
            <HeadingTitle>Popular Events</HeadingTitle>
            <HeadingDescription>
              Here are some of the most popular events of the school and the association.
            </HeadingDescription>
          </HeadingInfoContainer>

          <Content>
            {popularEvents?.length < 1 ? (
              <h1>No Event at the moment</h1>
            ) : (
              popularEvents?.map((event, i) => (
                <Card key={event._id} reversed={i % 2 === 1}>
                  <Image imageSrc={event?.image} />
                  <Details>
                    <Subtitle>{event?.subtitle}</Subtitle>
                    <Title>{event?.title}</Title>
                    <Description>{event?.description}</Description>
                    <EventLink href={`/events/${event?._id}`}>See Event Details</EventLink>
                  </Details>
                </Card>
              ))
            )}
          </Content>

          {/* Upcoming Events Section */}
          <UpcomingEventsContainer>
            <HeadingInfoContainer>
              <HeadingTitle>Upcoming Events</HeadingTitle>
              <HeadingDescription>
                Check out the upcoming events that you don't want to miss.
              </HeadingDescription>
            </HeadingInfoContainer>

            <GridContainer>
              {upcomingEvents?.length < 1 ? (
                <h1>No Upcoming Events</h1>
              ) : (
                upcomingEvents?.map((event) => (
                  <EventCard key={event._id}>
                    <EventImage imageSrc={event?.image} />
                    <EventContent>
                      <EventDate>
                        <AiFillCalendar />
                        {formatDate(event?.dateOfEvent)}
                      </EventDate>
                      <EventLocation>
                        <FaMapMarkerAlt />
                        {event?.venue?.address}
                      </EventLocation>
                      <EventTitleGrid>{event?.title}</EventTitleGrid>
                      <EventDescriptionGrid>{event?.description}</EventDescriptionGrid>
                      <EventDetailBtn>
                        <Link to={`/events/${event?._id}`}>Event Detail</Link>
                      </EventDetailBtn>
                    </EventContent>
                  </EventCard>
                ))
              )}
            </GridContainer>
          </UpcomingEventsContainer>
        </SingleColumn>
      </Container>
    </div>
  );
};

export default EventPage;
