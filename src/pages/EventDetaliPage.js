import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillCalendar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { formatDate } from "../helpers/extras.js";
import { useGetDetailEventQuery, useGetEventByIdQuery } from "../Redux/Api/BlogApiSlice.js";
import Loading from "../components/testimonials/Loading.js";

// Styled Components
const Container = tw.div`relative`;
const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingTitle = tw.h1`text-4xl font-bold text-gray-900`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Content = tw.div`mt-16`;
const EventImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-96 bg-cover bg-center rounded-lg`,
]);
const EventDetails = tw.div`mt-8`;
const EventDate = tw.div`flex items-center gap-2 text-sm text-gray-500`;
const EventLocation = tw.div`flex items-center gap-2 text-sm text-gray-500 mt-2`;
const EventTitle = tw.h2`text-3xl font-bold mt-4`;
const EventDescription = tw.p`text-lg text-gray-700 mt-4`;
const EventContent = tw.div`mt-8 text-gray-700`;

const EventDetailPage = () => {
  const { eventId } = useParams();
  const { data, isLoading } = useGetDetailEventQuery({ id: eventId });
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }

  const event = data?.data;

  return (
    <Container>
      {/* <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{event?.title}</HeadingTitle>
          <HeadingDescription>{event?.description}</HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          <EventImage imageSrc={event?.image} />
          <EventDetails>
            <EventDate>
              <AiFillCalendar />
              {formatDate(event?.dateOfEvent)}
            </EventDate>
            <EventLocation>
              <FaMapMarkerAlt />
              {event?.venue?.address}
            </EventLocation>
            <EventTitle>{event?.title}</EventTitle>
            <EventDescription>{event?.description}</EventDescription>
            <EventContent dangerouslySetInnerHTML={{ __html: event?.content }} />
          </EventDetails>
        </Content>
      </SingleColumn> */}
    </Container>
  );
};

export default EventDetailPage;
