import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
const ModalOverlay = tw.div`w-full flex items-center justify-center my-5`;
const ModalContainer = tw.div`bg-white rounded-lg w-full p-8 shadow-lg`;
const ModalTitle = tw.h2`text-2xl font-bold mb-4 text-center text-primary-500`;
const ModalText = tw.p`text-base text-gray-700 mb-4 text-center`;

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.AppSlice);
  const { setId } = useParams();

  const isMember = user?.nosaSet === setId || user.role === "superAdmin";
  // console.log(user);
  return (
    <>
      {isMember ? (
        <Component {...rest} />
      ) : (
        <>
          <ModalOverlay>
            <ModalContainer>
              <ModalTitle>Access Denied</ModalTitle>
              <ModalText>
                You are not authorized to access this NOSA Set because you are not a member.
              </ModalText>
              <ModalText>
                If you believe this is a mistake, contact support or join the set.
              </ModalText>
            </ModalContainer>
          </ModalOverlay>
        </>
      )}
    </>
  );
};

export default PrivateRoute;
