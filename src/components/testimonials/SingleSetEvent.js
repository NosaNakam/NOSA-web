import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { formatDate } from "../../helpers/extras";

const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const EventHeader = styled.div`
  ${tw`w-full h-[200px] rounded-md bg-cover bg-center shadow-md mb-5`}
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
`;
const EventTitle = tw.h1`text-2xl font-bold mb-3`;
const EventDetailsFlex = tw.div`flex items-center gap-3 my-2 text-gray-700`;
const EventDescription = tw.p`text-sm text-gray-600 mt-4`;
const RSVPButton = tw.button`py-2 px-5 rounded-md bg-green-500 text-white font-bold transition duration-200 hover:bg-green-600`;
const EventDate = tw.div`flex items-center gap-2 text-sm text-gray-500`;

const SingleSetEvent = ({ event }) => {
  const [rsvp, setRsvp] = useState(false);

  const handleRsvpClick = () => {
    setRsvp(!rsvp);
  };

  return (
    <InnerContainer>
      <EventHeader />
      <EventTitle>{event.title}</EventTitle>

      {/* Event Date, Time, and Location */}
      <EventDetailsFlex>
        <AiFillCalendar />
        <EventDate>{formatDate(event.date)}</EventDate>
      </EventDetailsFlex>
      <EventDetailsFlex>
        <AiOutlineClockCircle />
        <span>{event.time}</span>
      </EventDetailsFlex>
      <EventDetailsFlex>
        <FaMapMarkerAlt />
        <span>{event.location}</span>
      </EventDetailsFlex>

      {/* Event Description */}
      <EventDescription>{event.description}</EventDescription>

      {/* RSVP Button */}
      <div className="mt-5">
        <RSVPButton onClick={handleRsvpClick}>{rsvp ? "Cancel RSVP" : "RSVP Now"}</RSVPButton>
      </div>
    </InnerContainer>
  );
};

export default SingleSetEvent;
