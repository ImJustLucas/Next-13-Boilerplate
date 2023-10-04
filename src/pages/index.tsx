import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

const Title = styled.h1`
  font-size: 56px;
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
`;
const Subtitle = styled.p`
  font-size: 24px;
  max-width: 500px;
  text-align: center;
  position: relative;

  &::after {
    content: "🥳";
    position: absolute;
    left: -30px;
    bottom: -25px;
    transform: rotate(-20deg);
    font-size: 56px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 24px;
  max-width: 500px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  position: relative;

  &::before {
    content: "👉";
    position: absolute;
    font-size: 26px;
    left: -50px;
  }

  &::after {
    content: "👈";
    position: absolute;
    font-size: 26px;
    right: -50px;
  }
`;
