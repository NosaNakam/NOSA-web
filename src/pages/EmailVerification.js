import React, { useEffect, useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom"; // For getting query parameters
import { useVerifyEmailMutation } from "../Redux/Api/AuthApiSplice.js";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const Message = tw.p`mt-4 text-sm text-gray-600 text-center`;
const Spinner = styled.div`
  ${tw`mt-8 w-16 h-16 border-4 border-primary-500 border-solid rounded-full border-t-transparent animate-spin`}
`;

export default () => {
  const [statusMessage, setStatusMessage] = useState("Verifying your email...");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const verificationToken = searchParams.get("verificationToken");
  const email = searchParams.get("email");
  const navigate = useNavigate();

  const [verifyEmail] = useVerifyEmailMutation();

  useEffect(() => {
    const verify = async () => {
      try {
        const response = await verifyEmail({ verificationToken, email }).unwrap();
        setStatusMessage(response.message || "Email verified successfully!");
        navigate("/login");
      } catch (error) {
        setStatusMessage(error.data?.message || "Verification failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (verificationToken) verify();
    else setStatusMessage("Invalid or missing verification token.");
  }, [verificationToken, verifyEmail, email]);

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <MainContent>
              <Heading>Email Verification</Heading>
              {isLoading ? (
                <>
                  <Spinner />
                  <Message>{statusMessage}</Message>
                </>
              ) : (
                <Message>{statusMessage}</Message>
              )}
            </MainContent>
          </MainContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
