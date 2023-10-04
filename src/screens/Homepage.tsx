import { SocialBar } from "@components/Footer/SocialBar";
import Link from "next/link";
import styled from "styled-components";

export const HomeScreen: React.FC = () => {
  return (
    <>
      <HeaderContainer>✨ ImJustLucas present ... ✨</HeaderContainer>
      <HomeContainer>
        <Title>Just a boilerplate</Title>
        <Subtitle>
          Magnificent Next.js boilerplate with TypeScript, ESLint, Prettier and
          everything else you need to bootstrap your Next.js project.
        </Subtitle>
        <StyledLink
          href="https://github.com/ImJustLucas/Next-Boilerplate"
          target="_blank"
        >
          I want to use it!
        </StyledLink>
      </HomeContainer>
      <FooterContainer>
        <SocialBar />
      </FooterContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  padding: 32px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

const FooterContainer = styled.footer`
  width: 100%;
  padding: 32px 0;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.desktop.extraTitle};
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 2;

  &::after {
    content: "🤩";
    position: absolute;
    right: -20px;
    top: -25px;
    transform: rotate(20deg);
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.medium};
  }
`;
const Subtitle = styled.p`
  font-size: 24px;
  max-width: 500px;
  text-align: center;
  z-index: 2;
  position: relative;

  &::after {
    content: "🥳";
    position: absolute;
    left: -30px;
    bottom: -25px;
    transform: rotate(-20deg);
    z-index: -1;
    font-size: ${({ theme }) => theme.size.desktop.extraTitle};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.size.desktop.small};
    width: 80%;

    &::after {
      font-size: ${({ theme }) => theme.size.desktop.medium};
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.medium};
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::before {
    content: "👉";
    position: absolute;
    font-size: 26px;
    left: -50px;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    content: "👈";
    position: absolute;
    font-size: 26px;
    right: -50px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    &::before {
      left: -40px;
    }

    &::after {
      right: -40px;
    }
  }
`;
