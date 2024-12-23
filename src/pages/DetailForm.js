import React, { useEffect, useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../images/signup-illustration.svg";
import logo from "../images/logo.png";

import { ReactComponent as SaveIcon } from "feather-icons/dist/icons/save.svg";
// import { useUpdateProfileMutation } from "../Redux/Api/AuthApiSplice.js"; // Assuming you have this API endpoint
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
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
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Complete Your Profile",
  submitButtonText = "Save",
  SubmitButtonIcon = SaveIcon,
}) => {
  const { user } = useSelector((state) => state.AppSlice);

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [socialMedia, setSocialMedia] = useState([{ platform: "", url: "" }]);
  const navigate = useNavigate();
  // const [updateProfile, { isLoading, isError }] = useUpdateProfileMutation();

  const handleSocialMediaChange = (index, field, value) => {
    const newSocialMedia = [...socialMedia];
    newSocialMedia[index][field] = value;
    setSocialMedia(newSocialMedia);
  };

  const addSocialMediaField = () => {
    setSocialMedia([...socialMedia, { platform: "", url: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const res = await updateProfile({
    //     phone,
    //     title,
    //     currentJob,
    //     employer,
    //     nosaSet,
    //     position,
    //     maritalStatus,
    //     socialMedia,
    //   }).unwrap();
    //   console.log(res);
    //   alert("Profile updated successfully!");
    //   navigate("/dashboard");
    // } catch (error) {
    //   console.error(error.data?.message || "An error occurred");
    //   alert(error.data?.message || "An error occurred");
    // }
  };
  useEffect(() => {
    if (!user?.firstVisit) {
      navigate("/");
    }
  }, [user, navigate]);
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setSurname(user.surname);
      setEmail(user.email);
    }
  });
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
                <Form onSubmit={handleSubmit}>
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="tel"
                    placeholder="First Name"
                  />
                  <Input
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                    type="text"
                    placeholder="Surname"
                  />
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                  />
                  <Input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type="tel"
                    placeholder="Phone"
                  />
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type="text"
                    placeholder="Title"
                  />
                  <Input
                    onChange={(e) => setCurrentJob(e.target.value)}
                    value={currentJob}
                    type="text"
                    placeholder="Current Job"
                  />
                  <Input
                    onChange={(e) => setEmployer(e.target.value)}
                    value={employer}
                    type="text"
                    placeholder="Employer"
                  />
                  {/* <Input
                    onChange={(e) => setNosaSet(e.target.value)}
                    value={nosaSet}
                    type="text"
                    placeholder="NOSA Set"
                  /> */}
                  <Input
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    type="text"
                    placeholder="Position"
                  />
                  <Select
                    value={maritalStatus}
                    onChange={(e) => setMaritalStatus(e.target.value)}
                    defaultValue="">
                    <option value="" disabled>
                      Select Marital Status
                    </option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="complicated">Complicated</option>
                  </Select>
                  <h4 tw="mt-5 font-semibold">Social Media</h4>
                  {socialMedia.map((item, index) => (
                    <div key={index} tw="mt-2 flex flex-col">
                      <Select
                        value={item.platform}
                        onChange={(e) =>
                          handleSocialMediaChange(index, "platform", e.target.value)
                        }>
                        <option value="" disabled>
                          Select Platform
                        </option>
                        <option value="twitter">Twitter</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="facebook">Facebook</option>
                        <option value="email">Email</option>
                      </Select>
                      <Input
                        onChange={(e) => handleSocialMediaChange(index, "url", e.target.value)}
                        value={item.url}
                        type="url"
                        placeholder="Profile URL"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSocialMediaField}
                    tw="mt-3 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
                    Add Social Media
                  </button>
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    {/* <span className="text">{isLoading ? "Saving..." : submitButtonText}</span> */}
                  </SubmitButton>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
