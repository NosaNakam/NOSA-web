import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "../misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-icon.svg";
import Loading from "../testimonials/Loading.js";
import { useGetAllSetsQuery } from "../../Redux/Api/SetApiSice.js";
import { Link } from "react-router-dom";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3  `;
const CardFlex = tw.div`w-full flex flex-col md:flex-row justify-center gap-[2rem]`;
const CardColumn = tw(Column)`w-full mt-16 xl:mt-0 mx-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`p-2 shadow-lg rounded-md`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-left rounded `,
]);
const CardText = tw.div`mt-4`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

export default () => {
  const { data, isLoading } = useGetAllSetsQuery();
  const sets = data?.sets.slice(0, 3) || [];

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>NOSA Sets</HeadingTitle>
              <HeadingDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua enim ad minim veniam.
              </HeadingDescription>
              <Link to={"/nosa-sets"}>
                <PrimaryLink>
                  View All Our Sets <ArrowRightIcon />
                </PrimaryLink>
              </Link>
            </HeadingInfoContainer>
          </HeadingColumn>
          <CardFlex>
            {sets.map((set, index) => (
              <CardColumn key={set._id}>
                <Card>
                  <CardImage imageSrc={set.banner} />
                  <CardText>
                    <CardTitle>NOSA Set {set.name}</CardTitle>

                    <CardAction>
                      <Link to={`/nosa-sets/${set?._id}`}>View Set</Link>
                    </CardAction>
                  </CardText>
                </Card>
              </CardColumn>
            ))}
          </CardFlex>
        </ThreeColumn>
      </Content>
    </Container>
  );
};
