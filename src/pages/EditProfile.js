import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as SaveIcon } from "feather-icons/dist/icons/save.svg";
import { ReactComponent as AddIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as RemoveIcon } from "feather-icons/dist/icons/x.svg";
import {
  useGetSingleUserDetailsQuery,
  useUpdateCurrentUserMutation,
} from "../Redux/Api/UserApiSlice.js";
import { saveUser } from "../Redux/Services/AppSlice.js";
import MessageModal from "../components/features/MessageModal.js";
import { setRoles } from "../helpers/extras.js";

// Styled Components
const Container = tw.div`min-h-screen bg-gray-100 font-medium flex justify-center p-8`;
const ProfileContainer = tw.div`w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden`;
const ProfileContent = tw.div`p-6`;
const ProfileHeader = tw.div`flex flex-col items-center md:flex-row md:items-start`;
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
const Section = tw.section`mt-8`;
const SectionTitle = tw.h2`text-xl flex items-center font-bold mb-4`;
const SectionContent = tw.div`bg-gray-100 p-4 rounded-lg`;
const DetailItem = tw.div`flex items-center mb-4`;
const DetailLabel = tw.span`font-semibold flex items-center gap-2 w-1/3`;
const Input = tw.input`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500`;
const Select = tw.select`w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500`;
const SocialMediaContainer = tw.div`space-y-4`;
const SocialMediaItem = tw.div`flex gap-2 items-center`;
const SocialMediaAction = tw.button`p-1 hover:bg-gray-200 rounded-full`;

const Edit = () => {
  const { userId } = useParams();
  const { data } = useGetSingleUserDetailsQuery(userId);
  const user = data?.user;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    title: "",
    currentJob: "",
    employer: "",
    position: "",
    maritalStatus: "",
    yearOfGraduation: "",
    socialMedia: [],
  });

  const [updateUserProfile, { isLoading }] = useUpdateCurrentUserMutation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        phone: user.phone || "",
        title: user.title || "",
        currentJob: user.currentJob || "",
        employer: user.employer || "",
        position: user.position || "",
        maritalStatus: user.maritalStatus || "",
        yearOfGraduation: user.yearOfGraduation || "",
        socialMedia: user.socialMedia || [],
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateUserProfile(formData).unwrap();
      dispatch(saveUser({ ...user, ...formData }));
      setShowModal(true);
      setTimeout(() => navigate(`/user/${userId}`), 2000);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocial = [...formData.socialMedia];
    updatedSocial[index][field] = value;
    setFormData({ ...formData, socialMedia: updatedSocial });
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { platform: "", url: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const updatedSocial = formData.socialMedia.filter((_, i) => i !== index);
    setFormData({ ...formData, socialMedia: updatedSocial });
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileContent>
          <ProfileHeader>
            <ProfileDetails>
              <ProfileName>{`${user?.firstName} ${user?.surname}`}</ProfileName>
              <ProfileTitle>{user?.email}</ProfileTitle>

              <ActionButtons>
                <ActionButton primary onClick={handleSubmit}>
                  <SaveIcon tw="w-5 h-5 mr-2" />
                  {isLoading ? "Saving..." : "Save Changes"}
                </ActionButton>
              </ActionButtons>
            </ProfileDetails>
          </ProfileHeader>

          <Section>
            <SectionTitle>Personal Information</SectionTitle>
            <SectionContent>
              <DetailItem>
                <DetailLabel>Phone:</DetailLabel>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone number"
                />
              </DetailItem>

              <DetailItem>
                <DetailLabel>Title:</DetailLabel>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Professional title"
                />
              </DetailItem>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Employment Information</SectionTitle>
            <SectionContent>
              <DetailItem>
                <DetailLabel>Current Job:</DetailLabel>
                <Input
                  value={formData.currentJob}
                  onChange={(e) => setFormData({ ...formData, currentJob: e.target.value })}
                  placeholder="Current job position"
                />
              </DetailItem>

              <DetailItem>
                <DetailLabel>Employer:</DetailLabel>
                <Input
                  value={formData.employer}
                  onChange={(e) => setFormData({ ...formData, employer: e.target.value })}
                  placeholder="Employer name"
                />
              </DetailItem>

              <DetailItem>
                <DetailLabel>Position:</DetailLabel>
                <Select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}>
                  <option value="">Select Position</option>
                  {setRoles?.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </Select>
              </DetailItem>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Personal Details</SectionTitle>
            <SectionContent>
              <DetailItem>
                <DetailLabel>Marital Status:</DetailLabel>
                <Select
                  value={formData.maritalStatus}
                  onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}>
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </Select>
              </DetailItem>

              <DetailItem>
                <DetailLabel>Graduation Year:</DetailLabel>
                <Input
                  type="number"
                  value={formData.yearOfGraduation}
                  onChange={(e) => setFormData({ ...formData, yearOfGraduation: e.target.value })}
                  placeholder="Year of graduation"
                />
              </DetailItem>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>
              Social Media Links
              <button tw="ml-2 p-1 hover:bg-gray-200 rounded-full" onClick={addSocialMedia}>
                <AddIcon tw="w-5 h-5" />
              </button>
            </SectionTitle>
            <SectionContent>
              <SocialMediaContainer>
                {formData.socialMedia.map((media, index) => (
                  <SocialMediaItem key={index}>
                    <Select
                      tw="flex-1"
                      value={media.platform}
                      onChange={(e) => handleSocialMediaChange(index, "platform", e.target.value)}>
                      <option value="">Select Platform</option>
                      <option value="facebook">Facebook</option>
                      <option value="twitter">Twitter</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="instagram">Instagram</option>
                    </Select>
                    <Input
                      tw="flex-[2]"
                      type="url"
                      placeholder="Profile URL"
                      value={media.url}
                      onChange={(e) => handleSocialMediaChange(index, "url", e.target.value)}
                    />
                    <SocialMediaAction onClick={() => removeSocialMedia(index)}>
                      <RemoveIcon tw="w-5 h-5 text-red-500" />
                    </SocialMediaAction>
                  </SocialMediaItem>
                ))}
              </SocialMediaContainer>
            </SectionContent>
          </Section>
        </ProfileContent>
      </ProfileContainer>

      <MessageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        head="Profile Updated!"
        text="Your changes have been saved successfully."
      />
    </Container>
  );
};

export default Edit;
