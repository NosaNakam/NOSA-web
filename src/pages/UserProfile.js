import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "feather-icons/dist/icons/edit.svg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as PhoneIcon } from "feather-icons/dist/icons/phone.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as CalendarIcon } from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as LinkIcon } from "feather-icons/dist/icons/link.svg";
import {
  useGetSingleUserDetailsQuery,
  useUpdateCurrentUserMutation,
  useUploadUserBannerMutation,
  useUploadUserImageMutation,
} from "../Redux/Api/UserApiSlice.js";
import { saveUser } from "../Redux/Services/AppSlice.js";
import MessageModal from "../components/features/MessageModal.js";
import Nav from "../components/headers/light";
import ImageUploadModal from "../components/features/ImageModal.js";

// Styled Components
const Container = tw.div`min-h-screen relative bg-gray-100 font-medium flex justify-center p-8`;
const ProfileContainer = tw.div`w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden`;
const Banner = styled.div`
  ${tw`h-48 bg-cover bg-center relative`}
  background-image: url(${(props) => props.bannerUrl || "https://via.placeholder.com/1200x400"});
  background-size: cover;
  background-position: center;
`;
const ProfileContent = tw.div`p-6`;
const ProfileHeader = tw.div`flex flex-col items-center md:flex-row md:items-start`;
const ProfileImage = styled.img`
  ${tw`w-32 h-32 rounded-full border-4 border-white -mt-16 relative`}
  @media (max-width: 768px) {
    ${tw`w-24 h-24 -mt-12`}
  }
`;
const ProfileDetails = tw.div`ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left`;
const ProfileName = tw.h1`text-2xl font-bold`;
const ProfileTitle = tw.p`text-gray-600`;
const ActionButtons = tw.div`flex gap-2 mt-4`;
const ActionButton = styled.button`
  ${tw`flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300`}
  ${({ primary }) =>
    primary
      ? tw`bg-primary-500 text-white hover:bg-blue-600`
      : tw`bg-gray-200 text-gray-700 hover:bg-gray-300`}
`;
const SectionTabs = tw.div`flex gap-4 mt-8 border-b border-gray-200`;
const TabButton = styled.button`
  ${tw`px-4 py-2 text-primary-600 hover:text-primary-700 transition-all duration-300`}
  ${({ active }) => active && tw`text-primary-500 border-b-2 border-primary-500`}
`;
const Section = tw.section`mt-8`;
const SectionTitle = tw.h2`text-xl font-bold mb-4`;
const SectionContent = tw.div`bg-gray-100 p-4 rounded-lg`;
const DetailItem = tw.div`flex items-center mb-4`;
const DetailLabel = tw.span`font-semibold flex items-center gap-2`;
const DetailValue = tw.span`ml-2 text-gray-700`;
const StatsContainer = tw.div`flex gap-6 mt-6`;
const StatItem = tw.div`text-center`;
const StatNumber = tw.div`text-xl font-bold`;
const StatLabel = tw.div`text-gray-600`;
const Edit = tw.div`absolute right-[3%] bottom-[20%] bg-white p-2 rounded-full cursor-pointer shadow-md`;
const EditBanner = tw.div`absolute right-[3%] bottom-[10%] bg-white p-2 rounded-full cursor-pointer shadow-md`;
const image =
  "https://images.unsplash.com/photo-1736325263332-f0bf3d863e3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default () => {
  const { userId } = useParams();
  const { user } = useSelector((state) => state.AppSlice);
  const { data } = useGetSingleUserDetailsQuery(userId);
  const [uploadImage] = useUploadUserImageMutation();
  const [uploadBanner] = useUploadUserBannerMutation();
  const [updateUser] = useUpdateCurrentUserMutation();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("about");
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleEditClick = () => {
    navigate(`/user/${userId}/edit`);
  };

  const handleBannerUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await uploadBanner(formData).unwrap();
      await updateUser({ banner: res.imgUrl }).unwrap();
    } catch (error) {
      console.error("Failed to upload banner:", error);
    }
  };

  const handleProfileUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await uploadImage(formData).unwrap();
      await updateUser({ image: res.imgUrl }).unwrap();
    } catch (error) {
      console.error("Failed to upload profile image:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div style={{ padding: "2rem 1rem" }}>
      <Nav />
      <Container>
        <ProfileContainer>
          <Banner bannerUrl={data?.user?.banner || image}>
            {user?.id === data?.user?._id && (
              <EditBanner>
                <EditIcon tw="w-5 h-5 text-gray-700" onClick={() => setShowBannerModal(true)} />
              </EditBanner>
            )}
          </Banner>
          <ProfileContent>
            <ProfileHeader>
              <div style={{ position: "relative" }} tw="w-full flex justify-center items-center">
                <ProfileImage src={data?.user?.image || image} alt="Profile" />
                <Edit>
                  <EditIcon tw="w-5 h-5 text-gray-700" onClick={() => setShowProfileModal(true)} />
                </Edit>
              </div>

              <ProfileDetails tw="ml-4">
                <ProfileName>
                  {`${data?.user?.title} ${data?.user?.firstName} ${data?.user?.surname}`}
                </ProfileName>
                <ActionButtons>
                  {user?.id !== data?.user?._id && (
                    <div>
                      <ActionButton primary>
                        <span>Add Friend</span>
                      </ActionButton>
                      <ActionButton>
                        <span>Message</span>
                      </ActionButton>
                    </div>
                  )}
                  {user?.id === data?.user?._id && (
                    <ActionButton onClick={handleEditClick}>
                      <EditIcon className="icon" />
                      <span>Edit Profile</span>
                    </ActionButton>
                  )}
                </ActionButtons>
              </ProfileDetails>
            </ProfileHeader>

            <StatsContainer>
              <StatItem>
                <StatNumber>1.2K</StatNumber>
                <StatLabel>Friends</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>456</StatNumber>
                <StatLabel>Posts</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>78</StatNumber>
                <StatLabel>Photos</StatLabel>
              </StatItem>
            </StatsContainer>

            <SectionTabs>
              <TabButton active={activeTab === "about"} onClick={() => setActiveTab("about")}>
                About
              </TabButton>
              <TabButton active={activeTab === "social"} onClick={() => setActiveTab("social")}>
                Social Media
              </TabButton>
            </SectionTabs>

            {activeTab === "about" && (
              <Section>
                <SectionTitle>About Me</SectionTitle>
                <SectionContent>
                  <DetailItem>
                    <DetailLabel>
                      <EmailIcon className="w-5 h-5" />
                      Email:
                    </DetailLabel>
                    <DetailValue>{data?.user?.email}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>
                      <PhoneIcon className="w-5 h-5" />
                      Phone:
                    </DetailLabel>
                    <DetailValue>{data?.user?.phone || "Not provided"}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>
                      <BriefcaseIcon className="w-5 h-5" />
                      Current Job:
                    </DetailLabel>
                    <DetailValue>{data?.user?.currentJob || "Not provided"}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>
                      <BriefcaseIcon className="w-5 h-5" />
                      Employer:
                    </DetailLabel>
                    <DetailValue>{data?.user?.employer || "Not provided"}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>
                      <UserIcon className="w-5 h-5" />
                      Position:
                    </DetailLabel>
                    <DetailValue>{data?.user?.position || "Not provided"}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>
                      <UserIcon className="w-5 h-5" />
                      Marital Status:
                    </DetailLabel>
                    <DetailValue>{data?.user?.maritalStatus || "Not provided"}</DetailValue>
                  </DetailItem>
                  <DetailItem>
                    <DetailLabel>
                      <CalendarIcon className="w-5 h-5" />
                      Year of Graduation:
                    </DetailLabel>
                    <DetailValue>{data?.user?.yearOfGraduation || "Not provided"}</DetailValue>
                  </DetailItem>
                </SectionContent>
              </Section>
            )}

            {activeTab === "social" && (
              <Section>
                <SectionTitle>Social Media</SectionTitle>
                <SectionContent>
                  {data?.user?.socialMedia?.map((media, index) => (
                    <DetailItem key={index}>
                      <DetailLabel>
                        <LinkIcon className="w-5 h-5" />
                        {media.platform}:
                      </DetailLabel>
                      <DetailValue>
                        <a href={media.url} target="_blank" rel="noopener noreferrer">
                          {media.url || "Not provided"}
                        </a>
                      </DetailValue>
                    </DetailItem>
                  ))}
                </SectionContent>
              </Section>
            )}
          </ProfileContent>
        </ProfileContainer>

        <ImageUploadModal
          isOpen={showBannerModal}
          onClose={() => setShowBannerModal(false)}
          onUpload={handleBannerUpload}
          title="Upload Banner Image"
        />

        <ImageUploadModal
          isOpen={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onUpload={handleProfileUpload}
          title="Upload Profile Image"
        />
      </Container>
    </div>
  );
};
