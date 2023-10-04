import { FC } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element | string | string[];
};

export const AppLayout: FC<LayoutProps> = ({ children }) => {
  return <AppLayoutContainer>{children}</AppLayoutContainer>;
};

const AppLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.primary};
`;
