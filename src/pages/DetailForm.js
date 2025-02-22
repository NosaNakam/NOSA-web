import React, { useEffect, useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "../images/signup-illustration.svg";
import logo from "../images/logo.png";
import { ReactComponent as SaveIcon } from "feather-icons/dist/icons/save.svg";
import { useSelector } from "react-redux";
import { useUpdateCurrentUserMutation } from "../Redux/Api/UserApiSlice.js";
import { useNavigate } from "react-router-dom";
import { setRoles, titles } from "../helpers/extras.js";
import MessageModal from "../components/features/MessageModal.js";

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
const Notification = tw.div`p-3 mt-4 text-center text-sm rounded-lg`;
const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const Select = tw.select`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Complete Your Profile",
  submitButtonText = "Save",
  SubmitButtonIcon = SaveIcon,
}) => {
  const { user } = useSelector((state) => state.AppSlice);
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [currentJob, setCurrentJob] = useState("");
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [image, setImage] = useState("");
  const [socialMedia, setSocialMedia] = useState([
    { platform: "twitter", url: "" },
    { platform: "linkedin", url: "" },
    { platform: "facebook", url: "" },
  ]);
  const navigate = useNavigate();
  const [updateUserProfile, { isLoading }] = useUpdateCurrentUserMutation();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await updateUserProfile({
        phone,
        title,
        currentJob,
        employer,
        position,
        maritalStatus,
        yearOfGraduation,
        image,
        socialMedia,
        firstVisit: false,
      }).unwrap();
      setNotification({ message: res.message, type: "success" });
      setShowModal(true);
      setTimeout(() => navigate("/"), 5000);
    } catch (error) {
      setNotification({ message: error.data?.message || "An error occurred", type: "error" });
    }
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
      setPhone(user.phone || "");
      setTitle(user.title || "");
      setCurrentJob(user.currentJob || "");
      setEmployer(user.employer || "");
      setPosition(user.position || "");
      setMaritalStatus(user.maritalStatus || "");
      setYearOfGraduation(user.yearOfGraduation || "");
      setImage(user.image || "");
      setSocialMedia(
        user.socialMedia || [
          { platform: "twitter", url: "" },
          { platform: "linkedin", url: "" },
          { platform: "facebook", url: "" },
        ]
      );
    }
  }, [user]);

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = [...socialMedia];
    updatedSocialMedia[index][field] = value;
    setSocialMedia(updatedSocialMedia);
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
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
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
                  <Select value={title} onChange={(e) => setTitle(e.target.value)} defaultValue="">
                    <option value="" disabled>
                      Title
                    </option>
                    {titles?.map((title, index) => (
                      <option key={index} value={title}>
                        {title}
                      </option>
                    ))}
                  </Select>
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
                  <Select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    defaultValue="">
                    <option value="" disabled>
                      Your Set Role
                    </option>
                    {setRoles?.map((role, index) => (
                      <option key={index} value={role}>
                        {role}
                      </option>
                    ))}
                  </Select>
                  <Select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                    <option value="" disabled>
                      Select Marital Status
                    </option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="complicated">Complicated</option>
                  </Select>
                  <Input
                    onChange={(e) => setYearOfGraduation(e.target.value)}
                    value={yearOfGraduation}
                    type="text"
                    placeholder="Year of Graduation"
                  />
                  <Input
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    type="text"
                    placeholder="Profile Image URL"
                  />
                  {socialMedia.map((media, index) => (
                    <Input
                      key={index}
                      onChange={(e) => handleSocialMediaChange(index, "url", e.target.value)}
                      value={media.url}
                      type="text"
                      placeholder={`${media.platform} URL`}
                    />
                  ))}
                  <SubmitButton type="submit">
                    <SubmitButtonIcon className="icon" />
                    <span className="text">{isLoading ? "Saving..." : submitButtonText}</span>
                  </SubmitButton>
                </Form>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <MessageModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            head={"Details updated successfully!"}
            text={
              "Kindly wait for your set admin to verify you to be able to access all features. Thanks"
            }
          />
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};
