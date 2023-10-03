import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Title>Just a boilerplate for next</Title>
      <Subtitle>
        Magnificent Next.js boilerplate with TypeScript, ESLint, Prettier and
        everything else you need to bootstrap your Next.js project.
      </Subtitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;
// color: ${({ theme }) => theme.colors.primary};
const Subtitle = styled.p`
  font-size: 24px;
  max-width: 500px;
  text-align: center;
  margin-top: 32px;
`;
