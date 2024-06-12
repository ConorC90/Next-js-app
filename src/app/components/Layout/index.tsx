// components/Layout.js or components/Layout.tsx
import styled from "styled-components";
import StyledFooter from "../Footer";
import Header from "../Header";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  flex: 1;
`;

const Layout = ({ children }: any) => (
  <PageContainer>
    <Header></Header>
    <ContentWrapper>{children}</ContentWrapper>
    <StyledFooter />
  </PageContainer>
);

export default Layout;
