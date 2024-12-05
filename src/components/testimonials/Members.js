import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsThreeDots } from "react-icons/bs";
import { ListMembers } from "../members/ListMembers";
import CardMembers from "../members/CardMembers";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

// Styled Components

const Display = tw.div`w-full flex justify-end gap-3 mt-5`;
const IconCont = tw.div`cursor-pointer bg-gray-300 rounded-full p-3 shadow`;
const Members = () => {
  const [displayMembers, setDisplayMembers] = useState("grid");

  return (
    <div>
      {/* Display mode toggler */}
      <Display>
        <IconCont>
          <FaListUl fontSize={25} onClick={() => setDisplayMembers("list")} />
        </IconCont>
        <IconCont>
          <IoGridOutline fontSize={25} onClick={() => setDisplayMembers("grid")} />
        </IconCont>
      </Display>

      {/* Member display */}
      {displayMembers === "grid" ? <CardMembers /> : <ListMembers />}
    </div>
  );
};

export default Members;
