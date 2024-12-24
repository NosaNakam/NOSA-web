import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BsThreeDots } from "react-icons/bs";
import { ListMembers } from "../members/ListMembers";
import CardMembers from "../members/CardMembers";
import { IoGridOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetAllSetMembersQuery } from "../../Redux/Api/SetApiSice";

// Styled Components

const Display = tw.div`w-full flex justify-end gap-3 mt-5`;
const IconCont = tw.div`cursor-pointer bg-gray-300 rounded-full p-3 shadow`;
const Members = () => {
  const [displayMembers, setDisplayMembers] = useState("grid");
  const { setId } = useParams();
  const { data, isLoading } = useGetAllSetMembersQuery(setId);
  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #ccc",
              borderTop: "5px solid #4f46e5",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}></div>
          <h1 style={{ marginTop: "1rem", color: "#4f46e5", fontSize: "1.5rem" }}>Loading...</h1>
        </div>
        <style>
          {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </div>
    );
  }

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
      {displayMembers === "grid" ? (
        <CardMembers members={data?.data} />
      ) : (
        <ListMembers members={data?.data} />
      )}
    </div>
  );
};

export default Members;
