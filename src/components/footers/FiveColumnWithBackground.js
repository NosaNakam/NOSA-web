import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/logo.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-9.svg";

const Container = tw.div`relative bg-primary-500 text-gray-100 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default () => {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>Main</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="about">About Us</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="contact">Contact</Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="#">Nakam</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">About Us</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Nakam</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/nakam-history">History of Nakam</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/founding-fathers">Founding Fathers</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/school-management">School Management</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/school-associations">School Associations</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/school-achievements">School Achievements</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Membership</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/nosa-sets">Set Membership</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/whom-we-are-proud-of">Whom We Are Proud Of</Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="#">Stories</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Office</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Blog</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="/events">Events</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/news">News Update</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/gallery">Gallery</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="/showcase">Showcase</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Others</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="sign-up">Be a Member</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="login">Login</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="pay-dues">Pay Dues</Link>
              </LinkListItem>
              {/* <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem> */}
            </LinkList>
          </Column>
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>NOSA</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2024 NOSA. All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/share/JJjnWep2wqmg7t8d/?mibextid=A7sQZp">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://x.com/NakamNosa?s=09">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
};
