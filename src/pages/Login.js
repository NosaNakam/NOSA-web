import React, { useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "../images/login-illustration.svg";
import logo from "../images/logo.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { useDispatch } from "react-redux";
import { saveUser } from "../Redux/Services/AppSlice.js";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../Redux/Api/AuthApiSplice.js";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const Notification = tw.div`mt-4 p-3 text-center text-sm rounded-lg`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const LoginPage = ({
  headingText = "Sign In to Your Account",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  logoLinkUrl = "/",
  signupUrl = "/sign-up",
  forgotPasswordUrl = "/forgot-password",
  illustrationImageSrc = illustration,
}) => {
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setNotification({ message: "Please fill in all fields.", type: "error" });
      return;
    }

    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(saveUser(res.user));
      setNotification({ message: res.message, type: "success" });
      setTimeout(() => {
        if (res.user.firstVisit) {
          navigate("/user-detail");
        } else {
          navigate("/");
        }
      }, 1500);
    } catch (error) {
      setNotification({ message: error?.data?.message, type: "error" });
    }
  };

  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                {notification.message && (
                  <Notification
                    style={{
                      backgroundColor: notification.type === "success" ? "#DFF2BF" : "#FFBABA",
                      color: notification.type === "success" ? "#4F8A10" : "#D8000C",
                    }}>
                    {notification.message}
                  </Notification>
                )}
                <Form onSubmit={handleSubmit}>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                  />
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{isLoading ? "Logging..." : submitButtonText}</span>
                  </SubmitButton>
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  <a href={forgotPasswordUrl} tw="border-b border-gray-500 border-dotted">
                    Forgot Password?
                  </a>
                </p>
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Don't have an account?{" "}
                  <a href={signupUrl} tw="border-b border-gray-500 border-dotted">
                    Sign Up
                  </a>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};

export default LoginPage;
