import React, { Fragment, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiFillCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPinAngleFill } from "react-icons/bs";
import { useGetAllSetEventsQuery } from "../../Redux/Api/setEventApiSlice";
import { useParams } from "react-router-dom";
import SingleSetEvent from "./SingleSetEvent";
import { formatDate } from "../../helpers/extras";
// import Event from "../../../../backend/model/setEventModel";

const Container = tw.div`w-full flex flex-col lg:flex-row gap-5`;
const LeftContainer = tw.div`w-full lg:w-[60%]`;
const InnerContainer = tw.div`w-full bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const RightContainer = tw.div`hidden lg:block w-full lg:w-[40%] h-auto bg-[#f9f9f9] rounded-md shadow-md p-5 my-5`;
const EventHeader = styled.div`
  ${tw`w-full h-[200px] rounded-md bg-cover bg-center shadow-md mb-5`}
  background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80");
`;
const EventTitle = tw.h1`text-2xl font-bold mb-3`;
const EventDetailsFlex = tw.div`flex items-center gap-3 my-2 text-gray-700`;
const EventDescription = tw.p`text-sm text-gray-600 mt-4`;
const RSVPButton = tw.button`py-2 px-5 rounded-md bg-green-500 text-white font-bold transition duration-200 hover:bg-green-600`;
const EventDate = tw.div`flex items-center gap-2 text-sm text-gray-500`;
const SidebarEventItem = styled.div`
  ${tw`flex items-center gap-3 mb-4 p-3 bg-white rounded-md shadow-sm cursor-pointer hover:bg-gray-100`}
`;

const GroupEvents = () => {
  const { setId } = useParams();
  const { data, isLoading } = useGetAllSetEventsQuery(setId);
  const pinEvents = data?.events?.filter((event) => event.isPined);

  const [rsvp, setRsvp] = useState(false);
  const handleRsvpClick = () => {
    setRsvp(!rsvp);
  };

  return (
    <Container>
      <LeftContainer>
        {data?.events.length < 1 ? (
          <p tw="p-5">There is no event for now</p>
        ) : (
          data?.events?.map((event) => {
            return (
              <Fragment>
                <SingleSetEvent event={event} />
              </Fragment>
            );
          })
        )}
      </LeftContainer>

      {/* Right Container for Related Events */}
      <RightContainer>
        <h2 className="font-bold text-lg pb-4">Upcoming Events</h2>
        {pinEvents?.map((event) => {
          return (
            <Fragment key={event._id}>
              <SidebarEventItem>
                <BsPinAngleFill />
                <div>
                  <p className="font-semibold">{event?.title}</p>
                  <p className="text-sm text-gray-500">{formatDate(event?.date)}</p>
                </div>
              </SidebarEventItem>
            </Fragment>
          );
        })}
      </RightContainer>
    </Container>
  );
};

export default GroupEvents;
